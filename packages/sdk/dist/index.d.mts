import * as localforage from 'localforage';
import { IOriginStorageClient, IChangeData } from '@agentlink/core';
export { OriginStorage } from '@agentlink/core';

interface AgentLinkClientOptions {
    /**
     * 服务端存储页面的 URL
     * 例如: 'https://storage.example.com/storage'
     */
    serverUrl: string;
    /**
     * localforage 存储配置（可选）
     */
    storageOptions?: Parameters<typeof localforage.createInstance>[0];
}
interface WhitelistInfo {
    domain: string;
    description?: string | null;
}
interface WhitelistResponse {
    whitelist: WhitelistInfo | WhitelistInfo[] | null;
    origin: string | null;
}
/**
 * AgentLink 客户端 SDK
 * 用于跨域访问存储服务
 */
declare class AgentLinkClient implements IOriginStorageClient {
    private client;
    private serverUrl;
    constructor(options: AgentLinkClientOptions);
    /**
     * 获取当前 origin 的 hostname
     */
    private getCurrentHostname;
    /**
     * 连接成功回调
     */
    onConnect(callback: () => void): () => void;
    /**
     * 监听存储变更
     */
    onChange(callback: (data: IChangeData) => void): Promise<{
        off: () => void;
        broadcastChanges: boolean;
    }>;
    /**
     * 获取指定 key 的值
     * @param key 数据键
     * @param options 选项
     * @param options.filterOrigin 指定要读取的域名（默认：当前域名）
     * @param options.includeMetadata 是否包含元数据（origin 和 timestamp）
     */
    getItem(key: string, options?: {
        filterOrigin?: string;
        includeMetadata?: boolean;
    }): Promise<any>;
    /**
     * 设置指定 key 的值
     */
    setItem(key: string, value: any): Promise<void>;
    /**
     * 删除指定 key
     */
    removeItem(key: string): Promise<void>;
    /**
     * 清空所有数据
     * @param filterOrigin 指定要清除的域名（默认：当前域名）
     */
    clear(filterOrigin?: string): Promise<void>;
    /**
     * 获取存储项数量
     * @param filterOrigin 指定要统计的域名（默认：当前域名）
     */
    length(filterOrigin?: string): Promise<number>;
    /**
     * 获取指定索引的 key 名称
     * @param index 索引
     * @param filterOrigin 指定要查询的域名（默认：当前域名）
     */
    key(index: number, filterOrigin?: string): Promise<string | null>;
    /**
     * 获取所有 key 的数组
     * @param filterOrigin 指定要查询的域名（默认：当前域名）
     */
    keys(filterOrigin?: string): Promise<string[]>;
    /**
     * 获取包含元数据的数据项
     * @param key 数据键
     * @param filterOrigin 指定要读取的域名（默认：当前域名）
     * @returns 包含 value、origin 和 timestamp 的对象
     */
    getItemWithMetadata(key: string, filterOrigin?: string): Promise<{
        value: any;
        origin: string;
        timestamp: number;
    }>;
    /**
     * 获取所有数据项（支持过滤）
     * @param filterOrigin 指定要读取的域名（默认：当前域名）
     * @returns 包含所有数据的对象，key 为数据键，value 为包含 value、origin 和 timestamp 的对象
     */
    getAllItems(filterOrigin?: string): Promise<{
        [key: string]: {
            value: any;
            origin: string;
            timestamp: number;
        };
    }>;
    /**
     * 获取白名单信息
     * @param includeAll 如果为true，返回所有白名单；如果为false，只返回当前域名的白名单信息
     */
    getWhitelistInfo(includeAll?: boolean): Promise<WhitelistResponse>;
}

export { AgentLinkClient, type AgentLinkClientOptions, type WhitelistInfo, type WhitelistResponse };
