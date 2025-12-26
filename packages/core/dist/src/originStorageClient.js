"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginStorageClient = void 0;
const tslib_1 = require("tslib");
const data_transport_1 = require("data-transport");
class OriginStorageClient extends data_transport_1.IFrameTransport.Main {
    constructor(_a) {
        var { storageOptions, uri } = _a, options = tslib_1.__rest(_a, ["storageOptions", "uri"]);
        const iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'display:none');
        iframe.src = uri;
        document.body.appendChild(iframe);
        super(Object.assign({ iframe }, options));
        this._onConnectCallbacks = new Set();
        this._onChangeCallbacks = new Set();
        this._uri = uri;
        this._isConnect = false;
        this._storageOptions = storageOptions;
        this._connectPromise = new Promise((resolve) => {
            this._connectResolve = resolve;
        });
    }
    _connect() {
        this._onConnectCallbacks.forEach((callback) => callback());
    }
    /**
     * The callback will be called when the iframe is connected.
     */
    onConnect(callback) {
        this._onConnectCallbacks.add(callback);
        if (this._isConnect) {
            callback();
        }
        return () => {
            this._onConnectCallbacks.delete(callback);
        };
    }
    /**
     * The callback will be called when the storage is changed.
     */
    onChange(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._onChangeCallbacks.add(callback);
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('broadcastChanges');
            if (!result.broadcastChanges) {
                if (__DEV__) {
                    console.error(`The 'broadcastChanges' in 'OriginStorage' has not been enabled, Please check ${this._uri}.`);
                }
            }
            return Object.assign(Object.assign({}, result), { off: () => {
                    this._onChangeCallbacks.delete(callback);
                } });
        });
    }
    _change(data) {
        this._onChangeCallbacks.forEach((callback) => {
            try {
                callback(data);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    change(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._change(Object.assign(Object.assign({}, options), (typeof options.key === 'string' && !options.value
                ? { value: yield this.getItem(options.key) }
                : {})));
        });
    }
    getConfig() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._storageOptions;
        });
    }
    connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (typeof this._connect !== 'function') {
                if (__DEV__) {
                    throw new Error(`'onConnect' has not been called.`);
                }
            }
            this._isConnect = true;
            (_a = this._connectResolve) === null || _a === void 0 ? void 0 : _a.call(this);
            (_b = this._connect) === null || _b === void 0 ? void 0 : _b.call(this);
        });
    }
    /**
     * Get the value of the specified key.
     */
    getItem(key, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('getItem', Object.assign({ key }, options));
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'getItem' error: ${result.error}`);
            }
            if (options === null || options === void 0 ? void 0 : options.includeMetadata) {
                // 确保返回完整的元数据对象
                const metadataResult = result;
                // 验证元数据完整性
                if (metadataResult && typeof metadataResult === 'object' && 'value' in metadataResult && 'origin' in metadataResult && 'timestamp' in metadataResult) {
                    return metadataResult;
                }
                // 如果格式不对，抛出错误
                throw new Error(`Invalid metadata format: ${JSON.stringify(result)}`);
            }
            const { value } = result;
            return value;
        });
    }
    /**
     * Set the value of the specified key.
     */
    setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('setItem', { key, value });
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'setItem' error: ${result.error}`);
            }
            return result;
        });
    }
    /**
     * Remove the value of the specified key.
     */
    removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('removeItem', { key });
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'removeItem' error: ${result.error}`);
            }
            return result;
        });
    }
    /**
     * Clear all key/value pairs in the storage.
     */
    clear(filterOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('clear', filterOrigin ? { filterOrigin } : undefined);
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'clear' error: ${result.error}`);
            }
            return result;
        });
    }
    /**
     * Get the number of key/value pairs in the storage.
     */
    length(filterOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('length', filterOrigin ? { filterOrigin } : undefined);
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'length' error: ${result.error}`);
            }
            return result === null || result === void 0 ? void 0 : result.length;
        });
    }
    /**
     * Get the name of the nth key in the storage.
     */
    key(index, filterOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('key', Object.assign({ index }, (filterOrigin ? { filterOrigin } : {})));
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'key' error: ${result.error}`);
            }
            return result === null || result === void 0 ? void 0 : result.key;
        });
    }
    /**
     * Get all keys in the storage.
     */
    keys(filterOrigin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('keys', filterOrigin ? { filterOrigin } : undefined);
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'keys' error: ${result.error}`);
            }
            return result === null || result === void 0 ? void 0 : result.keys;
        });
    }
}
exports.OriginStorageClient = OriginStorageClient;
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorageClient.prototype, "change", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorageClient.prototype, "getConfig", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorageClient.prototype, "connect", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luU3RvcmFnZUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcmlnaW5TdG9yYWdlQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBeUQ7QUFhekQsTUFBYSxtQkFDWCxTQUFRLGdDQUFlLENBQUMsSUFBK0I7SUFTdkQsWUFBWSxFQUErRDtZQUEvRCxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQTBDLEVBQXJDLE9BQU8sc0JBQWpDLHlCQUFtQyxDQUFGO1FBQzNDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FBSyxpQkFDSCxNQUFNLElBQ0gsT0FBTyxFQUNWLENBQUM7UUFkSyx3QkFBbUIsR0FBb0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqRCx1QkFBa0IsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQWM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTU8sUUFBUTtRQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFD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QUMsWUFBcUI7O1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BGLElBQUssTUFBdUIsYUFBdkIsTUFBTSx1QkFBTixNQUFNLENBQW1CLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFrQixNQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDckUsQ0FBQztZQUNELE9BQVEsTUFBc0QsYUFBdEQsTUFBTSx1QkFBTixNQUFNLENBQWtELElBQUksQ0FBQztRQUN2RSxDQUFDO0tBQUE7Q0FDRjtBQXpORCxrREF5TkM7QUF0SU87SUFETCx1QkFBTTs7OztpREFRTjtBQUdLO0lBREwsdUJBQU07Ozs7b0RBR047QUFHSztJQURMLHVCQUFNOzs7O2tEQVVOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZyYW1lVHJhbnNwb3J0LCBsaXN0ZW4gfSBmcm9tICdkYXRhLXRyYW5zcG9ydCc7XG5pbXBvcnQge1xuICBDbGllbnRUb1N0b3JhZ2UsXG4gIElDaGFuZ2VEYXRhLFxuICBJT3JpZ2luU3RvcmFnZUNsaWVudCxcbiAgTG9jYWxGb3JhZ2VPcHRpb25zLFxuICBPcmlnaW5TdG9yYWdlQ2xpZW50T3B0aW9ucyxcbiAgU3RvcmFnZUVycm9yLFxuICBTdG9yYWdlVG9DbGllbnQsXG59IGZyb20gJy4vaW50ZXJmYWNlJztcblxudHlwZSBPbkNoYW5nZUNhbGxiYWNrID0gKGRhdGE6IElDaGFuZ2VEYXRhKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgT3JpZ2luU3RvcmFnZUNsaWVudFxuICBleHRlbmRzIElGcmFtZVRyYW5zcG9ydC5NYWluPHsgZW1pdDogQ2xpZW50VG9TdG9yYWdlIH0+XG4gIGltcGxlbWVudHMgU3RvcmFnZVRvQ2xpZW50LCBJT3JpZ2luU3RvcmFnZUNsaWVudFxue1xuICBwcm90ZWN0ZWQgX29uQ29ubmVjdENhbGxiYWNrczogU2V0PCgpID0+IHZvaWQ+ID0gbmV3IFNldCgpO1xuICBwcm90ZWN0ZWQgX29uQ2hhbmdlQ2FsbGJhY2tzOiBTZXQ8T25DaGFuZ2VDYWxsYmFjaz4gPSBuZXcgU2V0KCk7XG4gIHByb3RlY3RlZCBfaXNDb25uZWN0OiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3N0b3JhZ2VPcHRpb25zPzogTG9jYWxGb3JhZ2VPcHRpb25zO1xuICBwcm90ZWN0ZWQgX3VyaTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgc3RvcmFnZU9wdGlvbnMsIHVyaSwgLi4ub3B0aW9ucyB9OiBPcmlnaW5TdG9yYWdlQ2xpZW50T3B0aW9ucykge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpO1xuICAgIGlmcmFtZS5zcmMgPSB1cmk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIHN1cGVyKHtcbiAgICAgIGlmcmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gICAgdGhpcy5fdXJpID0gdXJpO1xuICAgIHRoaXMuX2lzQ29ubmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0b3JhZ2VPcHRpb25zID0gc3RvcmFnZU9wdGlvbnM7XG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fY29ubmVjdFJlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29ubmVjdFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbiAgcHJpdmF0ZSBfY29ubmVjdFJlc29sdmU/OiAoKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5fb25Db25uZWN0Q2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgaWZyYW1lIGlzIGNvbm5lY3RlZC5cbiAgICovXG4gIG9uQ29ubmVjdChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX29uQ29ubmVjdENhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgIGlmICh0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkNvbm5lY3RDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBzdG9yYWdlIGlzIGNoYW5nZWQuXG4gICAqL1xuICBhc3luYyBvbkNoYW5nZShjYWxsYmFjazogT25DaGFuZ2VDYWxsYmFjaykge1xuICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ2Jyb2FkY2FzdENoYW5nZXMnKTtcbiAgICBpZiAoIXJlc3VsdC5icm9hZGNhc3RDaGFuZ2VzKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBUaGUgJ2Jyb2FkY2FzdENoYW5nZXMnIGluICdPcmlnaW5TdG9yYWdlJyBoYXMgbm90IGJlZW4gZW5hYmxlZCwgUGxlYXNlIGNoZWNrICR7dGhpcy5fdXJpfS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBvZmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZShkYXRhOiBJQ2hhbmdlRGF0YSkge1xuICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgY2hhbmdlKG9wdGlvbnM6IElDaGFuZ2VEYXRhKSB7XG4gICAgdGhpcy5fY2hhbmdlKHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAuLi4odHlwZW9mIG9wdGlvbnMua2V5ID09PSAnc3RyaW5nJyAmJiAhb3B0aW9ucy52YWx1ZVxuICAgICAgICA/IHsgdmFsdWU6IGF3YWl0IHRoaXMuZ2V0SXRlbShvcHRpb25zLmtleSkgfVxuICAgICAgICA6IHt9KSxcbiAgICB9KTtcbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlT3B0aW9ucyE7XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb25uZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCdvbkNvbm5lY3QnIGhhcyBub3QgYmVlbiBjYWxsZWQuYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lzQ29ubmVjdCA9IHRydWU7XG4gICAgdGhpcy5fY29ubmVjdFJlc29sdmU/LigpO1xuICAgIHRoaXMuX2Nvbm5lY3Q/LigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAqL1xuICBhc3luYyBnZXRJdGVtKGtleTogc3RyaW5nLCBvcHRpb25zPzogeyBmaWx0ZXJPcmlnaW4/OiBzdHJpbmc7IGluY2x1ZGVNZXRhZGF0YT86IGJvb2xlYW4gfSkge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5lbWl0KCdnZXRJdGVtJywgeyBrZXksIC4uLm9wdGlvbnMgfSk7XG4gICAgaWYgKChyZXN1bHQgYXMgU3RvcmFnZUVycm9yKT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2dldEl0ZW0nIGVycm9yOiAkeyhyZXN1bHQgYXMgU3RvcmFnZUVycm9yKS5lcnJvcn1gKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnM/LmluY2x1ZGVNZXRhZGF0YSkge1xuICAgICAgLy8g56Gu5L+d6L+U5Zue5a6M5pW055qE5YWD5pWw5o2u5a+56LGhXG4gICAgICBjb25zdCBtZXRhZGF0YVJlc3VsdCA9IHJlc3VsdCBhcyB7IHZhbHVlOiB1bmtub3duOyBvcmlnaW46IHN0cmluZzsgdGltZXN0YW1wOiBudW1iZXIgfTtcbiAgICAgIC8vIOmqjOivgeWFg+aVsOaNruWujOaVtOaAp1xuICAgICAgaWYgKG1ldGFkYXRhUmVzdWx0ICYmIHR5cGVvZiBtZXRhZGF0YVJlc3VsdCA9PT0gJ29iamVjdCcgJiYgJ3ZhbHVlJyBpbiBtZXRhZGF0YVJlc3VsdCAmJiAnb3JpZ2luJyBpbiBtZXRhZGF0YVJlc3VsdCAmJiAndGltZXN0YW1wJyBpbiBtZXRhZGF0YVJlc3VsdCkge1xuICAgICAgICByZXR1cm4gbWV0YWRhdGFSZXN1bHQ7XG4gICAgICB9XG4gICAgICAvLyDlpoLmnpzmoLzlvI/kuI3lr7nvvIzmipvlh7rplJnor69cbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtZXRhZGF0YSBmb3JtYXQ6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0KX1gKTtcbiAgICB9XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcmVzdWx0IGFzIHsgdmFsdWU6IHVua25vd24gfTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICovXG4gIGFzeW5jIHNldEl0ZW08VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ3NldEl0ZW0nLCB7IGtleSwgdmFsdWUgfSk7XG4gICAgaWYgKChyZXN1bHQgYXMgU3RvcmFnZUVycm9yKT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ3NldEl0ZW0nIGVycm9yOiAkeyhyZXN1bHQgYXMgU3RvcmFnZUVycm9yKS5lcnJvcn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCBhcyBFeGNsdWRlPHR5cGVvZiByZXN1bHQsIFN0b3JhZ2VFcnJvcj47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICovXG4gIGFzeW5jIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZW1pdCgncmVtb3ZlSXRlbScsIHsga2V5IH0pO1xuICAgIGlmICgocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcik/LmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdyZW1vdmVJdGVtJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgYXMgRXhjbHVkZTx0eXBlb2YgcmVzdWx0LCBTdG9yYWdlRXJyb3I+O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIHN0b3JhZ2UuXG4gICAqL1xuICBhc3luYyBjbGVhcihmaWx0ZXJPcmlnaW4/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZW1pdCgnY2xlYXInLCBmaWx0ZXJPcmlnaW4gPyB7IGZpbHRlck9yaWdpbiB9IDogdW5kZWZpbmVkKTtcbiAgICBpZiAoKHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpPy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnY2xlYXInIGVycm9yOiAkeyhyZXN1bHQgYXMgU3RvcmFnZUVycm9yKS5lcnJvcn1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCBhcyBFeGNsdWRlPHR5cGVvZiByZXN1bHQsIFN0b3JhZ2VFcnJvcj47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2Yga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBzdG9yYWdlLlxuICAgKi9cbiAgYXN5bmMgbGVuZ3RoKGZpbHRlck9yaWdpbj86IHN0cmluZykge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5lbWl0KCdsZW5ndGgnLCBmaWx0ZXJPcmlnaW4gPyB7IGZpbHRlck9yaWdpbiB9IDogdW5kZWZpbmVkKTtcbiAgICBpZiAoKHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpPy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnbGVuZ3RoJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiAocmVzdWx0IGFzIEV4Y2x1ZGU8dHlwZW9mIHJlc3VsdCwgU3RvcmFnZUVycm9yIHwgdm9pZD4pPy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBudGgga2V5IGluIHRoZSBzdG9yYWdlLlxuICAgKi9cbiAgYXN5bmMga2V5KGluZGV4OiBudW1iZXIsIGZpbHRlck9yaWdpbj86IHN0cmluZykge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5lbWl0KCdrZXknLCB7IGluZGV4LCAuLi4oZmlsdGVyT3JpZ2luID8geyBmaWx0ZXJPcmlnaW4gfSA6IHt9KSB9KTtcbiAgICBpZiAoKHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpPy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAna2V5JyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiAocmVzdWx0IGFzIEV4Y2x1ZGU8dHlwZW9mIHJlc3VsdCwgU3RvcmFnZUVycm9yIHwgdm9pZD4pPy5rZXk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBrZXlzIGluIHRoZSBzdG9yYWdlLlxuICAgKi9cbiAgYXN5bmMga2V5cyhmaWx0ZXJPcmlnaW4/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZW1pdCgna2V5cycsIGZpbHRlck9yaWdpbiA/IHsgZmlsdGVyT3JpZ2luIH0gOiB1bmRlZmluZWQpO1xuICAgIGlmICgocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcik/LmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdrZXlzJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiAocmVzdWx0IGFzIEV4Y2x1ZGU8dHlwZW9mIHJlc3VsdCwgU3RvcmFnZUVycm9yIHwgdm9pZD4pPy5rZXlzO1xuICB9XG59XG4iXX0=