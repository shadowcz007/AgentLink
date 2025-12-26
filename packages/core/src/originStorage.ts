import { IFrameTransport, listen } from 'data-transport';
import { BroadcastChannel } from 'broadcast-channel';
import localforage from 'localforage';
import {
  DefaultBroadcastChannelName,
  NoAccessError,
  NoReadAccessError,
  NoWriteAccessError,
} from './constant';
import {
  ClientToStorage,
  IChangeData,
  OriginStorageOptions,
  StorageToClient,
  StoredData,
} from './interface';

export class OriginStorage
  extends IFrameTransport.IFrame<{ emit: StorageToClient }>
  implements ClientToStorage
{
  protected _localforage!: ReturnType<typeof localforage.createInstance>;
  protected _read: boolean;
  protected _write: boolean;
  protected _broadcastChanges: boolean;
  protected _broadcastChannel?: BroadcastChannel;

  /**
   * 提取 hostname（去除协议）
   */
  protected extractHostname(origin: string): string {
    if (!origin || origin.trim() === '') {
      return '';
    }
    try {
      const url = new URL(origin);
      return url.hostname + (url.port ? `:${url.port}` : '');
    } catch {
      // 如果不是完整 URL，尝试解析
      const match = origin.match(/\/\/([^\/]+)/);
      return match ? match[1] : origin;
    }
  }

  /**
   * 获取当前 origin 的 hostname
   */
  protected getCurrentOrigin(): string {
    if (typeof window !== 'undefined') {
      const storageOrigin = (window as any).STORAGE_ORIGIN;
      if (storageOrigin) {
        return this.extractHostname(storageOrigin);
      }
      // 后备：使用当前页面的 hostname
      return window.location.hostname + (window.location.port ? `:${window.location.port}` : '');
    }
    return '';
  }

  constructor({
    read = true,
    write = true,
    broadcastChanges = false,
    broadcastChannelName = DefaultBroadcastChannelName,
    ...options
  }: OriginStorageOptions = {}) {
    super(options);
    this._read = read;
    this._write = write;
    this._broadcastChanges = broadcastChanges;
    if (this._broadcastChanges) {
      this._broadcastChannel = new BroadcastChannel(broadcastChannelName);
      this._broadcastChannel.onmessage = (message) => {
        this.emit({ name: 'change', respond: false }, message);
      };
    }
    this.connect();
  }

  async connect() {
    if (!this._read && !this._write) {
      throw new Error(NoAccessError);
    }
    const config = await this.emit('getConfig');
    this._localforage = localforage.createInstance(config);
    await this.emit('connect');
  }

  @listen
  async broadcastChanges() {
    return { broadcastChanges: this._broadcastChanges };
  }

  @listen
  async getItem(options: { key: string; filterOrigin?: string; includeMetadata?: boolean }) {
    if (!this._read) {
      if (__DEV__) {
        console.error(NoReadAccessError);
      }
      return { error: NoReadAccessError };
    }
    try {
      const stored = (await this._localforage.getItem(options.key)) as StoredData | null;
      
      if (__DEV__) {
        console.log('[OriginStorage] getItem - stored:', stored, 'key:', options.key);
      }
      
      if (!stored) {
        return { error: 'Data not found' };
      }

      // 验证数据格式是否正确（包含 origin 和 timestamp）
      if (typeof stored !== 'object' || !('origin' in stored) || !('timestamp' in stored) || !('value' in stored)) {
        if (__DEV__) {
          console.error('[OriginStorage] getItem - Invalid data format:', stored);
        }
        return { error: 'Invalid data format: missing origin or timestamp' };
      }

      // 确定要使用的 origin
      const filterOrigin = options.filterOrigin || this.getCurrentOrigin();
      
      // 检查 origin 是否匹配
      if (stored.origin !== filterOrigin) {
        return { error: 'Data does not belong to the specified origin' };
      }

      // 如果请求包含元数据，返回完整对象
      if (options.includeMetadata) {
        return {
          value: stored.value,
          origin: stored.origin,
          timestamp: stored.timestamp,
        };
      }

      // 否则只返回 value
      return { value: stored.value };
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async setItem(options: { key: string; value: unknown }) {
    if (!this._write) {
      if (__DEV__) {
        console.error(NoWriteAccessError);
      }
      return { error: NoWriteAccessError };
    }
    try {
      const origin = this.getCurrentOrigin();
      if (__DEV__) {
        console.log('[OriginStorage] setItem - origin:', origin, 'key:', options.key);
      }
      const storedData: StoredData = {
        value: options.value,
        origin,
        timestamp: Date.now(),
      };
      if (__DEV__) {
        console.log('[OriginStorage] setItem - storedData:', storedData);
      }
      await this._localforage.setItem(options.key, storedData);
      this._broadcastChannel?.postMessage({
        key: options.key,
        origin,
        timestamp: storedData.timestamp,
      } as IChangeData);
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async removeItem(options: { key: string }) {
    if (!this._write) {
      if (__DEV__) {
        console.error(NoWriteAccessError);
      }
      return { error: NoWriteAccessError };
    }
    try {
      // 获取数据以获取 origin 信息
      const stored = (await this._localforage.getItem(options.key)) as StoredData | null;
      await this._localforage.removeItem(options.key);
      this._broadcastChannel?.postMessage({
        key: options.key,
        origin: stored?.origin,
        timestamp: stored?.timestamp,
      } as IChangeData);
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async clear(options?: { filterOrigin?: string }) {
    if (!this._write) {
      if (__DEV__) {
        console.error(NoWriteAccessError);
      }
      return { error: NoWriteAccessError };
    }
    try {
      const filterOrigin = options?.filterOrigin || this.getCurrentOrigin();
      
      // 获取所有 keys
      const allKeys = await this._localforage.keys();
      const keysToDelete: string[] = [];
      
      // 遍历所有 keys，检查 origin
      for (const key of allKeys) {
        const stored = (await this._localforage.getItem(key)) as StoredData | null;
        if (stored && stored.origin === filterOrigin) {
          keysToDelete.push(key);
        }
      }
      
      // 删除匹配的 keys
      for (const key of keysToDelete) {
        await this._localforage.removeItem(key);
      }
      
      // 如果删除了数据，发送通知
      if (keysToDelete.length > 0) {
        this._broadcastChannel?.postMessage({
          key: null,
          origin: filterOrigin,
        } as IChangeData);
      }
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async length(options?: { filterOrigin?: string }) {
    if (!this._read) {
      if (__DEV__) {
        console.error(NoReadAccessError);
      }
      return { error: NoReadAccessError };
    }
    try {
      const filterOrigin = options?.filterOrigin || this.getCurrentOrigin();
      const allKeys = await this._localforage.keys();
      let count = 0;
      
      // 遍历所有 keys，统计匹配 origin 的数量
      for (const key of allKeys) {
        const stored = (await this._localforage.getItem(key)) as StoredData | null;
        if (stored && stored.origin === filterOrigin) {
          count++;
        }
      }
      
      return { length: count };
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async key(options: { index: number; filterOrigin?: string }) {
    if (!this._read) {
      if (__DEV__) {
        console.error(NoReadAccessError);
      }
      return { error: NoReadAccessError };
    }
    try {
      const filterOrigin = options.filterOrigin || this.getCurrentOrigin();
      const allKeys = await this._localforage.keys();
      const filteredKeys: string[] = [];
      
      // 遍历所有 keys，过滤匹配 origin 的
      for (const key of allKeys) {
        const stored = (await this._localforage.getItem(key)) as StoredData | null;
        if (stored && stored.origin === filterOrigin) {
          filteredKeys.push(key);
        }
      }
      
      // 返回指定索引的 key
      const key = filteredKeys[options.index] || null;
      return { key };
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }

  @listen
  async keys(options?: { filterOrigin?: string }) {
    if (!this._read) {
      if (__DEV__) {
        console.error(NoReadAccessError);
      }
      return { error: NoReadAccessError };
    }
    try {
      const filterOrigin = options?.filterOrigin || this.getCurrentOrigin();
      const allKeys = await this._localforage.keys();
      const filteredKeys: string[] = [];
      
      // 遍历所有 keys，过滤匹配 origin 的
      for (const key of allKeys) {
        const stored = (await this._localforage.getItem(key)) as StoredData | null;
        if (stored && stored.origin === filterOrigin) {
          filteredKeys.push(key);
        }
      }
      
      return { keys: filteredKeys };
    } catch (e: any) {
      if (typeof e?.toString === 'function') {
        return { error: e.toString() };
      }
      if (__DEV__) {
        throw e;
      }
    }
  }
}
