"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginStorage = void 0;
const tslib_1 = require("tslib");
const data_transport_1 = require("data-transport");
const broadcast_channel_1 = require("broadcast-channel");
const localforage_1 = tslib_1.__importDefault(require("localforage"));
const constant_1 = require("./constant");
class OriginStorage extends data_transport_1.IFrameTransport.IFrame {
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
                const value = (yield this._localforage.getItem(options.key));
                return { value };
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
                yield this._localforage.setItem(options.key, options.value);
                (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                    key: options.key,
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
                yield this._localforage.removeItem(options.key);
                (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                    key: options.key,
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
    clear() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this._write) {
                if (__DEV__) {
                    console.error(constant_1.NoWriteAccessError);
                }
                return { error: constant_1.NoWriteAccessError };
            }
            try {
                yield this._localforage.clear();
                (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                    key: null,
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
    length() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const length = yield this._localforage.length();
                return { length };
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
                const key = yield this._localforage.key(options.index);
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
    keys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this._read) {
                if (__DEV__) {
                    console.error(constant_1.NoReadAccessError);
                }
                return { error: constant_1.NoReadAccessError };
            }
            try {
                const keys = yield this._localforage.keys();
                return { keys };
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
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "clear", null);
tslib_1.__decorate([
    data_transport_1.listen,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
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
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OriginStorage.prototype, "keys", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcmlnaW5TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxtREFBeUQ7QUFDekQseURBQXFEO0FBQ3JELHNFQUFzQztBQUN0Qyx5Q0FLb0I7QUFRcEIsTUFBYSxhQUNYLFNBQVEsZ0NBQWUsQ0FBQyxNQUFpQztJQVN6RCxZQUFZLEtBTWMsRUFBRTtZQU5oQixFQUNWLElBQUksR0FBRyxJQUFJLEVBQ1gsS0FBSyxHQUFHLElBQUksRUFDWixnQkFBZ0IsR0FBRyxLQUFLLEVBQ3hCLG9CQUFvQixHQUFHLHNDQUEyQixPQUV4QixFQUR2QixPQUFPLHNCQUxBLDZEQU1YLENBRFc7UUFFVixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxvQ0FBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQztRQUNKLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVLLE9BQU87O1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hD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RUFBRSxDQUFDO29CQUNaLE1BQU0sQ0FBQyxDQUFDO2dCQUNWLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFwTUQsc0NBb01DO0FBNUpPO0lBREwsdUJBQU07Ozs7cURBR047QUFHSztJQURMLHVCQUFNOzs7OzRDQW1CTjtBQUdLO0lBREwsdUJBQU07Ozs7NENBcUJOO0FBR0s7SUFETCx1QkFBTTs7OzsrQ0FxQk47QUFHSztJQURMLHVCQUFNOzs7OzBDQXFCTjtBQUdLO0lBREwsdUJBQU07Ozs7MkNBbUJOO0FBR0s7SUFETCx1QkFBTTs7Ozt3Q0FtQk47QUFHSztJQURMLHVCQUFNOzs7O3lDQW1CTiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGcmFtZVRyYW5zcG9ydCwgbGlzdGVuIH0gZnJvbSAnZGF0YS10cmFuc3BvcnQnO1xuaW1wb3J0IHsgQnJvYWRjYXN0Q2hhbm5lbCB9IGZyb20gJ2Jyb2FkY2FzdC1jaGFubmVsJztcbmltcG9ydCBsb2NhbGZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQge1xuICBEZWZhdWx0QnJvYWRjYXN0Q2hhbm5lbE5hbWUsXG4gIE5vQWNjZXNzRXJyb3IsXG4gIE5vUmVhZEFjY2Vzc0Vycm9yLFxuICBOb1dyaXRlQWNjZXNzRXJyb3IsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtcbiAgQ2xpZW50VG9TdG9yYWdlLFxuICBJQ2hhbmdlRGF0YSxcbiAgT3JpZ2luU3RvcmFnZU9wdGlvbnMsXG4gIFN0b3JhZ2VUb0NsaWVudCxcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgT3JpZ2luU3RvcmFnZVxuICBleHRlbmRzIElGcmFtZVRyYW5zcG9ydC5JRnJhbWU8eyBlbWl0OiBTdG9yYWdlVG9DbGllbnQgfT5cbiAgaW1wbGVtZW50cyBDbGllbnRUb1N0b3JhZ2VcbntcbiAgcHJvdGVjdGVkIF9sb2NhbGZvcmFnZSE6IFJldHVyblR5cGU8dHlwZW9mIGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlPjtcbiAgcHJvdGVjdGVkIF9yZWFkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3dyaXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Jyb2FkY2FzdENoYW5nZXM6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfYnJvYWRjYXN0Q2hhbm5lbD86IEJyb2FkY2FzdENoYW5uZWw7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHJlYWQgPSB0cnVlLFxuICAgIHdyaXRlID0gdHJ1ZSxcbiAgICBicm9hZGNhc3RDaGFuZ2VzID0gZmFsc2UsXG4gICAgYnJvYWRjYXN0Q2hhbm5lbE5hbWUgPSBEZWZhdWx0QnJvYWRjYXN0Q2hhbm5lbE5hbWUsXG4gICAgLi4ub3B0aW9uc1xuICB9OiBPcmlnaW5TdG9yYWdlT3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5fcmVhZCA9IHJlYWQ7XG4gICAgdGhpcy5fd3JpdGUgPSB3cml0ZTtcbiAgICB0aGlzLl9icm9hZGNhc3RDaGFuZ2VzID0gYnJvYWRjYXN0Q2hhbmdlcztcbiAgICBpZiAodGhpcy5fYnJvYWRjYXN0Q2hhbmdlcykge1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGJyb2FkY2FzdENoYW5uZWxOYW1lKTtcbiAgICAgIHRoaXMuX2Jyb2FkY2FzdENoYW5uZWwub25tZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KHsgbmFtZTogJ2NoYW5nZScsIHJlc3BvbmQ6IGZhbHNlIH0sIG1lc3NhZ2UpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGlmICghdGhpcy5fcmVhZCAmJiAhdGhpcy5fd3JpdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihOb0FjY2Vzc0Vycm9yKTtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgdGhpcy5lbWl0KCdnZXRDb25maWcnKTtcbiAgICB0aGlzLl9sb2NhbGZvcmFnZSA9IGxvY2FsZm9yYWdlLmNyZWF0ZUluc3RhbmNlKGNvbmZpZyk7XG4gICAgYXdhaXQgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIGJyb2FkY2FzdENoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHsgYnJvYWRjYXN0Q2hhbmdlczogdGhpcy5fYnJvYWRjYXN0Q2hhbmdlcyB9O1xuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyBnZXRJdGVtKG9wdGlvbnM6IHsga2V5OiBzdHJpbmcgfSkge1xuICAgIGlmICghdGhpcy5fcmVhZCkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihOb1JlYWRBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9SZWFkQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gKGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLmdldEl0ZW0ob3B0aW9ucy5rZXkpKSBhcyB1bmtub3duO1xuICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmICh0eXBlb2YgZT8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUudG9TdHJpbmcoKSB9O1xuICAgICAgfVxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIHNldEl0ZW0ob3B0aW9uczogeyBrZXk6IHN0cmluZzsgdmFsdWU6IHVua25vd24gfSkge1xuICAgIGlmICghdGhpcy5fd3JpdGUpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9Xcml0ZUFjY2Vzc0Vycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yOiBOb1dyaXRlQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLnNldEl0ZW0ob3B0aW9ucy5rZXksIG9wdGlvbnMudmFsdWUpO1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbD8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBrZXk6IG9wdGlvbnMua2V5LFxuICAgICAgfSBhcyBJQ2hhbmdlRGF0YSk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIGU/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlLnRvU3RyaW5nKCkgfTtcbiAgICAgIH1cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyByZW1vdmVJdGVtKG9wdGlvbnM6IHsga2V5OiBzdHJpbmcgfSkge1xuICAgIGlmICghdGhpcy5fd3JpdGUpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9Xcml0ZUFjY2Vzc0Vycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yOiBOb1dyaXRlQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuX2xvY2FsZm9yYWdlLnJlbW92ZUl0ZW0ob3B0aW9ucy5rZXkpO1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbD8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBrZXk6IG9wdGlvbnMua2V5LFxuICAgICAgfSBhcyBJQ2hhbmdlRGF0YSk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIGU/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlLnRvU3RyaW5nKCkgfTtcbiAgICAgIH1cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyBjbGVhcigpIHtcbiAgICBpZiAoIXRoaXMuX3dyaXRlKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmVycm9yKE5vV3JpdGVBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9Xcml0ZUFjY2Vzc0Vycm9yIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5jbGVhcigpO1xuICAgICAgdGhpcy5fYnJvYWRjYXN0Q2hhbm5lbD8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBrZXk6IG51bGwsXG4gICAgICB9IGFzIElDaGFuZ2VEYXRhKTtcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmICh0eXBlb2YgZT8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGUudG9TdHJpbmcoKSB9O1xuICAgICAgfVxuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbGlzdGVuXG4gIGFzeW5jIGxlbmd0aCgpIHtcbiAgICBpZiAoIXRoaXMuX3JlYWQpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoTm9SZWFkQWNjZXNzRXJyb3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZXJyb3I6IE5vUmVhZEFjY2Vzc0Vycm9yIH07XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsZW5ndGggPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5sZW5ndGgoKTtcbiAgICAgIHJldHVybiB7IGxlbmd0aCB9O1xuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKHR5cGVvZiBlPy50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogZS50b1N0cmluZygpIH07XG4gICAgICB9XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBsaXN0ZW5cbiAgYXN5bmMga2V5KG9wdGlvbnM6IHsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgaWYgKCF0aGlzLl9yZWFkKSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBjb25zb2xlLmVycm9yKE5vUmVhZEFjY2Vzc0Vycm9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGVycm9yOiBOb1JlYWRBY2Nlc3NFcnJvciB9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qga2V5ID0gYXdhaXQgdGhpcy5fbG9jYWxmb3JhZ2Uua2V5KG9wdGlvbnMuaW5kZXgpO1xuICAgICAgcmV0dXJuIHsga2V5IH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIGU/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlLnRvU3RyaW5nKCkgfTtcbiAgICAgIH1cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGxpc3RlblxuICBhc3luYyBrZXlzKCkge1xuICAgIGlmICghdGhpcy5fcmVhZCkge1xuICAgICAgaWYgKF9fREVWX18pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihOb1JlYWRBY2Nlc3NFcnJvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBlcnJvcjogTm9SZWFkQWNjZXNzRXJyb3IgfTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGtleXMgPSBhd2FpdCB0aGlzLl9sb2NhbGZvcmFnZS5rZXlzKCk7XG4gICAgICByZXR1cm4geyBrZXlzIH07XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAodHlwZW9mIGU/LnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBlLnRvU3RyaW5nKCkgfTtcbiAgICAgIH1cbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=