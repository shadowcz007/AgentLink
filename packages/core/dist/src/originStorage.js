"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginStorage = void 0;
const tslib_1 = require("tslib");
const data_transport_1 = require("data-transport");
const broadcast_channel_1 = require("broadcast-channel");
const localforage_1 = tslib_1.__importDefault(require("localforage"));
const constant_1 = require("./constant");
class OriginStorage extends data_transport_1.IFrameTransport.IFrame {
    /**
     * 提取 hostname（去除协议）
     */
    extractHostname(origin) {
        if (!origin || origin.trim() === '') {
            return '';
        }
        try {
            const url = new URL(origin);
            return url.hostname + (url.port ? `:${url.port}` : '');
        }
        catch (_a) {
            // 如果不是完整 URL，尝试解析
            const match = origin.match(/\/\/([^\/]+)/);
            return match ? match[1] : origin;
        }
    }
    /**
     * 获取当前 origin 的 hostname
     */
    getCurrentOrigin() {
        if (typeof window !== 'undefined') {
            const storageOrigin = window.STORAGE_ORIGIN;
            if (storageOrigin) {
                return this.extractHostname(storageOrigin);
            }
            // 后备：使用当前页面的 hostname
            return window.location.hostname + (window.location.port ? `:${window.location.port}` : '');
        }
        return '';
    }
    constructor(_a = {}) {
        var { read = true, write = true, broadcastChanges = false, broadcastChannelName = constant_1.DefaultBroadcastChannelName } = _a, options = tslib_1.__rest(_a, ["read", "write", "broadcastChanges", "broadcastChannelName"]);
        super(options);
        this._read = read;
        this._write = write;
        this._broadcastChanges = broadcastChanges;
        if (this._broadcastChanges) {
            this._broadcastChannel = new broadcast_channel_1.BroadcastChannel(broadcastChannelName);
            this._broadcastChannel.onmessage = (message) => {
                this.emit({ name: 'change', respond: false }, message);
            };
        }
        this.connect();
    }
    connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read && !this._write) {
                throw new Error(constant_1.NoAccessError);
            }
            const config = yield this.emit('getConfig');
            this._localforage = localforage_1.default.createInstance(config);
            yield this.emit('connect');
        });
    }
    broadcastChanges() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return { broadcastChanges: this._broadcastChanges };
        });
    }
    getItem(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const stored = (yield this._localforage.getItem(options.key));
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
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    setItem(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this._write) {
                if (__DEV__) {
                    console.error(constant_1.NoWriteAccessError);
                }
                return { error: constant_1.NoWriteAccessError };
            }
            try {
                const origin = this.getCurrentOrigin();
                if (__DEV__) {
                    console.log('[OriginStorage] setItem - origin:', origin, 'key:', options.key);
                }
                const storedData = {
                    value: options.value,
                    origin,
                    timestamp: Date.now(),
                };
                if (__DEV__) {
                    console.log('[OriginStorage] setItem - storedData:', storedData);
                }
                yield this._localforage.setItem(options.key, storedData);
                (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                    key: options.key,
                    origin,
                    timestamp: storedData.timestamp,
                });
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    removeItem(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this._write) {
                if (__DEV__) {
                    console.error(constant_1.NoWriteAccessError);
                }
                return { error: constant_1.NoWriteAccessError };
            }
            try {
                // 获取数据以获取 origin 信息
                const stored = (yield this._localforage.getItem(options.key));
                yield this._localforage.removeItem(options.key);
                (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                    key: options.key,
                    origin: stored === null || stored === void 0 ? void 0 : stored.origin,
                    timestamp: stored === null || stored === void 0 ? void 0 : stored.timestamp,
                });
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    clear(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this._write) {
                if (__DEV__) {
                    console.error(constant_1.NoWriteAccessError);
                }
                return { error: constant_1.NoWriteAccessError };
            }
            try {
                const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
                // 获取所有 keys
                const allKeys = yield this._localforage.keys();
                const keysToDelete = [];
                // 遍历所有 keys，检查 origin
                for (const key of allKeys) {
                    const stored = (yield this._localforage.getItem(key));
                    if (stored && stored.origin === filterOrigin) {
                        keysToDelete.push(key);
                    }
                }
                // 删除匹配的 keys
                for (const key of keysToDelete) {
                    yield this._localforage.removeItem(key);
                }
                // 如果删除了数据，发送通知
                if (keysToDelete.length > 0) {
                    (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                        key: null,
                        origin: filterOrigin,
                    });
                }
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    length(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
                const allKeys = yield this._localforage.keys();
                let count = 0;
                // 遍历所有 keys，统计匹配 origin 的数量
                for (const key of allKeys) {
                    const stored = (yield this._localforage.getItem(key));
                    if (stored && stored.origin === filterOrigin) {
                        count++;
                    }
                }
                return { length: count };
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    key(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const filterOrigin = options.filterOrigin || this.getCurrentOrigin();
                const allKeys = yield this._localforage.keys();
                const filteredKeys = [];
                // 遍历所有 keys，过滤匹配 origin 的
                for (const key of allKeys) {
                    const stored = (yield this._localforage.getItem(key));
                    if (stored && stored.origin === filterOrigin) {
                        filteredKeys.push(key);
                    }
                }
                // 返回指定索引的 key
                const key = filteredKeys[options.index] || null;
                return { key };
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
    keys(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
                const allKeys = yield this._localforage.keys();
                const filteredKeys = [];
                // 遍历所有 keys，过滤匹配 origin 的
                for (const key of allKeys) {
                    const stored = (yield this._localforage.getItem(key));
                    if (stored && stored.origin === filterOrigin) {
                        filteredKeys.push(key);
                    }
                }
                return { keys: filteredKeys };
            }
            catch (e) {
                if (typeof (e === null || e === void 0 ? void 0 : e.toString) === 'function') {
                    return { error: e.toString() };
                }
                if (__DEV__) {
                    throw e;
                }
            }
        });
    }
}
exports.OriginStorage = OriginStorage;
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "broadcastChanges", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "getItem", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "setItem", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "removeItem", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "clear", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "length", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "key", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "keys", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcmlnaW5TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBeUQ7QUFDekQseURBQXFEO0FBQ3JELHNFQUFzQztBQUN0Qyx5Q0FLb0I7QUFTcEIsTUFBYSxhQUNYLFNBQVEsZ0NBQWUsQ0FBQyxNQUFpQztJQVN6RDs7T0FFRztJQUNPLGVBQWUsQ0FBQyxNQUFjO1FBQ3RDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELElBQUksQ0FBQztZQUNILE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQUMsV0FBTSxDQUFDO1lBQ1Asa0JBQWtCO1lBQ2xCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDM0MsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxnQkFBZ0I7UUFDeEIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxNQUFNLGFBQWEsR0FBSSxNQUFjLENBQUMsY0FBYyxDQUFDO1lBQ3JELElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3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Ozs7MENBMkNOO0FBR0s7SUFETCx1QkFBTTs7OzsyQ0E4Qk47QUFHSztJQURMLHVCQUFNOzs7O3dDQWdDTjtBQUdLO0lBREwsdUJBQU07Ozs7eUNBOEJOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZyYW1lVHJhbnNwb3J0LCBsaXN0ZW4gfSBmcm9tICdkYXRhLXRyYW5zcG9ydCc7XG5pbXBvcnQgeyBCcm9hZGNhc3RDaGFubmVsIH0gZnJvbSAnYnJvYWRjYXN0LWNoYW5uZWwnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7XG4gIERlZmF1bHRCcm9hZGNhc3RDaGFubmVsTmFtZSxcbiAgTm9BY2Nlc3NFcnJvcixcbiAgTm9SZWFkQWNjZXNzRXJyb3IsXG4gIE5vV3JpdGVBY2Nlc3NFcnJvcixcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1xuICBDbGllbnRUb1N0b3JhZ2UsXG4gIElDaGFuZ2VEYXRhLFxuICBPcmlnaW5TdG9yYWdlT3B0aW9ucyxcbiAgU3RvcmFnZVRvQ2xpZW50LFxuICBTdG9yZWREYXRhLFxufSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBPcmlnaW5TdG9yYWdlXG4gIGV4dGVuZHMgSUZyYW1lVHJhbnNwb3J0LklGcmFtZTx7IGVtaXQ6IFN0b3JhZ2VUb0NsaWVudCB9PlxuICBpbXBsZW1lbnRzIENsaWVudFRvU3RvcmFnZVxue1xuICBwcm90ZWN0ZWQgX2xvY2FsZm9yYWdlITogUmV0dXJuVHlwZTx0eXBlb2YgbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2U+O1xuICBwcm90ZWN0ZWQgX3JlYWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfd3JpdGU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfYnJvYWRjYXN0Q2hhbmdlczogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9icm9hZGNhc3RDaGFubmVsPzogQnJvYWRjYXN0Q2hhbm5lbDtcblxuICAvKipcbiAgICog5o+Q5Y+WIGhvc3RuYW1l77yI5Y676Zmk5Y2P6K6u77yJXG4gICAqL1xuICBwcm90ZWN0ZWQgZXh0cmFjdEhvc3RuYW1lKG9yaWdpbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW9yaWdpbiB8fCBvcmlnaW4udHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChvcmlnaW4pO1xuICAgICAgcmV0dXJuIHVybC5ob3N0bmFtZSArICh1cmwucG9ydCA/IGA6JHt1cmwucG9ydH1gIDogJycpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8g5aaC5p6c5LiN5piv5a6M5pW0IFVSTO+8jOWwneivleino+aekFxuICAgICAgY29uc3QgbWF0Y2ggPSBvcmlnaW4ubWF0Y2goL1xcL1xcLyhbXlxcL10rKS8pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBvcmlnaW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluW9k+WJjSBvcmlnaW4g55qEIGhvc3RuYW1lXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q3VycmVudE9yaWdpbigpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc3RvcmFnZU9yaWdpbiA9ICh3aW5kb3cgYXMgYW55KS5TVE9SQUdFX09SSUdJTjtcbiAgICAgIGlmIChzdG9yYWdlT3JpZ2luKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RIb3N0bmFtZShzdG9yYWdlT3JpZ2luKTtcbiAgICAgIH1cbiAgICAgIC8vIOWQjuWkh++8muS9v+eUqOW9k+WJjemhtemdoueahCBob3N0bmFtZVxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/IGA6JHt3aW5kb3cubG9jYXRpb24ucG9ydH1gIDogJycpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgcmVhZCA9IHRydWUsXG4gICAgd3JpdGUgPSB0cnVlLFxuICAgIGJyb2FkY2FzdENoYW5nZXMgPSBmYWxzZSxcbiAgICBicm9hZGNhc3RDaGFubmVsTmFtZSA9IERlZmF1bHRCcm9hZGNhc3RDaGFubmVsTmFtZSxcbiAgICAuLi5vcHRpb25zXG4gIH06IE9yaWdpblN0b3JhZ2VPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLl9yZWFkID0gcmVhZDtcbiAgICB0aGlzLl93cml0ZSA9IHdyaXRlO1xuICAgIHRoaXMuX2Jyb2FkY2FzdENoYW5nZXMgPSBicm9hZGNhc3RDaGFuZ2VzO1xuICAgIGlmICh0aGlzLl9icm9hZGNhc3RDaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9icm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYnJvYWRjYXN0Q2hhbm5lbE5hbWUpO1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoeyBuYW1lOiAnY2hhbmdlJywgcmVzcG9uZDogZmFsc2UgfSwgbWVzc2FnZSk7XG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLl9yZWFkICYmICF0aGlzLl93cml0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE5vQWNjZXNzRXJyb3IpO1xuICAgIH1cbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCB0aGlzLmVtaXQoJ2dldENvbmZpZycpO1xuICAgIHRoaXMuX2xvY2FsZm9yYWdlID0gbG9jYWxmb3JhZ2UuY3JlYXRlSW5zdGFuY2UoY29uZmlnKTtcbiAgICBhd2FpdCB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgYnJvYWRjYXN0Q2hhbmdlcygpIHtcbiAgICByZXR1cm4geyBicm9hZGNhc3RDaGFuZ2VzOiB0aGlzLl9icm9hZGNhc3RDaGFuZ2VzIH07XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIGdldEl0ZW0ob3B0aW9uczogeyBrZXk6IHN0cmluZzsgZmlsdGVyT3JpZ2luPzogc3RyaW5nOyBpbmNsdWRlTWV0YWRhdGE/OiBib29sZWFuIH0pIHtcbiAgICBpZiAoIXRoaXMuX3JlYWQpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9SZWFkQWNjZXNzRXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZXJyb3I6IE5vUmVhZEFjY2Vzc0Vycm9yIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZWQgPSAoYXdhaXQgdGhpcy5fbG9jYWxmb3JhZ2UuZ2V0SXRlbShvcHRpb25zLmtleSkpIGFzIFN0b3JlZERhdGEgfCBudWxsO1xuICAgICAgXG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmxvZygnW09yaWdpblN0b3JhZ2VdIGdldEl0ZW0gLSBzdG9yZWQ6Jywgc3RvcmVkLCAna2V5OicsIG9wdGlvbnMua2V5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCFzdG9yZWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdEYXRhIG5vdCBmb3VuZCcgfTtcbiAgICAgIH1cblxuICAgICAgLy8g6aqM6K+B5pWw5o2u5qC85byP5piv5ZCm5q2j56Gu77yI5YyF5ZCrIG9yaWdpbiDlkowgdGltZXN0YW1w77yJXG4gICAgICBpZiAodHlwZW9mIHN0b3JlZCAhPT0gJ29iamVjdCcgfHwgISgnb3JpZ2luJyBpbiBzdG9yZWQpIHx8ICEoJ3RpbWVzdGFtcCcgaW4gc3RvcmVkKSB8fCAhKCd2YWx1ZScgaW4gc3RvcmVkKSkge1xuICAgICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tPcmlnaW5TdG9yYWdlXSBnZXRJdGVtIC0gSW52YWxpZCBkYXRhIGZvcm1hdDonLCBzdG9yZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGVycm9yOiAnSW52YWxpZCBkYXRhIGZvcm1hdDogbWlzc2luZyBvcmlnaW4gb3IgdGltZXN0YW1wJyB9O1xuICAgICAgfVxuXG4gICAgICAvLyDnoa7lrpropoHkvb/nlKjnmoQgb3JpZ2luXG4gICAgICBjb25zdCBmaWx0ZXJPcmlnaW4gPSBvcHRpb25zLmZpbHRlck9yaWdpbiB8fCB0aGlzLmdldEN1cnJlbnRPcmlnaW4oKTtcbiAgICAgIFxuICAgICAgLy8g5qOA5p+lIG9yaWdpbiDmmK/lkKbljLnphY1cbiAgICAgIGlmIChzdG9yZWQub3JpZ2luICE9PSBmaWx0ZXJPcmlnaW4pIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6ICdEYXRhIGRvZXMgbm90IGJlbG9uZyB0byB0aGUgc3BlY2lmaWVkIG9yaWdpbicgfTtcbiAgICAgIH1cblxuICAgICAgLy8g5aaC5p6c6K+35rGC5YyF5ZCr5YWD5pWw5o2u77yM6L+U5Zue5a6M5pW05a+56LGhXG4gICAgICBpZiAob3B0aW9ucy5pbmNsdWRlTWV0YWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogc3RvcmVkLnZhbHVlLFxuICAgICAgICAgIG9yaWdpbjogc3RvcmVkLm9yaWdpbixcbiAgICAgICAgICB0aW1lc3RhbXA6IHN0b3JlZC50aW1lc3RhbXAsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIOWQpuWImeWPqui/lOWbniB2YWx1ZVxuICAgICAgcmV0dXJuIHsgdmFsdWU6IHN0b3JlZC52YWx1ZSB9O1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiBlPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogZS50b1N0cmluZygpIH07XG4gICAgICB9XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgc2V0SXRlbShvcHRpb25zOiB7IGtleTogc3RyaW5nOyB2YWx1ZTogdW5rbm93biB9KSB7XG4gICAgaWYgKCF0aGlzLl93cml0ZSkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihOb1dyaXRlQWNjZXNzRXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZXJyb3I6IE5vV3JpdGVBY2Nlc3NFcnJvciB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3JpZ2luID0gdGhpcy5nZXRDdXJyZW50T3JpZ2luKCk7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmxvZygnW09yaWdpblN0b3JhZ2VdIHNldEl0ZW0gLSBvcmlnaW46Jywgb3JpZ2luLCAna2V5OicsIG9wdGlvbnMua2V5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0b3JlZERhdGE6IFN0b3JlZERhdGEgPSB7XG4gICAgICAgIHZhbHVlOiBvcHRpb25zLnZhbHVlLFxuICAgICAgICBvcmlnaW4sXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIH07XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmxvZygnW09yaWdpblN0b3JhZ2VdIHNldEl0ZW0gLSBzdG9yZWREYXRhOicsIHN0b3JlZERhdGEpO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fbG9jYWxmb3JhZ2Uuc2V0SXRlbShvcHRpb25zLmtleSwgc3RvcmVkRGF0YSk7XG4gICAgICB0aGlzLl9icm9hZGNhc3RDaGFubmVsPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGtleTogb3B0aW9ucy5rZXksXG4gICAgICAgIG9yaWdpbixcbiAgICAgICAgdGltZXN0YW1wOiBzdG9yZWREYXRhLnRpbWVzdGFtcCxcbiAgICAgIH0gYXMgSUNoYW5nZURhdGEpO1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiBlPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogZS50b1N0cmluZygpIH07XG4gICAgICB9XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMgcmVtb3ZlSXRlbShvcHRpb25zOiB7IGtleTogc3RyaW5nIH0pIHtcbiAgICBpZiAoIXRoaXMuX3dyaXRlKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmVycm9yKE5vV3JpdGVBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9Xcml0ZUFjY2Vzc0Vycm9yIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyDojrflj5bmlbDmja7ku6Xojrflj5Ygb3JpZ2luIOS/oeaBr1xuICAgICAgY29uc3Qgc3RvcmVkID0gKGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLmdldEl0ZW0ob3B0aW9ucy5rZXkpKSBhcyBTdG9yZWREYXRhIHwgbnVsbDtcbiAgICAgIGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLnJlbW92ZUl0ZW0ob3B0aW9ucy5rZXkpO1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbD8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBrZXk6IG9wdGlvbnMua2V5LFxuICAgICAgICBvcmlnaW46IHN0b3JlZD8ub3JpZ2luLFxuICAgICAgICB0aW1lc3RhbXA6IHN0b3JlZD8udGltZXN0YW1wLFxuICAgICAgfSBhcyBJQ2hhbmdlRGF0YSk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIGU/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlLnRvU3RyaW5nKCkgfTtcbiAgICAgIH1cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyBjbGVhcihvcHRpb25zPzogeyBmaWx0ZXJPcmlnaW4/OiBzdHJpbmcgfSkge1xuICAgIGlmICghdGhpcy5fd3JpdGUpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9Xcml0ZUFjY2Vzc0Vycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yOiBOb1dyaXRlQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbHRlck9yaWdpbiA9IG9wdGlvbnM/LmZpbHRlck9yaWdpbiB8fCB0aGlzLmdldEN1cnJlbnRPcmlnaW4oKTtcbiAgICAgIFxuICAgICAgLy8g6I635Y+W5omA5pyJIGtleXNcbiAgICAgIGNvbnN0IGFsbEtleXMgPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5rZXlzKCk7XG4gICAgICBjb25zdCBrZXlzVG9EZWxldGU6IHN0cmluZ1tdID0gW107XG4gICAgICBcbiAgICAgIC8vIOmBjeWOhuaJgOaciSBrZXlz77yM5qOA5p+lIG9yaWdpblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYWxsS2V5cykge1xuICAgICAgICBjb25zdCBzdG9yZWQgPSAoYXdhaXQgdGhpcy5fbG9jYWxmb3JhZ2UuZ2V0SXRlbShrZXkpKSBhcyBTdG9yZWREYXRhIHwgbnVsbDtcbiAgICAgICAgaWYgKHN0b3JlZCAmJiBzdG9yZWQub3JpZ2luID09PSBmaWx0ZXJPcmlnaW4pIHtcbiAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOWIoOmZpOWMuemFjeeahCBrZXlzXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fbG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDlpoLmnpzliKDpmaTkuobmlbDmja7vvIzlj5HpgIHpgJrnn6VcbiAgICAgIGlmIChrZXlzVG9EZWxldGUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9icm9hZGNhc3RDaGFubmVsPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAga2V5OiBudWxsLFxuICAgICAgICAgIG9yaWdpbjogZmlsdGVyT3JpZ2luLFxuICAgICAgICB9IGFzIElDaGFuZ2VEYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmICh0eXBlb2YgZT8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUudG9TdHJpbmcoKSB9O1xuICAgICAgfVxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIGxlbmd0aChvcHRpb25zPzogeyBmaWx0ZXJPcmlnaW4/OiBzdHJpbmcgfSkge1xuICAgIGlmICghdGhpcy5fcmVhZCkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihOb1JlYWRBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9SZWFkQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbHRlck9yaWdpbiA9IG9wdGlvbnM/LmZpbHRlck9yaWdpbiB8fCB0aGlzLmdldEN1cnJlbnRPcmlnaW4oKTtcbiAgICAgIGNvbnN0IGFsbEtleXMgPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5rZXlzKCk7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgXG4gICAgICAvLyDpgY3ljobmiYDmnIkga2V5c++8jOe7n+iuoeWMuemFjSBvcmlnaW4g55qE5pWw6YePXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBhbGxLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZCA9IChhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5nZXRJdGVtKGtleSkpIGFzIFN0b3JlZERhdGEgfCBudWxsO1xuICAgICAgICBpZiAoc3RvcmVkICYmIHN0b3JlZC5vcmlnaW4gPT09IGZpbHRlck9yaWdpbikge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0dXJuIHsgbGVuZ3RoOiBjb3VudCB9O1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiBlPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogZS50b1N0cmluZygpIH07XG4gICAgICB9XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMga2V5KG9wdGlvbnM6IHsgaW5kZXg6IG51bWJlcjsgZmlsdGVyT3JpZ2luPzogc3RyaW5nIH0pIHtcbiAgICBpZiAoIXRoaXMuX3JlYWQpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9SZWFkQWNjZXNzRXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZXJyb3I6IE5vUmVhZEFjY2Vzc0Vycm9yIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWx0ZXJPcmlnaW4gPSBvcHRpb25zLmZpbHRlck9yaWdpbiB8fCB0aGlzLmdldEN1cnJlbnRPcmlnaW4oKTtcbiAgICAgIGNvbnN0IGFsbEtleXMgPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5rZXlzKCk7XG4gICAgICBjb25zdCBmaWx0ZXJlZEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgICBcbiAgICAgIC8vIOmBjeWOhuaJgOaciSBrZXlz77yM6L+H5ruk5Yy56YWNIG9yaWdpbiDnmoRcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFsbEtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkID0gKGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLmdldEl0ZW0oa2V5KSkgYXMgU3RvcmVkRGF0YSB8IG51bGw7XG4gICAgICAgIGlmIChzdG9yZWQgJiYgc3RvcmVkLm9yaWdpbiA9PT0gZmlsdGVyT3JpZ2luKSB7XG4gICAgICAgICAgZmlsdGVyZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDov5Tlm57mjIflrprntKLlvJXnmoQga2V5XG4gICAgICBjb25zdCBrZXkgPSBmaWx0ZXJlZEtleXNbb3B0aW9ucy5pbmRleF0gfHwgbnVsbDtcbiAgICAgIHJldHVybiB7IGtleSB9O1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiBlPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogZS50b1N0cmluZygpIH07XG4gICAgICB9XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMga2V5cyhvcHRpb25zPzogeyBmaWx0ZXJPcmlnaW4/OiBzdHJpbmcgfSkge1xuICAgIGlmICghdGhpcy5fcmVhZCkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihOb1JlYWRBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9SZWFkQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbHRlck9yaWdpbiA9IG9wdGlvbnM/LmZpbHRlck9yaWdpbiB8fCB0aGlzLmdldEN1cnJlbnRPcmlnaW4oKTtcbiAgICAgIGNvbnN0IGFsbEtleXMgPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5rZXlzKCk7XG4gICAgICBjb25zdCBmaWx0ZXJlZEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgICBcbiAgICAgIC8vIOmBjeWOhuaJgOaciSBrZXlz77yM6L+H5ruk5Yy56YWNIG9yaWdpbiDnmoRcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFsbEtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkID0gKGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLmdldEl0ZW0oa2V5KSkgYXMgU3RvcmVkRGF0YSB8IG51bGw7XG4gICAgICAgIGlmIChzdG9yZWQgJiYgc3RvcmVkLm9yaWdpbiA9PT0gZmlsdGVyT3JpZ2luKSB7XG4gICAgICAgICAgZmlsdGVyZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4geyBrZXlzOiBmaWx0ZXJlZEtleXMgfTtcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmICh0eXBlb2YgZT8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUudG9TdHJpbmcoKSB9O1xuICAgICAgfVxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==