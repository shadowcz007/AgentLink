import { db } from './db';

// 简单的内存缓存
const cache = new Map<string, { result: boolean; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5分钟缓存

// 缓存所有活跃域名列表（用于通配符匹配）
let activeDomainsCache: string[] | null = null;
let activeDomainsCacheTime: number = 0;
const ACTIVE_DOMAINS_CACHE_TTL = 1 * 60 * 1000; // 1分钟缓存

export async function getAllDomains() {
  return db.domainWhitelist.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function getActiveDomains() {
  return db.domainWhitelist.findMany({
    where: { status: 'active' },
    select: { domain: true },
  });
}

export async function addDomain(domain: string) {
  // 清除缓存
  cache.clear();
  activeDomainsCache = null;
  activeDomainsCacheTime = 0; // 重置时间戳，强制下次重新加载
  console.log(`[域名验证] ➕ 添加域名: ${domain}, 已清除缓存`);
  return db.domainWhitelist.create({
    data: { domain },
  });
}

export async function deleteDomain(id: string) {
  // 清除缓存
  cache.clear();
  activeDomainsCache = null;
  activeDomainsCacheTime = 0; // 重置时间戳，强制下次重新加载
  console.log(`[域名验证] ➖ 删除域名 ID: ${id}, 已清除缓存`);
  return db.domainWhitelist.delete({
    where: { id },
  });
}

export async function updateDomainStatus(id: string, status: 'active' | 'inactive') {
  // 清除缓存
  cache.clear();
  activeDomainsCache = null;
  activeDomainsCacheTime = 0; // 重置时间戳，强制下次重新加载
  return db.domainWhitelist.update({
    where: { id },
    data: { status },
  });
}

// 清除所有缓存（用于调试或手动刷新）
export function clearCache() {
  cache.clear();
  activeDomainsCache = null;
  activeDomainsCacheTime = 0;
  console.log('[域名验证] 🗑️ 已清除所有缓存');
}

export async function isDomainAllowed(domain: string): Promise<boolean> {
  // 检查缓存
  const cached = cache.get(domain);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.result;
  }

  const record = await db.domainWhitelist.findFirst({
    where: {
      domain,
      status: 'active',
    },
  });
  
  const result = !!record;
  // 更新缓存
  cache.set(domain, { result, timestamp: Date.now() });
  return result;
}

// 支持通配符匹配，如 *.example.com
export async function isDomainAllowedWithWildcard(origin: string): Promise<boolean> {
  // 提取域名（去除协议和端口）
  let hostname: string;
  try {
    const url = new URL(origin);
    hostname = url.hostname;
  } catch {
    // 如果 origin 不是有效的 URL，直接返回 false
    console.log(`[域名验证] ❌ 无效的 origin: ${origin}`);
    return false;
  }

  // 获取所有活跃域名（使用缓存）
  const now = Date.now();
  if (!activeDomainsCache || now - activeDomainsCacheTime > ACTIVE_DOMAINS_CACHE_TTL) {
    const domains = await db.domainWhitelist.findMany({
      where: { status: 'active' },
      select: { domain: true },
    });
    activeDomainsCache = domains.map(d => d.domain);
    activeDomainsCacheTime = now;
    console.log(`[域名验证] 📋 加载活跃域名列表 (${activeDomainsCache.length} 个):`, activeDomainsCache);
  }

  // 检查缓存（使用 hostname 作为 key，在获取活跃域名列表之后）
  const cacheKey = `wildcard:${hostname}`;
  const cached = cache.get(cacheKey);
  
  // 先检查是否应该匹配（即使有缓存）
  let shouldMatch = false;
  let matchedDomain = '';
  
  // 精确匹配
  if (activeDomainsCache.includes(hostname)) {
    shouldMatch = true;
    matchedDomain = hostname;
  } else {
    // 通配符匹配
    const parts = hostname.split('.');
    for (let i = 0; i < parts.length; i++) {
      const wildcardDomain = '*' + '.' + parts.slice(i).join('.');
      if (activeDomainsCache.includes(wildcardDomain)) {
        shouldMatch = true;
        matchedDomain = wildcardDomain;
        break;
      }
    }
  }

  // 如果应该匹配但缓存显示拒绝，或者缓存过期，重新验证
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    if (shouldMatch && !cached.result) {
      // 缓存显示拒绝，但活跃域名列表中有匹配，清除缓存并重新验证
      console.log(`[域名验证] ⚠️ 缓存不一致 - Origin: ${origin}, Hostname: ${hostname}, 缓存结果: 拒绝, 但活跃域名列表中有匹配: ${matchedDomain}, 清除缓存并重新验证`);
      cache.delete(cacheKey);
    } else {
      // 缓存有效且一致
      console.log(`[域名验证] ✅ 使用缓存 - Origin: ${origin}, Hostname: ${hostname}, 结果: ${cached.result ? '允许' : '拒绝'}, 活跃域名: [${activeDomainsCache.join(', ')}]`);
      return cached.result;
    }
  }

  // 执行验证
  if (shouldMatch) {
    console.log(`[域名验证] ✅ ${matchedDomain.includes('*') ? '通配符' : '精确'}匹配 - Origin: ${origin}, Hostname: ${hostname}, 匹配域名: ${matchedDomain}`);
    cache.set(cacheKey, { result: true, timestamp: now });
    return true;
  }

  const result = false;
  console.log(`[域名验证] ❌ 未匹配 - Origin: ${origin}, Hostname: ${hostname}, 活跃域名列表: [${activeDomainsCache.join(', ')}]`);
  cache.set(cacheKey, { result, timestamp: now });
  return result;
}

