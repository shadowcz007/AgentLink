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
     */
    getItem(key: string): Promise<any>;
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
     */
    clear(): Promise<void>;
    /**
     * 获取存储项数量
     */
    length(): Promise<number>;
    /**
     * 获取指定索引的 key 名称
     */
    key(index: number): Promise<string>;
    /**
     * 获取所有 key 的数组
     */
    keys(): Promise<string[]>;
    /**
     * 获取白名单信息
     * @param includeAll 如果为true，返回所有白名单；如果为false，只返回当前域名的白名单信息
     */
    getWhitelistInfo(includeAll?: boolean): Promise<WhitelistResponse>;
}

export { AgentLinkClient, type AgentLinkClientOptions, type WhitelistInfo, type WhitelistResponse };
