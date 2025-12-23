import { headers } from 'next/headers';
import { isDomainAllowedWithWildcard } from '@/lib/domains';

export default async function StoragePage() {
  const headersList = await headers();
  const origin = headersList.get('origin') || 
                 headersList.get('referer')?.split('/').slice(0, 3).join('/') ||
                 '';

  if (!origin) {
    return (
      <div>Error: Cannot determine origin</div>
    );
  }

  // 验证域名是否在白名单中
  console.log(`[Storage Page] 🔍 开始验证域名白名单 - Origin: ${origin}`);
  const isAllowed = await isDomainAllowedWithWildcard(origin);
  console.log(`[Storage Page] ${isAllowed ? '✅' : '❌'} 域名验证结果: ${isAllowed ? '允许访问' : '拒绝访问'} - Origin: ${origin}`);

  if (!isAllowed) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Access Denied</h1>
        <p>Origin not whitelisted: {origin}</p>
      </div>
    );
  }

  // 如果允许，返回包含存储服务的页面
  // 注意：这里我们需要加载构建好的 core 包
  return (
    <div id="storage-container" style={{ display: 'none' }}></div>
  );
}
