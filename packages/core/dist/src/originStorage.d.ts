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
    constructor({ read, write, broadcastChanges, broadcastChannelName, ...options }?: OriginStorageOptions);
    connect(): Promise<void>;
    broadcastChanges(): Promise<{
        broadcastChanges: boolean;
    }>;
    getItem(options: {
        key: string;
    }): Promise<{
        value: unknown;
        error?: undefined;
    } | {
        error: any;
        value?: undefined;
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
    clear(): Promise<{
        error: any;
    } | undefined>;
    length(): Promise<{
        length: number;
        error?: undefined;
    } | {
        error: any;
        length?: undefined;
    } | undefined>;
    key(options: {
        index: number;
    }): Promise<{
        key: string;
        error?: undefined;
    } | {
        error: any;
        key?: undefined;
    } | undefined>;
    keys(): Promise<{
        keys: string[];
        error?: undefined;
    } | {
        error: any;
        keys?: undefined;
    } | undefined>;
}
//# sourceMappingURL=originStorage.d.ts.map