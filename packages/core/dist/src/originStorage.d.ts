import { IFrameTransport } from 'data-transport';
import { BroadcastChannel } from 'broadcast-channel';
import localforage from 'localforage';
import { ClientToStorage, OriginStorageOptions, StorageToClient } from './interface';
export declare class OriginStorage extends IFrameTransport.IFrame<{
    emit: StorageToClient;
}> implements ClientToStorage {
    protected _localforage: ReturnType<typeof localforage.createInstance>;
    protected _read: boolean;
    protected _write: boolean;
    protected _broadcastChanges: boolean;
    protected _broadcastChannel?: BroadcastChannel;
    /**
     * 提取 hostname（去除协议）
     */
    protected extractHostname(origin: string): string;
    /**
     * 获取当前 origin 的 hostname
     */
    protected getCurrentOrigin(): string;
    constructor({ read, write, broadcastChanges, broadcastChannelName, ...options }?: OriginStorageOptions);
    connect(): Promise<void>;
    broadcastChanges(): Promise<{
        broadcastChanges: boolean;
    }>;
    getItem(options: {
        key: string;
        filterOrigin?: string;
        includeMetadata?: boolean;
    }): Promise<{
        value: unknown;
        origin: string;
        timestamp: number;
        error?: undefined;
    } | {
        value: unknown;
        origin?: undefined;
        timestamp?: undefined;
        error?: undefined;
    } | {
        error: any;
        value?: undefined;
        origin?: undefined;
        timestamp?: undefined;
    } | undefined>;
    setItem(options: {
        key: string;
        value: unknown;
    }): Promise<{
        error: any;
    } | undefined>;
    removeItem(options: {
        key: string;
    }): Promise<{
        error: any;
    } | undefined>;
    clear(options?: {
        filterOrigin?: string;
    }): Promise<{
        error: any;
    } | undefined>;
    length(options?: {
        filterOrigin?: string;
    }): Promise<{
        length: number;
        error?: undefined;
    } | {
        error: any;
        length?: undefined;
    } | undefined>;
    key(options: {
        index: number;
        filterOrigin?: string;
    }): Promise<{
        key: string | null;
        error?: undefined;
    } | {
        error: any;
        key?: undefined;
    } | undefined>;
    keys(options?: {
        filterOrigin?: string;
    }): Promise<{
        keys: string[];
        error?: undefined;
    } | {
        error: any;
        keys?: undefined;
    } | undefined>;
}
//# sourceMappingURL=originStorage.d.ts.map