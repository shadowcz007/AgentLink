import { IFrameMainTransportOptions, IFrameTransportInternalOptions } from 'data-transport';
import localforage from 'localforage';
export type LocalForageOptions = Parameters<typeof localforage.createInstance>[0];
export interface OriginStorageClientOptions extends IFrameMainTransportOptions {
    /**
     * @description
     *
     * Specify the uri of an OriginStorage container.
     */
    uri: string;
    /**
     * @description
     *
     * Set storage options for localforage.
     */
    storageOptions?: LocalForageOptions;
}
export interface OriginStorageOptions extends IFrameTransportInternalOptions {
    /**
     * @description
     *
     * Enable read access to OriginStorage.
     */
    read?: boolean;
    /**
     * @description
     *
     * Enable write access to OriginStorage.
     */
    write?: boolean;
    /**
     * @description
     *
     * Enable broadcast data changes on OriginStorage.
     */
    broadcastChanges?: boolean;
    /**
     * @description
     *
     * Specify broadcastChannel name.
     */
    broadcastChannelName?: string;
}
export interface StoredData {
    value: unknown;
    origin: string;
    timestamp: number;
}
export interface IChangeData {
    key: string | null;
    value?: any;
    origin?: string;
    timestamp?: number;
}
export type StorageToClient = {
    connect(): Promise<void>;
    getConfig(): Promise<LocalForageOptions>;
    change(options: IChangeData): Promise<void>;
};
export interface StorageError {
    error: string;
}
export type ClientToStorage = {
    broadcastChanges(): Promise<{
        broadcastChanges: boolean;
    }>;
    getItem(options: {
        key: string;
        filterOrigin?: string;
        includeMetadata?: boolean;
    }): Promise<{
        value: unknown;
    } | {
        value: unknown;
        origin: string;
        timestamp: number;
    } | StorageError | void>;
    setItem(options: {
        key: string;
        value: unknown;
    }): Promise<StorageError | void>;
    removeItem(options: {
        key: string;
    }): Promise<StorageError | void>;
    clear(options?: {
        filterOrigin?: string;
    }): Promise<StorageError | void>;
    length(options?: {
        filterOrigin?: string;
    }): Promise<{
        length: number;
    } | StorageError | void>;
    key(options: {
        index: number;
        filterOrigin?: string;
    }): Promise<{
        key: string | null;
    } | StorageError | void>;
    keys(options?: {
        filterOrigin?: string;
    }): Promise<{
        keys: string[];
    } | StorageError | void>;
};
export interface IOriginStorageClient {
    getItem(key: string, options?: {
        filterOrigin?: string;
        includeMetadata?: boolean;
    }): Promise<any>;
    setItem(key: string, value: any): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(filterOrigin?: string): Promise<void>;
    length(filterOrigin?: string): Promise<number>;
    key(index: number, filterOrigin?: string): Promise<string | null>;
    keys(filterOrigin?: string): Promise<string[]>;
}
//# sourceMappingURL=interface.d.ts.map