import { IFrameTransport } from 'data-transport';
import { ClientToStorage, IChangeData, IOriginStorageClient, OriginStorageClientOptions, StorageToClient } from './interface';
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
    change(options: {
        key: string | null;
    }): Promise<void>;
    getConfig(): Promise<LocalForageOptions>;
    connect(): Promise<void>;
    /**
     * Get the value of the specified key.
     */
    getItem(key: string): Promise<unknown>;
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
    clear(): Promise<void>;
    /**
     * Get the number of key/value pairs in the storage.
     */
    length(): Promise<number>;
    /**
     * Get the name of the nth key in the storage.
     */
    key(index: number): Promise<string>;
    /**
     * Get all keys in the storage.
     */
    keys(): Promise<string[]>;
}
export {};
//# sourceMappingURL=originStorageClient.d.ts.map