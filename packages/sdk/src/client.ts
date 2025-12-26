import { OriginStorageClient } from '@agentlink/core';
import type { IOriginStorageClient, IChangeData } from '@agentlink/core';

export interface AgentLinkClientOptions {
  /**
   * 服务端存储页面的 URL
   * 例如: 'https://storage.example.com/storage'
   */
  serverUrl: string;
  /**
   * localforage 存储配置（可选）
   */
  storageOptions?: Parameters<typeof import('localforage').createInstance>[0];
}

export interface WhitelistInfo {
  domain: string;
  description?: string | null;
}

export interface WhitelistResponse {
  whitelist: WhitelistInfo | WhitelistInfo[] | null;
  origin: string | null;
}

/**
 * AgentLink 客户端 SDK
 * 用于跨域访问存储服务
 */
export class AgentLinkClient implements IOriginStorageClient {
  private client: OriginStorageClient;
  private serverUrl: string;

  constructor(options: AgentLinkClientOptions) {
    this.serverUrl = options.serverUrl;
    
    // 确保 URL 以 /storage 结尾
    const storageUrl = options.serverUrl.endsWith('/storage')
      ? options.serverUrl
      : `${options.serverUrl.replace(/\/$/, '')}/storage`;

    this.client = new OriginStorageClient({
      uri: storageUrl,
      storageOptions: options.storageOptions,
    });
  }

  /**
   * 获取当前 origin 的 hostname
   */
  private getCurrentHostname(): string {
    if (typeof window !== 'undefined') {
      return window.location.hostname + (window.location.port ? `:${window.location.port}` : '');
    }
    return '';
  }

  /**
   * 连接成功回调
   */
  onConnect(callback: () => void): () => void {
    return this.client.onConnect(callback);
  }

  /**
   * 监听存储变更
   */
  async onChange(callback: (data: IChangeData) => void): Promise<{ off: () => void; broadcastChanges: boolean }> {
    return this.client.onChange(callback);
  }

  /**
   * 获取指定 key 的值
   * @param key 数据键
   * @param options 选项
   * @param options.filterOrigin 指定要读取的域名（默认：当前域名）
   * @param options.includeMetadata 是否包含元数据（origin 和 timestamp）
   */
  async getItem(key: string, options?: { filterOrigin?: string; includeMetadata?: boolean }): Promise<any> {
    const filterOrigin = options?.filterOrigin || this.getCurrentHostname();
    return this.client.getItem(key, { filterOrigin, includeMetadata: options?.includeMetadata });
  }

  /**
   * 设置指定 key 的值
   */
  async setItem(key: string, value: any): Promise<void> {
    return this.client.setItem(key, value);
  }

  /**
   * 删除指定 key
   */
  async removeItem(key: string): Promise<void> {
    return this.client.removeItem(key);
  }

  /**
   * 清空所有数据
   * @param filterOrigin 指定要清除的域名（默认：当前域名）
   */
  async clear(filterOrigin?: string): Promise<void> {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.clear(origin);
  }

  /**
   * 获取存储项数量
   * @param filterOrigin 指定要统计的域名（默认：当前域名）
   */
  async length(filterOrigin?: string): Promise<number> {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.length(origin);
  }

  /**
   * 获取指定索引的 key 名称
   * @param index 索引
   * @param filterOrigin 指定要查询的域名（默认：当前域名）
   */
  async key(index: number, filterOrigin?: string): Promise<string | null> {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.key(index, origin);
  }

  /**
   * 获取所有 key 的数组
   * @param filterOrigin 指定要查询的域名（默认：当前域名）
   */
  async keys(filterOrigin?: string): Promise<string[]> {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.keys(origin);
  }

  /**
   * 获取包含元数据的数据项
   * @param key 数据键
   * @param filterOrigin 指定要读取的域名（默认：当前域名）
   * @returns 包含 value、origin 和 timestamp 的对象
   */
  async getItemWithMetadata(key: string, filterOrigin?: string): Promise<{ value: any; origin: string; timestamp: number }> {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.getItem(key, { filterOrigin: origin, includeMetadata: true }) as Promise<{ value: any; origin: string; timestamp: number }>;
  }

  /**
   * 获取所有数据项（支持过滤）
   * @param filterOrigin 指定要读取的域名（默认：当前域名）
   * @returns 包含所有数据的对象，key 为数据键，value 为包含 value、origin 和 timestamp 的对象
   */
  async getAllItems(filterOrigin?: string): Promise<{ [key: string]: { value: any; origin: string; timestamp: number } }> {
    const origin = filterOrigin || this.getCurrentHostname();
    const keys = await this.keys(origin);
    const result: { [key: string]: { value: any; origin: string; timestamp: number } } = {};
    
    for (const key of keys) {
      try {
        const item = await this.getItemWithMetadata(key, origin);
        result[key] = item;
      } catch (error) {
        // 忽略错误，继续处理下一个
        console.warn(`Failed to get item ${key}:`, error);
      }
    }
    
    return result;
  }

  /**
   * 获取白名单信息
   * @param includeAll 如果为true，返回所有白名单；如果为false，只返回当前域名的白名单信息
   */
  async getWhitelistInfo(includeAll: boolean = false): Promise<WhitelistResponse> {
    const baseUrl = this.serverUrl.replace('/storage', '');
    const url = `${baseUrl}/api/whitelist/info${includeAll ? '?includeAll=true' : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Origin': typeof window !== 'undefined' ? window.location.origin : '',
      },
    });

    if (!response.ok) {
      if (response.status === 403) {
        const data = await response.json();
        throw new Error(data.error || '域名不在白名单中');
      }
      throw new Error(`获取白名单信息失败: ${response.statusText}`);
    }

    return await response.json();
  }
}

