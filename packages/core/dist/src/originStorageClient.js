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
            this._change(Object.assign(Object.assign({}, options), (typeof options.key === 'string'
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
    getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('getItem', { key });
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'getItem' error: ${result.error}`);
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
    clear() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('clear');
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'clear' error: ${result.error}`);
            }
            return result;
        });
    }
    /**
     * Get the number of key/value pairs in the storage.
     */
    length() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('length');
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'length' error: ${result.error}`);
            }
            return result === null || result === void 0 ? void 0 : result.length;
        });
    }
    /**
     * Get the name of the nth key in the storage.
     */
    key(index) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('key', { index });
            if (result === null || result === void 0 ? void 0 : result.error) {
                throw new Error(`'key' error: ${result.error}`);
            }
            return result === null || result === void 0 ? void 0 : result.key;
        });
    }
    /**
     * Get all keys in the storage.
     */
    keys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._isConnect) {
                yield this._connectPromise;
            }
            const result = yield this.emit('keys');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luU3RvcmFnZUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcmlnaW5TdG9yYWdlQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBeUQ7QUFZekQsTUFBYSxtQkFDWCxTQUFRLGdDQUFlLENBQUMsSUFBK0I7SUFTdkQsWUFBWSxFQUErRDtZQUEvRCxFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQTBDLEVBQXJDLE9BQU8sc0JBQWpDLHlCQUFtQyxDQUFGO1FBQzNDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FBSyxpQkFDSCxNQUFNLElBQ0gsT0FBTyxFQUNWLENBQUM7UUFkSyx3QkFBbUIsR0FBb0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqRCx1QkFBa0IsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQWM5RCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTU8sUUFBUTtRQUNkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFD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LE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELElBQUssTUFBdUIsYUFBdkIsTUFBTSx1QkFBTixNQUFNLENBQW1CLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFpQixNQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUNELE9BQVEsTUFBc0QsYUFBdEQsTUFBTSx1QkFBTixNQUFNLENBQWtELEdBQUcsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNHLElBQUk7O1lBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzdCLENBQUM7WUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsSUFBSyxNQUF1QixhQUF2QixNQUFNLHVCQUFOLE1BQU0sQ0FBbUIsS0FBSyxFQUFFLENBQUM7Z0JBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWtCLE1BQXVCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBQ0QsT0FBUSxNQUFzRCxhQUF0RCxNQUFNLHVCQUFOLE1BQU0sQ0FBa0QsSUFBSSxDQUFDO1FBQ3ZFLENBQUM7S0FBQTtDQUNGO0FBL01ELGtEQStNQztBQTVITztJQURMLHVCQUFNOzs7O2lEQVFOO0FBR0s7SUFETCx1QkFBTTs7OztvREFHTjtBQUdLO0lBREwsdUJBQU07Ozs7a0RBVU4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnJhbWVUcmFuc3BvcnQsIGxpc3RlbiB9IGZyb20gJ2RhdGEtdHJhbnNwb3J0JztcbmltcG9ydCB7XG4gIENsaWVudFRvU3RvcmFnZSxcbiAgSUNoYW5nZURhdGEsXG4gIElPcmlnaW5TdG9yYWdlQ2xpZW50LFxuICBPcmlnaW5TdG9yYWdlQ2xpZW50T3B0aW9ucyxcbiAgU3RvcmFnZUVycm9yLFxuICBTdG9yYWdlVG9DbGllbnQsXG59IGZyb20gJy4vaW50ZXJmYWNlJztcblxudHlwZSBPbkNoYW5nZUNhbGxiYWNrID0gKGRhdGE6IElDaGFuZ2VEYXRhKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgT3JpZ2luU3RvcmFnZUNsaWVudFxuICBleHRlbmRzIElGcmFtZVRyYW5zcG9ydC5NYWluPHsgZW1pdDogQ2xpZW50VG9TdG9yYWdlIH0+XG4gIGltcGxlbWVudHMgU3RvcmFnZVRvQ2xpZW50LCBJT3JpZ2luU3RvcmFnZUNsaWVudFxue1xuICBwcm90ZWN0ZWQgX29uQ29ubmVjdENhbGxiYWNrczogU2V0PCgpID0+IHZvaWQ+ID0gbmV3IFNldCgpO1xuICBwcm90ZWN0ZWQgX29uQ2hhbmdlQ2FsbGJhY2tzOiBTZXQ8T25DaGFuZ2VDYWxsYmFjaz4gPSBuZXcgU2V0KCk7XG4gIHByb3RlY3RlZCBfaXNDb25uZWN0OiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3N0b3JhZ2VPcHRpb25zPzogTG9jYWxGb3JhZ2VPcHRpb25zO1xuICBwcm90ZWN0ZWQgX3VyaTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgc3RvcmFnZU9wdGlvbnMsIHVyaSwgLi4ub3B0aW9ucyB9OiBPcmlnaW5TdG9yYWdlQ2xpZW50T3B0aW9ucykge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZScpO1xuICAgIGlmcmFtZS5zcmMgPSB1cmk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIHN1cGVyKHtcbiAgICAgIGlmcmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gICAgdGhpcy5fdXJpID0gdXJpO1xuICAgIHRoaXMuX2lzQ29ubmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuX3N0b3JhZ2VPcHRpb25zID0gc3RvcmFnZU9wdGlvbnM7XG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fY29ubmVjdFJlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29ubmVjdFByb21pc2U6IFByb21pc2U8dm9pZD47XG5cbiAgcHJpdmF0ZSBfY29ubmVjdFJlc29sdmU/OiAoKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5fb25Db25uZWN0Q2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgaWZyYW1lIGlzIGNvbm5lY3RlZC5cbiAgICovXG4gIG9uQ29ubmVjdChjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuX29uQ29ubmVjdENhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgIGlmICh0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9vbkNvbm5lY3RDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBzdG9yYWdlIGlzIGNoYW5nZWQuXG4gICAqL1xuICBhc3luYyBvbkNoYW5nZShjYWxsYmFjazogT25DaGFuZ2VDYWxsYmFjaykge1xuICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ2Jyb2FkY2FzdENoYW5nZXMnKTtcbiAgICBpZiAoIXJlc3VsdC5icm9hZGNhc3RDaGFuZ2VzKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBUaGUgJ2Jyb2FkY2FzdENoYW5nZXMnIGluICdPcmlnaW5TdG9yYWdlJyBoYXMgbm90IGJlZW4gZW5hYmxlZCwgUGxlYXNlIGNoZWNrICR7dGhpcy5fdXJpfS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXN1bHQsXG4gICAgICBvZmY6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZShkYXRhOiBJQ2hhbmdlRGF0YSkge1xuICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgY2hhbmdlKG9wdGlvbnM6IHsga2V5OiBzdHJpbmcgfCBudWxsIH0pIHtcbiAgICB0aGlzLl9jaGFuZ2Uoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC4uLih0eXBlb2Ygb3B0aW9ucy5rZXkgPT09ICdzdHJpbmcnXG4gICAgICAgID8geyB2YWx1ZTogYXdhaXQgdGhpcy5nZXRJdGVtKG9wdGlvbnMua2V5KSB9XG4gICAgICAgIDoge30pLFxuICAgIH0pO1xuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2VPcHRpb25zITtcbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2Nvbm5lY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJ29uQ29ubmVjdCcgaGFzIG5vdCBiZWVuIGNhbGxlZC5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faXNDb25uZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLl9jb25uZWN0UmVzb2x2ZT8uKCk7XG4gICAgdGhpcy5fY29ubmVjdD8uKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIGtleS5cbiAgICovXG4gIGFzeW5jIGdldEl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZW1pdCgnZ2V0SXRlbScsIHsga2V5IH0pO1xuICAgIGlmICgocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcik/LmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdnZXRJdGVtJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHJlc3VsdCBhcyB7IHZhbHVlOiB1bmtub3duIH07XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAqL1xuICBhc3luYyBzZXRJdGVtPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bikge1xuICAgIGlmICghdGhpcy5faXNDb25uZWN0KSB7XG4gICAgICBhd2FpdCB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5lbWl0KCdzZXRJdGVtJywgeyBrZXksIHZhbHVlIH0pO1xuICAgIGlmICgocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcik/LmVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdzZXRJdGVtJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgYXMgRXhjbHVkZTx0eXBlb2YgcmVzdWx0LCBTdG9yYWdlRXJyb3I+O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBrZXkuXG4gICAqL1xuICBhc3luYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ3JlbW92ZUl0ZW0nLCB7IGtleSB9KTtcbiAgICBpZiAoKHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpPy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAncmVtb3ZlSXRlbScgZXJyb3I6ICR7KHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpLmVycm9yfWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0IGFzIEV4Y2x1ZGU8dHlwZW9mIHJlc3VsdCwgU3RvcmFnZUVycm9yPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBzdG9yYWdlLlxuICAgKi9cbiAgYXN5bmMgY2xlYXIoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ2NsZWFyJyk7XG4gICAgaWYgKChyZXN1bHQgYXMgU3RvcmFnZUVycm9yKT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2NsZWFyJyBlcnJvcjogJHsocmVzdWx0IGFzIFN0b3JhZ2VFcnJvcikuZXJyb3J9YCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgYXMgRXhjbHVkZTx0eXBlb2YgcmVzdWx0LCBTdG9yYWdlRXJyb3I+O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgc3RvcmFnZS5cbiAgICovXG4gIGFzeW5jIGxlbmd0aCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZW1pdCgnbGVuZ3RoJyk7XG4gICAgaWYgKChyZXN1bHQgYXMgU3RvcmFnZUVycm9yKT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2xlbmd0aCcgZXJyb3I6ICR7KHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpLmVycm9yfWApO1xuICAgIH1cbiAgICByZXR1cm4gKHJlc3VsdCBhcyBFeGNsdWRlPHR5cGVvZiByZXN1bHQsIFN0b3JhZ2VFcnJvciB8IHZvaWQ+KT8ubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgbnRoIGtleSBpbiB0aGUgc3RvcmFnZS5cbiAgICovXG4gIGFzeW5jIGtleShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ2tleScsIHsgaW5kZXggfSk7XG4gICAgaWYgKChyZXN1bHQgYXMgU3RvcmFnZUVycm9yKT8uZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2tleScgZXJyb3I6ICR7KHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpLmVycm9yfWApO1xuICAgIH1cbiAgICByZXR1cm4gKHJlc3VsdCBhcyBFeGNsdWRlPHR5cGVvZiByZXN1bHQsIFN0b3JhZ2VFcnJvciB8IHZvaWQ+KT8ua2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwga2V5cyBpbiB0aGUgc3RvcmFnZS5cbiAgICovXG4gIGFzeW5jIGtleXMoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmVtaXQoJ2tleXMnKTtcbiAgICBpZiAoKHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpPy5lcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAna2V5cycgZXJyb3I6ICR7KHJlc3VsdCBhcyBTdG9yYWdlRXJyb3IpLmVycm9yfWApO1xuICAgIH1cbiAgICByZXR1cm4gKHJlc3VsdCBhcyBFeGNsdWRlPHR5cGVvZiByZXN1bHQsIFN0b3JhZ2VFcnJvciB8IHZvaWQ+KT8ua2V5cztcbiAgfVxufVxuIl19