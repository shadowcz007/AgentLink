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
   */
  async getItem(key: string): Promise<any> {
    return this.client.getItem(key);
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
   */
  async clear(): Promise<void> {
    return this.client.clear();
  }

  /**
   * 获取存储项数量
   */
  async length(): Promise<number> {
    return this.client.length();
  }

  /**
   * 获取指定索引的 key 名称
   */
  async key(index: number): Promise<string> {
    return this.client.key(index);
  }

  /**
   * 获取所有 key 的数组
   */
  async keys(): Promise<string[]> {
    return this.client.keys();
  }
}

