import { IFrameTransport } from 'data-transport';
import { ClientToStorage, IChangeData, IOriginStorageClient, LocalForageOptions, OriginStorageClientOptions, StorageToClient } from './interface';
type OnChangeCallback = (data: IChangeData) => void;
export declare class OriginStorageClient extends IFrameTransport.Main<{
    emit: ClientToStorage;
}> implements StorageToClient, IOriginStorageClient {
    protected _onConnectCallbacks: Set<() => void>;
    protected _onChangeCallbacks: Set<OnChangeCallback>;
    protected _isConnect: boolean;
    protected _storageOptions?: LocalForageOptions;
    protected _uri: string;
    constructor({ storageOptions, uri, ...options }: OriginStorageClientOptions);
    private _connectPromise;
    private _connectResolve?;
    private _connect;
    /**
     * The callback will be called when the iframe is connected.
     */
    onConnect(callback: () => void): () => void;
    /**
     * The callback will be called when the storage is changed.
     */
    onChange(callback: OnChangeCallback): Promise<{
        off: () => void;
        broadcastChanges: boolean;
    }>;
    private _change;
    change(options: IChangeData): Promise<void>;
    getConfig(): Promise<globalThis.LocalForageOptions>;
    connect(): Promise<void>;
    /**
     * Get the value of the specified key.
     */
    getItem(key: string, options?: {
        filterOrigin?: string;
        includeMetadata?: boolean;
    }): Promise<unknown>;
    /**
     * Set the value of the specified key.
     */
    setItem<T>(key: string, value: unknown): Promise<void>;
    /**
     * Remove the value of the specified key.
     */
    removeItem(key: string): Promise<void>;
    /**
     * Clear all key/value pairs in the storage.
     */
    clear(filterOrigin?: string): Promise<void>;
    /**
     * Get the number of key/value pairs in the storage.
     */
    length(filterOrigin?: string): Promise<number>;
    /**
     * Get the name of the nth key in the storage.
     */
    key(index: number, filterOrigin?: string): Promise<string | null>;
    /**
     * Get all keys in the storage.
     */
    keys(filterOrigin?: string): Promise<string[]>;
}
export {};
//# sourceMappingURL=originStorageClient.d.ts.map