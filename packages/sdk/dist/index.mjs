var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "../../node_modules/tslib/tslib.es6.mjs"() {
    "use strict";
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// ../../node_modules/localforage/dist/localforage.js
var require_localforage = __commonJS({
  "../../node_modules/localforage/dist/localforage.js"(exports, module) {
    "use strict";
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.localforage = f();
      }
    })(function() {
      var define2, module2, exports2;
      return (function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof __require == "function" && __require;
              if (!u && a) return a(o2, true);
              if (i) return i(o2, true);
              var f = new Error("Cannot find module '" + o2 + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o2] = { exports: {} };
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof __require == "function" && __require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
      })({ 1: [function(_dereq_, module3, exports3) {
        (function(global2) {
          "use strict";
          var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
          var scheduleDrain;
          {
            if (Mutation) {
              var called = 0;
              var observer = new Mutation(nextTick);
              var element = global2.document.createTextNode("");
              observer.observe(element, {
                characterData: true
              });
              scheduleDrain = function() {
                element.data = called = ++called % 2;
              };
            } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
              var channel = new global2.MessageChannel();
              channel.port1.onmessage = nextTick;
              scheduleDrain = function() {
                channel.port2.postMessage(0);
              };
            } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
              scheduleDrain = function() {
                var scriptEl = global2.document.createElement("script");
                scriptEl.onreadystatechange = function() {
                  nextTick();
                  scriptEl.onreadystatechange = null;
                  scriptEl.parentNode.removeChild(scriptEl);
                  scriptEl = null;
                };
                global2.document.documentElement.appendChild(scriptEl);
              };
            } else {
              scheduleDrain = function() {
                setTimeout(nextTick, 0);
              };
            }
          }
          var draining;
          var queue = [];
          function nextTick() {
            draining = true;
            var i, oldQueue;
            var len = queue.length;
            while (len) {
              oldQueue = queue;
              queue = [];
              i = -1;
              while (++i < len) {
                oldQueue[i]();
              }
              len = queue.length;
            }
            draining = false;
          }
          module3.exports = immediate;
          function immediate(task) {
            if (queue.push(task) === 1 && !draining) {
              scheduleDrain();
            }
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}], 2: [function(_dereq_, module3, exports3) {
        "use strict";
        var immediate = _dereq_(1);
        function INTERNAL() {
        }
        var handlers = {};
        var REJECTED = ["REJECTED"];
        var FULFILLED = ["FULFILLED"];
        var PENDING = ["PENDING"];
        module3.exports = Promise2;
        function Promise2(resolver) {
          if (typeof resolver !== "function") {
            throw new TypeError("resolver must be a function");
          }
          this.state = PENDING;
          this.queue = [];
          this.outcome = void 0;
          if (resolver !== INTERNAL) {
            safelyResolveThenable(this, resolver);
          }
        }
        Promise2.prototype["catch"] = function(onRejected) {
          return this.then(null, onRejected);
        };
        Promise2.prototype.then = function(onFulfilled, onRejected) {
          if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
            return this;
          }
          var promise = new this.constructor(INTERNAL);
          if (this.state !== PENDING) {
            var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
            unwrap(promise, resolver, this.outcome);
          } else {
            this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
          }
          return promise;
        };
        function QueueItem(promise, onFulfilled, onRejected) {
          this.promise = promise;
          if (typeof onFulfilled === "function") {
            this.onFulfilled = onFulfilled;
            this.callFulfilled = this.otherCallFulfilled;
          }
          if (typeof onRejected === "function") {
            this.onRejected = onRejected;
            this.callRejected = this.otherCallRejected;
          }
        }
        QueueItem.prototype.callFulfilled = function(value) {
          handlers.resolve(this.promise, value);
        };
        QueueItem.prototype.otherCallFulfilled = function(value) {
          unwrap(this.promise, this.onFulfilled, value);
        };
        QueueItem.prototype.callRejected = function(value) {
          handlers.reject(this.promise, value);
        };
        QueueItem.prototype.otherCallRejected = function(value) {
          unwrap(this.promise, this.onRejected, value);
        };
        function unwrap(promise, func, value) {
          immediate(function() {
            var returnValue;
            try {
              returnValue = func(value);
            } catch (e) {
              return handlers.reject(promise, e);
            }
            if (returnValue === promise) {
              handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
            } else {
              handlers.resolve(promise, returnValue);
            }
          });
        }
        handlers.resolve = function(self2, value) {
          var result = tryCatch(getThen, value);
          if (result.status === "error") {
            return handlers.reject(self2, result.value);
          }
          var thenable = result.value;
          if (thenable) {
            safelyResolveThenable(self2, thenable);
          } else {
            self2.state = FULFILLED;
            self2.outcome = value;
            var i = -1;
            var len = self2.queue.length;
            while (++i < len) {
              self2.queue[i].callFulfilled(value);
            }
          }
          return self2;
        };
        handlers.reject = function(self2, error) {
          self2.state = REJECTED;
          self2.outcome = error;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callRejected(error);
          }
          return self2;
        };
        function getThen(obj) {
          var then = obj && obj.then;
          if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
            return function appyThen() {
              then.apply(obj, arguments);
            };
          }
        }
        function safelyResolveThenable(self2, thenable) {
          var called = false;
          function onError(value) {
            if (called) {
              return;
            }
            called = true;
            handlers.reject(self2, value);
          }
          function onSuccess(value) {
            if (called) {
              return;
            }
            called = true;
            handlers.resolve(self2, value);
          }
          function tryToUnwrap() {
            thenable(onSuccess, onError);
          }
          var result = tryCatch(tryToUnwrap);
          if (result.status === "error") {
            onError(result.value);
          }
        }
        function tryCatch(func, value) {
          var out = {};
          try {
            out.value = func(value);
            out.status = "success";
          } catch (e) {
            out.status = "error";
            out.value = e;
          }
          return out;
        }
        Promise2.resolve = resolve;
        function resolve(value) {
          if (value instanceof this) {
            return value;
          }
          return handlers.resolve(new this(INTERNAL), value);
        }
        Promise2.reject = reject;
        function reject(reason) {
          var promise = new this(INTERNAL);
          return handlers.reject(promise, reason);
        }
        Promise2.all = all;
        function all(iterable) {
          var self2 = this;
          if (Object.prototype.toString.call(iterable) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var len = iterable.length;
          var called = false;
          if (!len) {
            return this.resolve([]);
          }
          var values = new Array(len);
          var resolved = 0;
          var i = -1;
          var promise = new this(INTERNAL);
          while (++i < len) {
            allResolver(iterable[i], i);
          }
          return promise;
          function allResolver(value, i2) {
            self2.resolve(value).then(resolveFromAll, function(error) {
              if (!called) {
                called = true;
                handlers.reject(promise, error);
              }
            });
            function resolveFromAll(outValue) {
              values[i2] = outValue;
              if (++resolved === len && !called) {
                called = true;
                handlers.resolve(promise, values);
              }
            }
          }
        }
        Promise2.race = race;
        function race(iterable) {
          var self2 = this;
          if (Object.prototype.toString.call(iterable) !== "[object Array]") {
            return this.reject(new TypeError("must be an array"));
          }
          var len = iterable.length;
          var called = false;
          if (!len) {
            return this.resolve([]);
          }
          var i = -1;
          var promise = new this(INTERNAL);
          while (++i < len) {
            resolver(iterable[i]);
          }
          return promise;
          function resolver(value) {
            self2.resolve(value).then(function(response) {
              if (!called) {
                called = true;
                handlers.resolve(promise, response);
              }
            }, function(error) {
              if (!called) {
                called = true;
                handlers.reject(promise, error);
              }
            });
          }
        }
      }, { "1": 1 }], 3: [function(_dereq_, module3, exports3) {
        (function(global2) {
          "use strict";
          if (typeof global2.Promise !== "function") {
            global2.Promise = _dereq_(2);
          }
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, { "2": 2 }], 4: [function(_dereq_, module3, exports3) {
        "use strict";
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function getIDB() {
          try {
            if (typeof indexedDB !== "undefined") {
              return indexedDB;
            }
            if (typeof webkitIndexedDB !== "undefined") {
              return webkitIndexedDB;
            }
            if (typeof mozIndexedDB !== "undefined") {
              return mozIndexedDB;
            }
            if (typeof OIndexedDB !== "undefined") {
              return OIndexedDB;
            }
            if (typeof msIndexedDB !== "undefined") {
              return msIndexedDB;
            }
          } catch (e) {
            return;
          }
        }
        var idb = getIDB();
        function isIndexedDBValid() {
          try {
            if (!idb || !idb.open) {
              return false;
            }
            var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
            var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && // some outdated implementations of IDB that appear on Samsung
            // and HTC Android devices <4.4 are missing IDBKeyRange
            // See: https://github.com/mozilla/localForage/issues/128
            // See: https://github.com/mozilla/localForage/issues/272
            typeof IDBKeyRange !== "undefined";
          } catch (e) {
            return false;
          }
        }
        function createBlob(parts, properties) {
          parts = parts || [];
          properties = properties || {};
          try {
            return new Blob(parts, properties);
          } catch (e) {
            if (e.name !== "TypeError") {
              throw e;
            }
            var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
            var builder = new Builder();
            for (var i = 0; i < parts.length; i += 1) {
              builder.append(parts[i]);
            }
            return builder.getBlob(properties.type);
          }
        }
        if (typeof Promise === "undefined") {
          _dereq_(3);
        }
        var Promise$1 = Promise;
        function executeCallback(promise, callback) {
          if (callback) {
            promise.then(function(result) {
              callback(null, result);
            }, function(error) {
              callback(error);
            });
          }
        }
        function executeTwoCallbacks(promise, callback, errorCallback) {
          if (typeof callback === "function") {
            promise.then(callback);
          }
          if (typeof errorCallback === "function") {
            promise["catch"](errorCallback);
          }
        }
        function normalizeKey(key2) {
          if (typeof key2 !== "string") {
            console.warn(key2 + " used as a key, but it is not a string.");
            key2 = String(key2);
          }
          return key2;
        }
        function getCallback() {
          if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
            return arguments[arguments.length - 1];
          }
        }
        var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
        var supportsBlobs = void 0;
        var dbContexts = {};
        var toString = Object.prototype.toString;
        var READ_ONLY = "readonly";
        var READ_WRITE = "readwrite";
        function _binStringToArrayBuffer(bin) {
          var length2 = bin.length;
          var buf = new ArrayBuffer(length2);
          var arr = new Uint8Array(buf);
          for (var i = 0; i < length2; i++) {
            arr[i] = bin.charCodeAt(i);
          }
          return buf;
        }
        function _checkBlobSupportWithoutCaching(idb2) {
          return new Promise$1(function(resolve) {
            var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
            var blob = createBlob([""]);
            txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
            txn.onabort = function(e) {
              e.preventDefault();
              e.stopPropagation();
              resolve(false);
            };
            txn.oncomplete = function() {
              var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
              var matchedEdge = navigator.userAgent.match(/Edge\//);
              resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
            };
          })["catch"](function() {
            return false;
          });
        }
        function _checkBlobSupport(idb2) {
          if (typeof supportsBlobs === "boolean") {
            return Promise$1.resolve(supportsBlobs);
          }
          return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
            supportsBlobs = value;
            return supportsBlobs;
          });
        }
        function _deferReadiness(dbInfo) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = {};
          deferredOperation.promise = new Promise$1(function(resolve, reject) {
            deferredOperation.resolve = resolve;
            deferredOperation.reject = reject;
          });
          dbContext.deferredOperations.push(deferredOperation);
          if (!dbContext.dbReady) {
            dbContext.dbReady = deferredOperation.promise;
          } else {
            dbContext.dbReady = dbContext.dbReady.then(function() {
              return deferredOperation.promise;
            });
          }
        }
        function _advanceReadiness(dbInfo) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = dbContext.deferredOperations.pop();
          if (deferredOperation) {
            deferredOperation.resolve();
            return deferredOperation.promise;
          }
        }
        function _rejectReadiness(dbInfo, err) {
          var dbContext = dbContexts[dbInfo.name];
          var deferredOperation = dbContext.deferredOperations.pop();
          if (deferredOperation) {
            deferredOperation.reject(err);
            return deferredOperation.promise;
          }
        }
        function _getConnection(dbInfo, upgradeNeeded) {
          return new Promise$1(function(resolve, reject) {
            dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
            if (dbInfo.db) {
              if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
              } else {
                return resolve(dbInfo.db);
              }
            }
            var dbArgs = [dbInfo.name];
            if (upgradeNeeded) {
              dbArgs.push(dbInfo.version);
            }
            var openreq = idb.open.apply(idb, dbArgs);
            if (upgradeNeeded) {
              openreq.onupgradeneeded = function(e) {
                var db = openreq.result;
                try {
                  db.createObjectStore(dbInfo.storeName);
                  if (e.oldVersion <= 1) {
                    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                  }
                } catch (ex) {
                  if (ex.name === "ConstraintError") {
                    console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                  } else {
                    throw ex;
                  }
                }
              };
            }
            openreq.onerror = function(e) {
              e.preventDefault();
              reject(openreq.error);
            };
            openreq.onsuccess = function() {
              var db = openreq.result;
              db.onversionchange = function(e) {
                e.target.close();
              };
              resolve(db);
              _advanceReadiness(dbInfo);
            };
          });
        }
        function _getOriginalConnection(dbInfo) {
          return _getConnection(dbInfo, false);
        }
        function _getUpgradedConnection(dbInfo) {
          return _getConnection(dbInfo, true);
        }
        function _isUpgradeNeeded(dbInfo, defaultVersion) {
          if (!dbInfo.db) {
            return true;
          }
          var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
          var isDowngrade = dbInfo.version < dbInfo.db.version;
          var isUpgrade = dbInfo.version > dbInfo.db.version;
          if (isDowngrade) {
            if (dbInfo.version !== defaultVersion) {
              console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
            }
            dbInfo.version = dbInfo.db.version;
          }
          if (isUpgrade || isNewStore) {
            if (isNewStore) {
              var incVersion = dbInfo.db.version + 1;
              if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
              }
            }
            return true;
          }
          return false;
        }
        function _encodeBlob(blob) {
          return new Promise$1(function(resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;
            reader.onloadend = function(e) {
              var base64 = btoa(e.target.result || "");
              resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
              });
            };
            reader.readAsBinaryString(blob);
          });
        }
        function _decodeBlob(encodedBlob) {
          var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
          return createBlob([arrayBuff], { type: encodedBlob.type });
        }
        function _isEncodedBlob(value) {
          return value && value.__local_forage_encoded_blob;
        }
        function _fullyReady(callback) {
          var self2 = this;
          var promise = self2._initReady().then(function() {
            var dbContext = dbContexts[self2._dbInfo.name];
            if (dbContext && dbContext.dbReady) {
              return dbContext.dbReady;
            }
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        }
        function _tryReconnect(dbInfo) {
          _deferReadiness(dbInfo);
          var dbContext = dbContexts[dbInfo.name];
          var forages = dbContext.forages;
          for (var i = 0; i < forages.length; i++) {
            var forage = forages[i];
            if (forage._dbInfo.db) {
              forage._dbInfo.db.close();
              forage._dbInfo.db = null;
            }
          }
          dbInfo.db = null;
          return _getOriginalConnection(dbInfo).then(function(db) {
            dbInfo.db = db;
            if (_isUpgradeNeeded(dbInfo)) {
              return _getUpgradedConnection(dbInfo);
            }
            return db;
          }).then(function(db) {
            dbInfo.db = dbContext.db = db;
            for (var i2 = 0; i2 < forages.length; i2++) {
              forages[i2]._dbInfo.db = db;
            }
          })["catch"](function(err) {
            _rejectReadiness(dbInfo, err);
            throw err;
          });
        }
        function createTransaction(dbInfo, mode, callback, retries) {
          if (retries === void 0) {
            retries = 1;
          }
          try {
            var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
            callback(null, tx);
          } catch (err) {
            if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
              return Promise$1.resolve().then(function() {
                if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                  if (dbInfo.db) {
                    dbInfo.version = dbInfo.db.version + 1;
                  }
                  return _getUpgradedConnection(dbInfo);
                }
              }).then(function() {
                return _tryReconnect(dbInfo).then(function() {
                  createTransaction(dbInfo, mode, callback, retries - 1);
                });
              })["catch"](callback);
            }
            callback(err);
          }
        }
        function createDbContext() {
          return {
            // Running localForages sharing a database.
            forages: [],
            // Shared database.
            db: null,
            // Database readiness (promise).
            dbReady: null,
            // Deferred operations on the database.
            deferredOperations: []
          };
        }
        function _initStorage(options) {
          var self2 = this;
          var dbInfo = {
            db: null
          };
          if (options) {
            for (var i in options) {
              dbInfo[i] = options[i];
            }
          }
          var dbContext = dbContexts[dbInfo.name];
          if (!dbContext) {
            dbContext = createDbContext();
            dbContexts[dbInfo.name] = dbContext;
          }
          dbContext.forages.push(self2);
          if (!self2._initReady) {
            self2._initReady = self2.ready;
            self2.ready = _fullyReady;
          }
          var initPromises = [];
          function ignoreErrors() {
            return Promise$1.resolve();
          }
          for (var j = 0; j < dbContext.forages.length; j++) {
            var forage = dbContext.forages[j];
            if (forage !== self2) {
              initPromises.push(forage._initReady()["catch"](ignoreErrors));
            }
          }
          var forages = dbContext.forages.slice(0);
          return Promise$1.all(initPromises).then(function() {
            dbInfo.db = dbContext.db;
            return _getOriginalConnection(dbInfo);
          }).then(function(db) {
            dbInfo.db = db;
            if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
              return _getUpgradedConnection(dbInfo);
            }
            return db;
          }).then(function(db) {
            dbInfo.db = dbContext.db = db;
            self2._dbInfo = dbInfo;
            for (var k = 0; k < forages.length; k++) {
              var forage2 = forages[k];
              if (forage2 !== self2) {
                forage2._dbInfo.db = dbInfo.db;
                forage2._dbInfo.version = dbInfo.version;
              }
            }
          });
        }
        function getItem(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.get(key2);
                  req.onsuccess = function() {
                    var value = req.result;
                    if (value === void 0) {
                      value = null;
                    }
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    resolve(value);
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate(iterator, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.openCursor();
                  var iterationNumber = 1;
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (cursor) {
                      var value = cursor.value;
                      if (_isEncodedBlob(value)) {
                        value = _decodeBlob(value);
                      }
                      var result = iterator(value, cursor.key, iterationNumber++);
                      if (result !== void 0) {
                        resolve(result);
                      } else {
                        cursor["continue"]();
                      }
                    } else {
                      resolve();
                    }
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem(key2, value, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            var dbInfo;
            self2.ready().then(function() {
              dbInfo = self2._dbInfo;
              if (toString.call(value) === "[object Blob]") {
                return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                  if (blobSupport) {
                    return value;
                  }
                  return _encodeBlob(value);
                });
              }
              return value;
            }).then(function(value2) {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  if (value2 === null) {
                    value2 = void 0;
                  }
                  var req = store.put(value2, key2);
                  transaction.oncomplete = function() {
                    if (value2 === void 0) {
                      value2 = null;
                    }
                    resolve(value2);
                  };
                  transaction.onabort = transaction.onerror = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function removeItem(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store["delete"](key2);
                  transaction.oncomplete = function() {
                    resolve();
                  };
                  transaction.onerror = function() {
                    reject(req.error);
                  };
                  transaction.onabort = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function clear(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.clear();
                  transaction.oncomplete = function() {
                    resolve();
                  };
                  transaction.onabort = transaction.onerror = function() {
                    var err2 = req.error ? req.error : req.transaction.error;
                    reject(err2);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.count();
                  req.onsuccess = function() {
                    resolve(req.result);
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key(n, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            if (n < 0) {
              resolve(null);
              return;
            }
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var advanced = false;
                  var req = store.openKeyCursor();
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (!cursor) {
                      resolve(null);
                      return;
                    }
                    if (n === 0) {
                      resolve(cursor.key);
                    } else {
                      if (!advanced) {
                        advanced = true;
                        cursor.advance(n);
                      } else {
                        resolve(cursor.key);
                      }
                    }
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                if (err) {
                  return reject(err);
                }
                try {
                  var store = transaction.objectStore(self2._dbInfo.storeName);
                  var req = store.openKeyCursor();
                  var keys2 = [];
                  req.onsuccess = function() {
                    var cursor = req.result;
                    if (!cursor) {
                      resolve(keys2);
                      return;
                    }
                    keys2.push(cursor.key);
                    cursor["continue"]();
                  };
                  req.onerror = function() {
                    reject(req.error);
                  };
                } catch (e) {
                  reject(e);
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function dropInstance(options, callback) {
          callback = getCallback.apply(this, arguments);
          var currentConfig = this.config();
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
            var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              dbContext.db = db;
              for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
              }
              return db;
            });
            if (!options.storeName) {
              promise = dbPromise.then(function(db) {
                _deferReadiness(options);
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                db.close();
                for (var i = 0; i < forages.length; i++) {
                  var forage = forages[i];
                  forage._dbInfo.db = null;
                }
                var dropDBPromise = new Promise$1(function(resolve, reject) {
                  var req = idb.deleteDatabase(options.name);
                  req.onerror = function() {
                    var db2 = req.result;
                    if (db2) {
                      db2.close();
                    }
                    reject(req.error);
                  };
                  req.onblocked = function() {
                    console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                  };
                  req.onsuccess = function() {
                    var db2 = req.result;
                    if (db2) {
                      db2.close();
                    }
                    resolve(db2);
                  };
                });
                return dropDBPromise.then(function(db2) {
                  dbContext.db = db2;
                  for (var i2 = 0; i2 < forages.length; i2++) {
                    var _forage = forages[i2];
                    _advanceReadiness(_forage._dbInfo);
                  }
                })["catch"](function(err) {
                  (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                  });
                  throw err;
                });
              });
            } else {
              promise = dbPromise.then(function(db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                  return;
                }
                var newVersion = db.version + 1;
                _deferReadiness(options);
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                db.close();
                for (var i = 0; i < forages.length; i++) {
                  var forage = forages[i];
                  forage._dbInfo.db = null;
                  forage._dbInfo.version = newVersion;
                }
                var dropObjectPromise = new Promise$1(function(resolve, reject) {
                  var req = idb.open(options.name, newVersion);
                  req.onerror = function(err) {
                    var db2 = req.result;
                    db2.close();
                    reject(err);
                  };
                  req.onupgradeneeded = function() {
                    var db2 = req.result;
                    db2.deleteObjectStore(options.storeName);
                  };
                  req.onsuccess = function() {
                    var db2 = req.result;
                    db2.close();
                    resolve(db2);
                  };
                });
                return dropObjectPromise.then(function(db2) {
                  dbContext.db = db2;
                  for (var j = 0; j < forages.length; j++) {
                    var _forage2 = forages[j];
                    _forage2._dbInfo.db = db2;
                    _advanceReadiness(_forage2._dbInfo);
                  }
                })["catch"](function(err) {
                  (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                  });
                  throw err;
                });
              });
            }
          }
          executeCallback(promise, callback);
          return promise;
        }
        var asyncStorage = {
          _driver: "asyncStorage",
          _initStorage,
          _support: isIndexedDBValid(),
          iterate,
          getItem,
          setItem,
          removeItem,
          clear,
          length,
          key,
          keys,
          dropInstance
        };
        function isWebSQLValid() {
          return typeof openDatabase === "function";
        }
        var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var BLOB_TYPE_PREFIX = "~~local_forage_type~";
        var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
        var SERIALIZED_MARKER = "__lfsc__:";
        var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
        var TYPE_ARRAYBUFFER = "arbf";
        var TYPE_BLOB = "blob";
        var TYPE_INT8ARRAY = "si08";
        var TYPE_UINT8ARRAY = "ui08";
        var TYPE_UINT8CLAMPEDARRAY = "uic8";
        var TYPE_INT16ARRAY = "si16";
        var TYPE_INT32ARRAY = "si32";
        var TYPE_UINT16ARRAY = "ur16";
        var TYPE_UINT32ARRAY = "ui32";
        var TYPE_FLOAT32ARRAY = "fl32";
        var TYPE_FLOAT64ARRAY = "fl64";
        var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
        var toString$1 = Object.prototype.toString;
        function stringToBuffer(serializedString) {
          var bufferLength = serializedString.length * 0.75;
          var len = serializedString.length;
          var i;
          var p = 0;
          var encoded1, encoded2, encoded3, encoded4;
          if (serializedString[serializedString.length - 1] === "=") {
            bufferLength--;
            if (serializedString[serializedString.length - 2] === "=") {
              bufferLength--;
            }
          }
          var buffer = new ArrayBuffer(bufferLength);
          var bytes = new Uint8Array(buffer);
          for (i = 0; i < len; i += 4) {
            encoded1 = BASE_CHARS.indexOf(serializedString[i]);
            encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
            encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
            encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }
          return buffer;
        }
        function bufferToString(buffer) {
          var bytes = new Uint8Array(buffer);
          var base64String = "";
          var i;
          for (i = 0; i < bytes.length; i += 3) {
            base64String += BASE_CHARS[bytes[i] >> 2];
            base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
            base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
            base64String += BASE_CHARS[bytes[i + 2] & 63];
          }
          if (bytes.length % 3 === 2) {
            base64String = base64String.substring(0, base64String.length - 1) + "=";
          } else if (bytes.length % 3 === 1) {
            base64String = base64String.substring(0, base64String.length - 2) + "==";
          }
          return base64String;
        }
        function serialize(value, callback) {
          var valueType = "";
          if (value) {
            valueType = toString$1.call(value);
          }
          if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
            var buffer;
            var marker = SERIALIZED_MARKER;
            if (value instanceof ArrayBuffer) {
              buffer = value;
              marker += TYPE_ARRAYBUFFER;
            } else {
              buffer = value.buffer;
              if (valueType === "[object Int8Array]") {
                marker += TYPE_INT8ARRAY;
              } else if (valueType === "[object Uint8Array]") {
                marker += TYPE_UINT8ARRAY;
              } else if (valueType === "[object Uint8ClampedArray]") {
                marker += TYPE_UINT8CLAMPEDARRAY;
              } else if (valueType === "[object Int16Array]") {
                marker += TYPE_INT16ARRAY;
              } else if (valueType === "[object Uint16Array]") {
                marker += TYPE_UINT16ARRAY;
              } else if (valueType === "[object Int32Array]") {
                marker += TYPE_INT32ARRAY;
              } else if (valueType === "[object Uint32Array]") {
                marker += TYPE_UINT32ARRAY;
              } else if (valueType === "[object Float32Array]") {
                marker += TYPE_FLOAT32ARRAY;
              } else if (valueType === "[object Float64Array]") {
                marker += TYPE_FLOAT64ARRAY;
              } else {
                callback(new Error("Failed to get type for BinaryArray"));
              }
            }
            callback(marker + bufferToString(buffer));
          } else if (valueType === "[object Blob]") {
            var fileReader = new FileReader();
            fileReader.onload = function() {
              var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
              callback(SERIALIZED_MARKER + TYPE_BLOB + str);
            };
            fileReader.readAsArrayBuffer(value);
          } else {
            try {
              callback(JSON.stringify(value));
            } catch (e) {
              console.error("Couldn't convert value into a JSON string: ", value);
              callback(null, e);
            }
          }
        }
        function deserialize(value) {
          if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
            return JSON.parse(value);
          }
          var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
          var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
          var blobType;
          if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
            var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
            blobType = matcher[1];
            serializedString = serializedString.substring(matcher[0].length);
          }
          var buffer = stringToBuffer(serializedString);
          switch (type) {
            case TYPE_ARRAYBUFFER:
              return buffer;
            case TYPE_BLOB:
              return createBlob([buffer], { type: blobType });
            case TYPE_INT8ARRAY:
              return new Int8Array(buffer);
            case TYPE_UINT8ARRAY:
              return new Uint8Array(buffer);
            case TYPE_UINT8CLAMPEDARRAY:
              return new Uint8ClampedArray(buffer);
            case TYPE_INT16ARRAY:
              return new Int16Array(buffer);
            case TYPE_UINT16ARRAY:
              return new Uint16Array(buffer);
            case TYPE_INT32ARRAY:
              return new Int32Array(buffer);
            case TYPE_UINT32ARRAY:
              return new Uint32Array(buffer);
            case TYPE_FLOAT32ARRAY:
              return new Float32Array(buffer);
            case TYPE_FLOAT64ARRAY:
              return new Float64Array(buffer);
            default:
              throw new Error("Unkown type: " + type);
          }
        }
        var localforageSerializer = {
          serialize,
          deserialize,
          stringToBuffer,
          bufferToString
        };
        function createDbTable(t, dbInfo, callback, errorCallback) {
          t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
        }
        function _initStorage$1(options) {
          var self2 = this;
          var dbInfo = {
            db: null
          };
          if (options) {
            for (var i in options) {
              dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
            }
          }
          var dbInfoPromise = new Promise$1(function(resolve, reject) {
            try {
              dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
            } catch (e) {
              return reject(e);
            }
            dbInfo.db.transaction(function(t) {
              createDbTable(t, dbInfo, function() {
                self2._dbInfo = dbInfo;
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            }, reject);
          });
          dbInfo.serializer = localforageSerializer;
          return dbInfoPromise;
        }
        function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
          t.executeSql(sqlStatement, args, callback, function(t2, error) {
            if (error.code === error.SYNTAX_ERR) {
              t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
                if (!results.rows.length) {
                  createDbTable(t3, dbInfo, function() {
                    t3.executeSql(sqlStatement, args, callback, errorCallback);
                  }, errorCallback);
                } else {
                  errorCallback(t3, error);
                }
              }, errorCallback);
            } else {
              errorCallback(t2, error);
            }
          }, errorCallback);
        }
        function getItem$1(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                  var result = results.rows.length ? results.rows.item(0).value : null;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate$1(iterator, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                  var rows = results.rows;
                  var length2 = rows.length;
                  for (var i = 0; i < length2; i++) {
                    var item = rows.item(i);
                    var result = item.value;
                    if (result) {
                      result = dbInfo.serializer.deserialize(result);
                    }
                    result = iterator(result, item.key, i + 1);
                    if (result !== void 0) {
                      resolve(result);
                      return;
                    }
                  }
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function _setItem(key2, value, callback, retriesLeft) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              if (value === void 0) {
                value = null;
              }
              var originalValue = value;
              var dbInfo = self2._dbInfo;
              dbInfo.serializer.serialize(value, function(value2, error) {
                if (error) {
                  reject(error);
                } else {
                  dbInfo.db.transaction(function(t) {
                    tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                      resolve(originalValue);
                    }, function(t2, error2) {
                      reject(error2);
                    });
                  }, function(sqlError) {
                    if (sqlError.code === sqlError.QUOTA_ERR) {
                      if (retriesLeft > 0) {
                        resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                        return;
                      }
                      reject(sqlError);
                    }
                  });
                }
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem$1(key2, value, callback) {
          return _setItem.apply(this, [key2, value, callback, 1]);
        }
        function removeItem$1(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function clear$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                  var result = results.rows.item(0).c;
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key$1(n, callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                  var result = results.rows.length ? results.rows.item(0).key : null;
                  resolve(result);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys$1(callback) {
          var self2 = this;
          var promise = new Promise$1(function(resolve, reject) {
            self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              dbInfo.db.transaction(function(t) {
                tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                  var keys2 = [];
                  for (var i = 0; i < results.rows.length; i++) {
                    keys2.push(results.rows.item(i).key);
                  }
                  resolve(keys2);
                }, function(t2, error) {
                  reject(error);
                });
              });
            })["catch"](reject);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function getAllStoreNames(db) {
          return new Promise$1(function(resolve, reject) {
            db.transaction(function(t) {
              t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
                var storeNames = [];
                for (var i = 0; i < results.rows.length; i++) {
                  storeNames.push(results.rows.item(i).name);
                }
                resolve({
                  db,
                  storeNames
                });
              }, function(t2, error) {
                reject(error);
              });
            }, function(sqlError) {
              reject(sqlError);
            });
          });
        }
        function dropInstance$1(options, callback) {
          callback = getCallback.apply(this, arguments);
          var currentConfig = this.config();
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            promise = new Promise$1(function(resolve) {
              var db;
              if (options.name === currentConfig.name) {
                db = self2._dbInfo.db;
              } else {
                db = openDatabase(options.name, "", "", 0);
              }
              if (!options.storeName) {
                resolve(getAllStoreNames(db));
              } else {
                resolve({
                  db,
                  storeNames: [options.storeName]
                });
              }
            }).then(function(operationInfo) {
              return new Promise$1(function(resolve, reject) {
                operationInfo.db.transaction(function(t) {
                  function dropTable(storeName) {
                    return new Promise$1(function(resolve2, reject2) {
                      t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                        resolve2();
                      }, function(t2, error) {
                        reject2(error);
                      });
                    });
                  }
                  var operations = [];
                  for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                    operations.push(dropTable(operationInfo.storeNames[i]));
                  }
                  Promise$1.all(operations).then(function() {
                    resolve();
                  })["catch"](function(e) {
                    reject(e);
                  });
                }, function(sqlError) {
                  reject(sqlError);
                });
              });
            });
          }
          executeCallback(promise, callback);
          return promise;
        }
        var webSQLStorage = {
          _driver: "webSQLStorage",
          _initStorage: _initStorage$1,
          _support: isWebSQLValid(),
          iterate: iterate$1,
          getItem: getItem$1,
          setItem: setItem$1,
          removeItem: removeItem$1,
          clear: clear$1,
          length: length$1,
          key: key$1,
          keys: keys$1,
          dropInstance: dropInstance$1
        };
        function isLocalStorageValid() {
          try {
            return typeof localStorage !== "undefined" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
            !!localStorage.setItem;
          } catch (e) {
            return false;
          }
        }
        function _getKeyPrefix(options, defaultConfig) {
          var keyPrefix = options.name + "/";
          if (options.storeName !== defaultConfig.storeName) {
            keyPrefix += options.storeName + "/";
          }
          return keyPrefix;
        }
        function checkIfLocalStorageThrows() {
          var localStorageTestKey = "_localforage_support_test";
          try {
            localStorage.setItem(localStorageTestKey, true);
            localStorage.removeItem(localStorageTestKey);
            return false;
          } catch (e) {
            return true;
          }
        }
        function _isLocalStorageUsable() {
          return !checkIfLocalStorageThrows() || localStorage.length > 0;
        }
        function _initStorage$2(options) {
          var self2 = this;
          var dbInfo = {};
          if (options) {
            for (var i in options) {
              dbInfo[i] = options[i];
            }
          }
          dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
          if (!_isLocalStorageUsable()) {
            return Promise$1.reject();
          }
          self2._dbInfo = dbInfo;
          dbInfo.serializer = localforageSerializer;
          return Promise$1.resolve();
        }
        function clear$2(callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var keyPrefix = self2._dbInfo.keyPrefix;
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
          executeCallback(promise, callback);
          return promise;
        }
        function getItem$2(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var result = localStorage.getItem(dbInfo.keyPrefix + key2);
            if (result) {
              result = dbInfo.serializer.deserialize(result);
            }
            return result;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function iterate$2(iterator, callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var keyPrefix = dbInfo.keyPrefix;
            var keyPrefixLength = keyPrefix.length;
            var length2 = localStorage.length;
            var iterationNumber = 1;
            for (var i = 0; i < length2; i++) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) !== 0) {
                continue;
              }
              var value = localStorage.getItem(key2);
              if (value) {
                value = dbInfo.serializer.deserialize(value);
              }
              value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
              if (value !== void 0) {
                return value;
              }
            }
          });
          executeCallback(promise, callback);
          return promise;
        }
        function key$2(n, callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var result;
            try {
              result = localStorage.key(n);
            } catch (error) {
              result = null;
            }
            if (result) {
              result = result.substring(dbInfo.keyPrefix.length);
            }
            return result;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function keys$2(callback) {
          var self2 = this;
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            var length2 = localStorage.length;
            var keys2 = [];
            for (var i = 0; i < length2; i++) {
              var itemKey = localStorage.key(i);
              if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
              }
            }
            return keys2;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function length$2(callback) {
          var self2 = this;
          var promise = self2.keys().then(function(keys2) {
            return keys2.length;
          });
          executeCallback(promise, callback);
          return promise;
        }
        function removeItem$2(key2, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            localStorage.removeItem(dbInfo.keyPrefix + key2);
          });
          executeCallback(promise, callback);
          return promise;
        }
        function setItem$2(key2, value, callback) {
          var self2 = this;
          key2 = normalizeKey(key2);
          var promise = self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            return new Promise$1(function(resolve, reject) {
              var dbInfo = self2._dbInfo;
              dbInfo.serializer.serialize(value, function(value2, error) {
                if (error) {
                  reject(error);
                } else {
                  try {
                    localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                    resolve(originalValue);
                  } catch (e) {
                    if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                      reject(e);
                    }
                    reject(e);
                  }
                }
              });
            });
          });
          executeCallback(promise, callback);
          return promise;
        }
        function dropInstance$2(options, callback) {
          callback = getCallback.apply(this, arguments);
          options = typeof options !== "function" && options || {};
          if (!options.name) {
            var currentConfig = this.config();
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
          }
          var self2 = this;
          var promise;
          if (!options.name) {
            promise = Promise$1.reject("Invalid arguments");
          } else {
            promise = new Promise$1(function(resolve) {
              if (!options.storeName) {
                resolve(options.name + "/");
              } else {
                resolve(_getKeyPrefix(options, self2._defaultConfig));
              }
            }).then(function(keyPrefix) {
              for (var i = localStorage.length - 1; i >= 0; i--) {
                var key2 = localStorage.key(i);
                if (key2.indexOf(keyPrefix) === 0) {
                  localStorage.removeItem(key2);
                }
              }
            });
          }
          executeCallback(promise, callback);
          return promise;
        }
        var localStorageWrapper = {
          _driver: "localStorageWrapper",
          _initStorage: _initStorage$2,
          _support: isLocalStorageValid(),
          iterate: iterate$2,
          getItem: getItem$2,
          setItem: setItem$2,
          removeItem: removeItem$2,
          clear: clear$2,
          length: length$2,
          key: key$2,
          keys: keys$2,
          dropInstance: dropInstance$2
        };
        var sameValue = function sameValue2(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        };
        var includes = function includes2(array, searchElement) {
          var len = array.length;
          var i = 0;
          while (i < len) {
            if (sameValue(array[i], searchElement)) {
              return true;
            }
            i++;
          }
          return false;
        };
        var isArray = Array.isArray || function(arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
        var DefinedDrivers = {};
        var DriverSupport = {};
        var DefaultDrivers = {
          INDEXEDDB: asyncStorage,
          WEBSQL: webSQLStorage,
          LOCALSTORAGE: localStorageWrapper
        };
        var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
        var OptionalDriverMethods = ["dropInstance"];
        var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
        var DefaultConfig = {
          description: "",
          driver: DefaultDriverOrder.slice(),
          name: "localforage",
          // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
          // we can use without a prompt.
          size: 4980736,
          storeName: "keyvaluepairs",
          version: 1
        };
        function callWhenReady(localForageInstance, libraryMethod) {
          localForageInstance[libraryMethod] = function() {
            var _args = arguments;
            return localForageInstance.ready().then(function() {
              return localForageInstance[libraryMethod].apply(localForageInstance, _args);
            });
          };
        }
        function extend() {
          for (var i = 1; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                  if (isArray(arg[_key])) {
                    arguments[0][_key] = arg[_key].slice();
                  } else {
                    arguments[0][_key] = arg[_key];
                  }
                }
              }
            }
          }
          return arguments[0];
        }
        var LocalForage = (function() {
          function LocalForage2(options) {
            _classCallCheck(this, LocalForage2);
            for (var driverTypeKey in DefaultDrivers) {
              if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;
                if (!DefinedDrivers[driverName]) {
                  this.defineDriver(driver);
                }
              }
            }
            this._defaultConfig = extend({}, DefaultConfig);
            this._config = extend({}, this._defaultConfig, options);
            this._driverSet = null;
            this._initDriver = null;
            this._ready = false;
            this._dbInfo = null;
            this._wrapLibraryMethodsWithReady();
            this.setDriver(this._config.driver)["catch"](function() {
            });
          }
          LocalForage2.prototype.config = function config(options) {
            if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
              if (this._ready) {
                return new Error("Can't call config() after localforage has been used.");
              }
              for (var i in options) {
                if (i === "storeName") {
                  options[i] = options[i].replace(/\W/g, "_");
                }
                if (i === "version" && typeof options[i] !== "number") {
                  return new Error("Database version must be a number.");
                }
                this._config[i] = options[i];
              }
              if ("driver" in options && options.driver) {
                return this.setDriver(this._config.driver);
              }
              return true;
            } else if (typeof options === "string") {
              return this._config[options];
            } else {
              return this._config;
            }
          };
          LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
            var promise = new Promise$1(function(resolve, reject) {
              try {
                var driverName = driverObject._driver;
                var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!driverObject._driver) {
                  reject(complianceError);
                  return;
                }
                var driverMethods = LibraryMethods.concat("_initStorage");
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                  var driverMethodName = driverMethods[i];
                  var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                  if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                    reject(complianceError);
                    return;
                  }
                }
                var configureMissingMethods = function configureMissingMethods2() {
                  var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                    return function() {
                      var error = new Error("Method " + methodName + " is not implemented by the current driver");
                      var promise2 = Promise$1.reject(error);
                      executeCallback(promise2, arguments[arguments.length - 1]);
                      return promise2;
                    };
                  };
                  for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                    var optionalDriverMethod = OptionalDriverMethods[_i];
                    if (!driverObject[optionalDriverMethod]) {
                      driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                    }
                  }
                };
                configureMissingMethods();
                var setDriverSupport = function setDriverSupport2(support) {
                  if (DefinedDrivers[driverName]) {
                    console.info("Redefining LocalForage driver: " + driverName);
                  }
                  DefinedDrivers[driverName] = driverObject;
                  DriverSupport[driverName] = support;
                  resolve();
                };
                if ("_support" in driverObject) {
                  if (driverObject._support && typeof driverObject._support === "function") {
                    driverObject._support().then(setDriverSupport, reject);
                  } else {
                    setDriverSupport(!!driverObject._support);
                  }
                } else {
                  setDriverSupport(true);
                }
              } catch (e) {
                reject(e);
              }
            });
            executeTwoCallbacks(promise, callback, errorCallback);
            return promise;
          };
          LocalForage2.prototype.driver = function driver() {
            return this._driver || null;
          };
          LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
            var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
            executeTwoCallbacks(getDriverPromise, callback, errorCallback);
            return getDriverPromise;
          };
          LocalForage2.prototype.getSerializer = function getSerializer(callback) {
            var serializerPromise = Promise$1.resolve(localforageSerializer);
            executeTwoCallbacks(serializerPromise, callback);
            return serializerPromise;
          };
          LocalForage2.prototype.ready = function ready(callback) {
            var self2 = this;
            var promise = self2._driverSet.then(function() {
              if (self2._ready === null) {
                self2._ready = self2._initDriver();
              }
              return self2._ready;
            });
            executeTwoCallbacks(promise, callback, callback);
            return promise;
          };
          LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
            var self2 = this;
            if (!isArray(drivers)) {
              drivers = [drivers];
            }
            var supportedDrivers = this._getSupportedDrivers(drivers);
            function setDriverToConfig() {
              self2._config.driver = self2.driver();
            }
            function extendSelfWithDriver(driver) {
              self2._extend(driver);
              setDriverToConfig();
              self2._ready = self2._initStorage(self2._config);
              return self2._ready;
            }
            function initDriver(supportedDrivers2) {
              return function() {
                var currentDriverIndex = 0;
                function driverPromiseLoop() {
                  while (currentDriverIndex < supportedDrivers2.length) {
                    var driverName = supportedDrivers2[currentDriverIndex];
                    currentDriverIndex++;
                    self2._dbInfo = null;
                    self2._ready = null;
                    return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                  }
                  setDriverToConfig();
                  var error = new Error("No available storage method found.");
                  self2._driverSet = Promise$1.reject(error);
                  return self2._driverSet;
                }
                return driverPromiseLoop();
              };
            }
            var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
              return Promise$1.resolve();
            }) : Promise$1.resolve();
            this._driverSet = oldDriverSetDone.then(function() {
              var driverName = supportedDrivers[0];
              self2._dbInfo = null;
              self2._ready = null;
              return self2.getDriver(driverName).then(function(driver) {
                self2._driver = driver._driver;
                setDriverToConfig();
                self2._wrapLibraryMethodsWithReady();
                self2._initDriver = initDriver(supportedDrivers);
              });
            })["catch"](function() {
              setDriverToConfig();
              var error = new Error("No available storage method found.");
              self2._driverSet = Promise$1.reject(error);
              return self2._driverSet;
            });
            executeTwoCallbacks(this._driverSet, callback, errorCallback);
            return this._driverSet;
          };
          LocalForage2.prototype.supports = function supports(driverName) {
            return !!DriverSupport[driverName];
          };
          LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
            extend(this, libraryMethodsAndProperties);
          };
          LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
            var supportedDrivers = [];
            for (var i = 0, len = drivers.length; i < len; i++) {
              var driverName = drivers[i];
              if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
              }
            }
            return supportedDrivers;
          };
          LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
            for (var i = 0, len = LibraryMethods.length; i < len; i++) {
              callWhenReady(this, LibraryMethods[i]);
            }
          };
          LocalForage2.prototype.createInstance = function createInstance(options) {
            return new LocalForage2(options);
          };
          return LocalForage2;
        })();
        var localforage_js = new LocalForage();
        module3.exports = localforage_js;
      }, { "3": 3 }] }, {}, [4])(4);
    });
  }
});

// ../../node_modules/data-transport/dist/index.cjs.production.min.js
var require_index_cjs_production_min = __commonJS({
  "../../node_modules/data-transport/dist/index.cjs.production.min.js"(exports) {
    "use strict";
    var e = /* @__PURE__ */ Symbol("listener");
    var n = /* @__PURE__ */ Symbol("listen");
    var t = /* @__PURE__ */ Symbol("sender");
    var r = /* @__PURE__ */ Symbol("requestsMap");
    var o = /* @__PURE__ */ Symbol("listensMap");
    var i = /* @__PURE__ */ Symbol("serializer");
    var s = /* @__PURE__ */ Symbol("log");
    var a = /* @__PURE__ */ Symbol("verbose");
    var c = /* @__PURE__ */ Symbol("originalListensMap");
    var l = /* @__PURE__ */ Symbol("callback");
    var u = /* @__PURE__ */ Symbol("timeout");
    var d = /* @__PURE__ */ Symbol("prefix");
    var f = /* @__PURE__ */ Symbol("produce");
    var h = /* @__PURE__ */ Symbol("beforeEmit");
    var p = /* @__PURE__ */ Symbol("beforeEmitResolve");
    var v = "__DATA_TRANSPORT_UUID__";
    var m = "request";
    var y = "response";
    var b = function(e2, n2) {
      return b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, n3) {
        e3.__proto__ = n3;
      } || function(e3, n3) {
        for (var t2 in n3) Object.prototype.hasOwnProperty.call(n3, t2) && (e3[t2] = n3[t2]);
      }, b(e2, n2);
    };
    function _(e2, n2) {
      if ("function" != typeof n2 && null !== n2) throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
      function t2() {
        this.constructor = e2;
      }
      b(e2, n2), e2.prototype = null === n2 ? Object.create(n2) : (t2.prototype = n2.prototype, new t2());
    }
    var w = function() {
      return w = Object.assign || function(e2) {
        for (var n2, t2 = 1, r2 = arguments.length; t2 < r2; t2++) for (var o2 in n2 = arguments[t2]) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
        return e2;
      }, w.apply(this, arguments);
    };
    function g(e2, n2) {
      var t2 = {};
      for (var r2 in e2) Object.prototype.hasOwnProperty.call(e2, r2) && n2.indexOf(r2) < 0 && (t2[r2] = e2[r2]);
      if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
        var o2 = 0;
        for (r2 = Object.getOwnPropertySymbols(e2); o2 < r2.length; o2++) n2.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[o2]) && (t2[r2[o2]] = e2[r2[o2]]);
      }
      return t2;
    }
    function C(e2, n2, t2, r2) {
      return new (t2 || (t2 = Promise))((function(o2, i2) {
        function s2(e3) {
          try {
            c2(r2.next(e3));
          } catch (e4) {
            i2(e4);
          }
        }
        function a2(e3) {
          try {
            c2(r2.throw(e3));
          } catch (e4) {
            i2(e4);
          }
        }
        function c2(e3) {
          var n3;
          e3.done ? o2(e3.value) : (n3 = e3.value, n3 instanceof t2 ? n3 : new t2((function(e4) {
            e4(n3);
          }))).then(s2, a2);
        }
        c2((r2 = r2.apply(e2, n2 || [])).next());
      }));
    }
    function k(e2, n2) {
      var t2, r2, o2, i2 = { label: 0, sent: function() {
        if (1 & o2[0]) throw o2[1];
        return o2[1];
      }, trys: [], ops: [] }, s2 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
      return s2.next = a2(0), s2.throw = a2(1), s2.return = a2(2), "function" == typeof Symbol && (s2[Symbol.iterator] = function() {
        return this;
      }), s2;
      function a2(a3) {
        return function(c2) {
          return (function(a4) {
            if (t2) throw new TypeError("Generator is already executing.");
            for (; s2 && (s2 = 0, a4[0] && (i2 = 0)), i2; ) try {
              if (t2 = 1, r2 && (o2 = 2 & a4[0] ? r2.return : a4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, a4[1])).done) return o2;
              switch (r2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                case 0:
                case 1:
                  o2 = a4;
                  break;
                case 4:
                  return i2.label++, { value: a4[1], done: false };
                case 5:
                  i2.label++, r2 = a4[1], a4 = [0];
                  continue;
                case 7:
                  a4 = i2.ops.pop(), i2.trys.pop();
                  continue;
                default:
                  if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                    i2 = 0;
                    continue;
                  }
                  if (3 === a4[0] && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                    i2.label = a4[1];
                    break;
                  }
                  if (6 === a4[0] && i2.label < o2[1]) {
                    i2.label = o2[1], o2 = a4;
                    break;
                  }
                  if (o2 && i2.label < o2[2]) {
                    i2.label = o2[2], i2.ops.push(a4);
                    break;
                  }
                  o2[2] && i2.ops.pop(), i2.trys.pop();
                  continue;
              }
              a4 = n2.call(e2, i2);
            } catch (e3) {
              a4 = [6, e3], r2 = 0;
            } finally {
              t2 = o2 = 0;
            }
            if (5 & a4[0]) throw a4[1];
            return { value: a4[0] ? a4[1] : void 0, done: true };
          })([a3, c2]);
        };
      }
    }
    function E(e2) {
      var n2 = "function" == typeof Symbol && Symbol.iterator, t2 = n2 && e2[n2], r2 = 0;
      if (t2) return t2.call(e2);
      if (e2 && "number" == typeof e2.length) return { next: function() {
        return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
      } };
      throw new TypeError(n2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function S(e2, n2) {
      var t2 = "function" == typeof Symbol && e2[Symbol.iterator];
      if (!t2) return e2;
      var r2, o2, i2 = t2.call(e2), s2 = [];
      try {
        for (; (void 0 === n2 || n2-- > 0) && !(r2 = i2.next()).done; ) s2.push(r2.value);
      } catch (e3) {
        o2 = { error: e3 };
      } finally {
        try {
          r2 && !r2.done && (t2 = i2.return) && t2.call(i2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      return s2;
    }
    var x;
    var T = new Uint8Array(16);
    function M() {
      if (!x && (x = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !x)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return x(T);
    }
    var O = [];
    for (let e2 = 0; e2 < 256; ++e2) O.push((e2 + 256).toString(16).slice(1));
    var I = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
    function L(e2, n2, t2) {
      if (I.randomUUID && !e2) return I.randomUUID();
      const r2 = (e2 = e2 || {}).random || (e2.rng || M)();
      return r2[6] = 15 & r2[6] | 64, r2[8] = 63 & r2[8] | 128, (function(e3, n3 = 0) {
        return (O[e3[n3 + 0]] + O[e3[n3 + 1]] + O[e3[n3 + 2]] + O[e3[n3 + 3]] + "-" + O[e3[n3 + 4]] + O[e3[n3 + 5]] + "-" + O[e3[n3 + 6]] + O[e3[n3 + 7]] + "-" + O[e3[n3 + 8]] + O[e3[n3 + 9]] + "-" + O[e3[n3 + 10]] + O[e3[n3 + 11]] + O[e3[n3 + 12]] + O[e3[n3 + 13]] + O[e3[n3 + 14]] + O[e3[n3 + 15]]).toLowerCase();
      })(r2);
    }
    var R;
    var P = function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    };
    var D = function() {
      return L({ rng: function() {
        for (var e2, n2 = new Array(16), t2 = 0; t2 < 16; t2++) 3 & t2 || (e2 = 4294967296 * Math.random()), n2[t2] = e2 >>> ((3 & t2) << 3) & 255;
        return n2;
      } });
    };
    var W = function(e2, n2) {
      return "".concat(e2, "-").concat(n2.toString());
    };
    var A = (function() {
      function l2(l3) {
        var h2 = l3.listener, p2 = l3.sender, b2 = l3.timeout, _2 = void 0 === b2 ? 6e4 : b2, g2 = l3.verbose, C2 = void 0 !== g2 && g2, k2 = l3.prefix, E2 = void 0 === k2 ? "DataTransport" : k2, S2 = l3.listenKeys, x2 = void 0 === S2 ? [] : S2;
        l3.checkListen;
        var T2, M2, O2 = l3.serializer, I2 = l3.logger, L2 = this;
        this[R] = /* @__PURE__ */ new Map(), this.id = D(), this[o] = null !== (T2 = this[o]) && void 0 !== T2 ? T2 : /* @__PURE__ */ new Map(), this[c] = null !== (M2 = this[c]) && void 0 !== M2 ? M2 : /* @__PURE__ */ new Map(), this[e] = h2.bind(this), this[t] = p2.bind(this), this[u] = _2, this[d] = E2, this[i] = O2, this[a] = C2, this[s] = I2, new Set(x2).forEach((function(e2) {
          var n2, t2 = L2[e2];
          L2[c].set(e2, t2), Object.assign(L2, ((n2 = {})[e2] = function() {
          }, n2));
        })), this[c].forEach((function(e2, n2) {
          L2[f](n2, e2);
        })), this[n] = function(e2) {
          var n2, t2;
          if (L2[a] && ("function" == typeof L2[s] && e2 ? L2[s](e2) : console.info("DataTransport Receive: ", e2)), null == e2 ? void 0 : e2[v]) {
            var c2 = (function(e3, n3) {
              return n3.replace(new RegExp("^".concat(e3, "-")), "");
            })(L2[d], e2.action);
            if (L2[c2], e2.type === y) {
              var l4 = L2[r].get(e2[v]);
              if (l4) {
                var u2 = e2.response;
                l4("string" == typeof u2 && (null === (n2 = L2[i]) || void 0 === n2 ? void 0 : n2.parse) ? L2[i].parse(u2) : u2);
              }
            } else if (e2.type === m) {
              var f2 = L2[o].get(e2.action);
              if ("function" == typeof f2) {
                var h3 = e2.request;
                f2("string" == typeof h3 && (null === (t2 = L2[i]) || void 0 === t2 ? void 0 : t2.parse) ? L2[i].parse(h3) : h3, w(w({}, e2), { transportId: e2[v], hasRespond: e2.hasRespond }));
              }
            }
          }
        };
        var P2 = this[e](this[n]);
        this.dispose = function() {
          if ("function" == typeof P2) return L2[r].clear(), L2[o].clear(), L2[c].clear(), P2();
        };
      }
      return l2.prototype[R = r, f] = function(e2, n2) {
        var r2 = this, s2 = W(this[d], e2);
        this[o].set(s2, (function(o2, a2) {
          return C(r2, void 0, void 0, (function() {
            var r3, c2, l3, u2, d2 = a2.hasRespond, f2 = a2.transportId;
            a2.request;
            var h2 = g(a2, ["hasRespond", "transportId", "request"]);
            return k(this, (function(a3) {
              switch (a3.label) {
                case 0:
                  return "function" != typeof n2 ? [3, 2] : [4, n2.apply(this, o2)];
                case 1:
                  return r3 = a3.sent(), d2 ? (c2 = w(w({}, h2), ((l3 = { action: s2, response: void 0 !== r3 && (null === (u2 = this[i]) || void 0 === u2 ? void 0 : u2.stringify) ? this[i].stringify(r3) : r3, hasRespond: d2 })[v] = f2, l3.type = y, l3.responseId = this.id, l3)), this[t](c2), [3, 3]) : [2];
                case 2:
                  throw new Error("The listener for event ".concat(e2, " should be a function."));
                case 3:
                  return [2];
              }
            }));
          }));
        }));
      }, l2.prototype.listen = function(e2, n2) {
        var t2 = this;
        if ("string" != typeof e2) throw new Error('The event name "'.concat(e2.toString(), '" is not a string, it should be a string.'));
        if (this[c].get(e2)) throw new Error('Failed to listen to the event "'.concat(e2, '", the event "').concat(e2, '" is already listened to.'));
        if ("function" != typeof n2) throw new Error("The listener for event ".concat(e2, " should be a function."));
        return this[c].set(e2, n2), this[f](e2, n2), function() {
          t2[c].delete(e2);
          var n3 = W(t2[d], e2);
          t2[o].delete(n3);
        };
      }, l2.prototype.emit = function(e2) {
        for (var n2 = [], o2 = 1; o2 < arguments.length; o2++) n2[o2 - 1] = arguments[o2];
        return C(this, void 0, void 0, (function() {
          var o3, c2, l3, f2, p2, y2, b2, _2, g2, E2, S2, x2, T2, M2, O2, I2, L2 = this;
          return k(this, (function(R2) {
            switch (R2.label) {
              case 0:
                return c2 = null === (x2 = (o3 = "object" == typeof e2 ? e2 : {}).respond) || void 0 === x2 || x2, l3 = null !== (T2 = o3.silent) && void 0 !== T2 && T2, f2 = null !== (M2 = o3.timeout) && void 0 !== M2 ? M2 : this[u], p2 = null !== (O2 = o3.name) && void 0 !== O2 ? O2 : e2, y2 = D(), b2 = W(this[d], p2), _2 = w(w({}, o3._extra ? { _extra: o3._extra } : {}), ((S2 = { type: m, action: b2, request: void 0 !== n2 && (null === (I2 = this[i]) || void 0 === I2 ? void 0 : I2.stringify) ? this[i].stringify(n2) : n2, hasRespond: c2 })[v] = y2, S2.requestId = this.id, S2)), this[a] && ("function" == typeof this[s] ? this[s](_2) : console.info("DataTransport Send: ", _2)), c2 ? [3, 3] : !this[h] || o3.skipBeforeEmit ? [3, 2] : [4, this[h]];
              case 1:
                R2.sent(), R2.label = 2;
              case 2:
                return this[t](_2), [2, Promise.resolve(void 0)];
              case 3:
                return E2 = Promise.race([new Promise((function(e3) {
                  return C(L2, void 0, void 0, (function() {
                    return k(this, (function(n3) {
                      switch (n3.label) {
                        case 0:
                          return !this[h] || o3.skipBeforeEmit ? [3, 2] : [4, this[h]];
                        case 1:
                          n3.sent(), n3.label = 2;
                        case 2:
                          return this[r].set(y2, e3), this[t](_2), [2];
                      }
                    }));
                  }));
                })), new Promise((function(e3, n3) {
                  g2 = setTimeout((function() {
                    n3();
                  }), f2);
                }))]), [2, E2.then((function(e3) {
                  return clearTimeout(g2), L2[r].delete(y2), e3;
                })).catch((function(e3) {
                  if (clearTimeout(g2), L2[r].delete(y2), void 0 === e3) {
                    if (l3) return;
                    console.warn("The event '".concat(b2, "' timed out for ").concat(f2, " seconds..."), _2);
                  }
                }))];
            }
          }));
        }));
      }, l2;
    })();
    var q = "iframe-connect";
    var B = (function(e2) {
      function n2(n3) {
        var t2 = this, r2 = n3.iframe, o2 = void 0 === r2 ? document.querySelector("iframe") : r2, i2 = n3.targetOrigin, s2 = void 0 === i2 ? "*" : i2, a2 = n3.listener, c2 = void 0 === a2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data, r3 = n5.source, i3 = o2.contentWindow;
            if (i3 && i3 === r3) return e3(t3);
          };
          return window.addEventListener("message", n4), function() {
            window.removeEventListener("message", n4);
          };
        } : a2, l2 = n3.sender, u2 = void 0 === l2 ? function(e3) {
          o2 ? o2.contentWindow.postMessage(e3, s2) : window.frames[0] ? window.frames[0].postMessage(e3, s2) : console.error("The current page does not have any iframe elements");
        } : l2, d2 = n3.skipConnectionCheck, f2 = g(n3, ["iframe", "targetOrigin", "listener", "sender", "skipConnectionCheck"]);
        if (t2 = e2.call(this, w(w({}, f2), { listener: c2, sender: u2 })) || this, !d2) {
          var v2 = function() {
            t2.emit({ name: q, silent: true, skipBeforeEmit: true }).then((function(e3) {
              e3 && t2[p]();
            }));
          };
          v2(), t2[h] = new Promise((function(e3) {
            t2[p] = e3;
          })), t2.listen(q, (function() {
            return C(t2, void 0, void 0, (function() {
              return k(this, (function(e3) {
                return this[p](), [2, true];
              }));
            }));
          })), null == o2 || o2.addEventListener("load", (function() {
            t2[h] = new Promise((function(e3) {
              t2[p] = e3;
            })), v2();
          }));
        }
        return t2;
      }
      return _(n2, e2), n2;
    })(A);
    var U = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = this, r2 = n3.targetOrigin, o2 = void 0 === r2 ? "*" : r2, i2 = n3.listener, s2 = void 0 === i2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            return e3(t3);
          };
          return window.addEventListener("message", n4), function() {
            window.removeEventListener("message", n4);
          };
        } : i2, a2 = n3.sender, c2 = void 0 === a2 ? function(e3) {
          return window.parent.postMessage(e3, o2);
        } : a2, l2 = n3.skipConnectionCheck, u2 = g(n3, ["targetOrigin", "listener", "sender", "skipConnectionCheck"]);
        return t2 = e2.call(this, w(w({}, u2), { listener: s2, sender: c2 })) || this, l2 || (t2.emit({ name: q, silent: true }).then((function(e3) {
          e3 && t2[p]();
        })), t2[h] = new Promise((function(e3) {
          t2[p] = e3;
        })), t2.listen(q, (function() {
          return C(t2, void 0, void 0, (function() {
            return k(this, (function(e3) {
              return this[p](), [2, true];
            }));
          }));
        }))), t2;
      }
      return _(n2, e2), n2;
    })(A);
    var j = { Main: B, IFrame: U };
    var N = "worker-connect";
    var F = (function(e2) {
      function n2(n3) {
        var t2 = this, r2 = n3.worker, o2 = n3.listener, i2 = void 0 === o2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            e3(t3);
          };
          return r2.addEventListener("message", n4), function() {
            r2.removeEventListener("message", n4);
          };
        } : o2, s2 = n3.sender, a2 = void 0 === s2 ? function(e3) {
          var n4, t3 = null !== (n4 = e3.transfer) && void 0 !== n4 ? n4 : [];
          delete e3.transfer, r2.postMessage(e3, t3);
        } : s2, c2 = g(n3, ["worker", "listener", "sender"]);
        return (t2 = e2.call(this, w(w({}, c2), { listener: i2, sender: a2 })) || this)._connected = false, t2._handleConnectCallbacks = function() {
          return C(t2, void 0, void 0, (function() {
            return k(this, (function(e3) {
              return this._connected || (this._connected = true, this._onConnectCallback.forEach((function(e4) {
                e4();
              })), this._onConnectCallback.clear()), [2];
            }));
          }));
        }, t2._onConnectCallback = /* @__PURE__ */ new Set(), t2.emit({ name: N, respond: true, silent: true }).then(t2._handleConnectCallbacks), t2.listen(N, t2._handleConnectCallbacks), t2;
      }
      return _(n2, e2), n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._connected ? e3() : (this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        });
      }, n2;
    })(A);
    var J = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = this, r2 = n3.listener, o2 = void 0 === r2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            e3(t3);
          };
          return self.addEventListener("message", n4), function() {
            self.removeEventListener("message", n4);
          };
        } : r2, i2 = n3.sender, s2 = void 0 === i2 ? function(e3) {
          var n4, t3 = null !== (n4 = e3.transfer) && void 0 !== n4 ? n4 : [];
          delete e3.transfer, postMessage(e3, t3);
        } : i2, a2 = g(n3, ["listener", "sender"]);
        return (t2 = e2.call(this, w(w({}, a2), { listener: o2, sender: s2 })) || this)._handleConnectCallbacks = function() {
          return C(t2, void 0, void 0, (function() {
            return k(this, (function(e3) {
              return this._connected || (this._connected = true, this._onConnectCallback.forEach((function(e4) {
                e4();
              })), this._onConnectCallback.clear()), [2];
            }));
          }));
        }, t2._connected = false, t2._onConnectCallback = /* @__PURE__ */ new Set(), t2.emit({ name: N, respond: true, silent: true }).then(t2._handleConnectCallbacks), t2.listen(N, t2._handleConnectCallbacks), t2;
      }
      return _(n2, e2), n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._connected ? e3() : (this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        });
      }, n2;
    })(A);
    var $ = { Main: F, Worker: J };
    var K = "sharedworker-connect";
    var V = "sharedworker-disconnect";
    var z = (function(e2) {
      function n2(n3) {
        var t2 = this, r2 = n3.worker, o2 = n3.listener, i2 = void 0 === o2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            e3(t3);
          };
          return r2.port.addEventListener("message", n4), r2.port.start(), function() {
            r2.port.removeEventListener("message", n4);
          };
        } : o2, s2 = n3.sender, a2 = void 0 === s2 ? function(e3) {
          var n4, t3 = null !== (n4 = e3.transfer) && void 0 !== n4 ? n4 : [];
          delete e3.transfer, r2.port.postMessage(e3, t3);
        } : s2, c2 = g(n3, ["worker", "listener", "sender"]);
        return (t2 = e2.call(this, w(w({}, c2), { listener: i2, sender: a2 })) || this)._connected = false, t2._onConnectCallback = /* @__PURE__ */ new Set(), window.addEventListener("pagehide", (function() {
          t2.emit({ name: V, respond: false }, t2.id);
        })), t2.listen(K, (function() {
          return C(t2, void 0, void 0, (function() {
            var e3 = this;
            return k(this, (function(n4) {
              return Promise.resolve().then((function() {
                e3._handleConnect();
              })), [2, this.id];
            }));
          }));
        })), t2.emit({ name: K, respond: false, silent: true }), t2;
      }
      return _(n2, e2), n2.prototype._handleConnect = function() {
        this._connected || (this._connected = true, this._onConnectCallback.forEach((function(e3) {
          e3();
        })));
      }, n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        };
      }, n2;
    })(A);
    var G = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = this, r2 = n3.listener, o2 = void 0 === r2 ? function(e3) {
          var n4 = this;
          return this[l] = e3, function() {
            n4.ports.forEach((function(e4) {
              e4._handler && e4.removeEventListener("message", e4._handler), delete e4._handler;
            })), self.close();
          };
        } : r2, i2 = n3.sender, s2 = void 0 === i2 ? function(e3) {
          var n4, r3, o3 = null !== (n4 = e3.transfer) && void 0 !== n4 ? n4 : [];
          delete e3.transfer;
          var i3 = null === (r3 = e3._extra) || void 0 === r3 ? void 0 : r3._port;
          if (i3) delete e3._extra._port, i3.postMessage(e3, o3);
          else if ("response" === e3.type && t2.ports.has(e3.requestId)) {
            t2.ports.get(e3.requestId).postMessage(e3, o3);
          } else t2.ports.forEach((function(n5) {
            try {
              n5.postMessage(e3, o3);
            } catch (e4) {
              console.error(e4);
            }
          })), t2.tempPorts.forEach((function(n5) {
            try {
              n5.postMessage(e3, o3);
            } catch (e4) {
              console.error(e4);
            }
          }));
        } : i2, a2 = g(n3, ["listener", "sender"]);
        (t2 = e2.call(this, w(w({}, a2), { listener: o2, sender: s2 })) || this).ports = /* @__PURE__ */ new Map(), t2.tempPorts = /* @__PURE__ */ new Set(), t2._onConnectCallback = /* @__PURE__ */ new Set(), t2._onDisconnectCallback = /* @__PURE__ */ new Set();
        var c2 = W(t2[d], V), u2 = W(t2[d], K);
        return self.addEventListener("connect", (function(e3) {
          return C(t2, void 0, void 0, (function() {
            var n4, t3, r3, o3 = this;
            return k(this, (function(i3) {
              switch (i3.label) {
                case 0:
                  (n4 = e3.ports[0])._handler = function(e4) {
                    var t4, r4 = e4.data;
                    r4.hasRespond && (r4._extra = null !== (t4 = r4._extra) && void 0 !== t4 ? t4 : {}, r4._extra._port = n4), r4.action === c2 && o3.ports.has(r4.requestId) && (o3.ports.delete(r4.requestId), o3._onDisconnectCallback.forEach((function(e5) {
                      e5(r4.requestId);
                    }))), "request" === r4.type && r4.action === u2 && (o3.emit({ name: K, _extra: { _port: n4 }, silent: true, respond: false }), o3._handleConnect(r4.requestId, n4)), o3[l](r4);
                  }, n4.addEventListener("message", n4._handler), n4.start(), this.tempPorts.add(n4), i3.label = 1;
                case 1:
                  return i3.trys.push([1, 3, , 4]), [4, this.emit({ name: K, _extra: { _port: n4 }, silent: true })];
                case 2:
                  return t3 = i3.sent(), this._handleConnect(t3, n4), [3, 4];
                case 3:
                  return r3 = i3.sent(), this.tempPorts.delete(n4), console.error(r3), [3, 4];
                case 4:
                  return [2];
              }
            }));
          }));
        })), t2;
      }
      return _(n2, e2), n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        };
      }, n2.prototype._handleConnect = function(e3, n3) {
        e3 && !this.ports.has(e3) && (this.ports.set(e3, n3), this.tempPorts.delete(n3), this._onConnectCallback.forEach((function(n4) {
          n4(e3);
        })));
      }, n2.prototype.onDisconnect = function(e3) {
        var n3 = this;
        return this._onDisconnectCallback.add(e3), function() {
          n3._onDisconnectCallback.delete(e3);
        };
      }, n2;
    })(A);
    var X = { Client: z, Worker: G };
    var H = true;
    var Q = (function(e2) {
      function n2(n3) {
        var t2 = n3.worker, r2 = n3.useOnSafari, o2 = void 0 === r2 ? H : r2, i2 = n3.listener, s2 = void 0 === i2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            e3((function(e4, n6) {
              try {
                return "string" == typeof e4 && n6 && P() ? JSON.parse(e4) : e4;
              } catch (n7) {
                console.error("Failed to parse:", e4);
              }
              return e4;
            })(t3, o2));
          };
          return navigator.serviceWorker.addEventListener("message", n4), function() {
            navigator.serviceWorker.removeEventListener("message", n4);
          };
        } : i2, a2 = n3.sender, c2 = void 0 === a2 ? function(e3) {
          var n4, r3 = null !== (n4 = e3.transfer) && void 0 !== n4 ? n4 : [];
          delete e3.transfer, t2.postMessage(e3, r3);
        } : a2, l2 = g(n3, ["worker", "useOnSafari", "listener", "sender"]);
        return e2.call(this, w(w({}, l2), { listener: s2, sender: c2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var Y = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = this, r2 = n3.useOnSafari, o2 = void 0 === r2 ? H : r2, i2 = n3.listener, s2 = void 0 === i2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data, r3 = n5.source;
            t3._clientId = r3.id, e3(t3);
          };
          return self.addEventListener("message", n4), function() {
            return self.removeEventListener("message", n4);
          };
        } : i2, a2 = n3.sender, c2 = void 0 === a2 ? function(e3) {
          return C(t2, void 0, void 0, (function() {
            var n4, t3, r3, i3, s3;
            return k(this, (function(a3) {
              switch (a3.label) {
                case 0:
                  return n4 = e3.transfer || [], delete e3.transfer, t3 = (function(e4, n5) {
                    try {
                      return n5 && P() ? JSON.stringify(e4) : e4;
                    } catch (n6) {
                      throw console.error("Failed to stringify:", e4), n6;
                    }
                  })(e3, o2), e3._clientId ? [4, self.clients.get(e3._clientId)] : [3, 2];
                case 1:
                  return (r3 = a3.sent()) ? (delete e3._clientId, r3.postMessage(t3, n4), [2]) : (console.warn('The client "'.concat(e3._clientId, '" is closed.')), [2]);
                case 2:
                  return (i3 = null === (s3 = e3._extra) || void 0 === s3 ? void 0 : s3._client) ? (delete e3._extra._client, i3.postMessage(t3, n4), [2]) : (self.clients.matchAll().then((function(e4) {
                    return e4.map((function(e5) {
                      return e5.postMessage(t3, n4);
                    }));
                  })), [2]);
              }
            }));
          }));
        } : a2, l2 = g(n3, ["useOnSafari", "listener", "sender"]);
        return t2 = e2.call(this, w(w({}, l2), { listener: s2, sender: c2 })) || this, self.addEventListener("activate", (function(e3) {
          e3.waitUntil(self.clients.claim());
        })), t2;
      }
      return _(n2, e2), n2;
    })(A);
    var Z = { Client: Q, Service: Y };
    var ee = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = n3.channel, r2 = void 0 === t2 ? "$$BroadcastChannel_Transport$$" : t2, o2 = n3.broadcastChannel, i2 = void 0 === o2 ? new BroadcastChannel(r2) : o2, s2 = n3.listener, a2 = void 0 === s2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            e3(t3);
          };
          return i2.addEventListener("message", n4), function() {
            i2.removeEventListener("message", n4);
          };
        } : s2, c2 = n3.sender, l2 = void 0 === c2 ? function(e3) {
          return i2.postMessage(e3);
        } : c2, u2 = g(n3, ["channel", "broadcastChannel", "listener", "sender"]);
        return e2.call(this, w(w({}, u2), { listener: a2, sender: l2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var ne = "$$Electron_Transport$$";
    var te = (function(e2) {
      function n2(n3) {
        var t2 = n3.ipcMain, r2 = n3.browserWindow, o2 = n3.channel, i2 = void 0 === o2 ? ne : o2, s2 = n3.listener, a2 = void 0 === s2 ? function(e3) {
          var n4 = function(n5, t3) {
            e3(t3);
          };
          return t2.on(i2, n4), function() {
            t2.off(i2, n4);
          };
        } : s2, c2 = n3.sender, l2 = void 0 === c2 ? function(e3) {
          return r2.webContents.send(i2, e3);
        } : c2, u2 = g(n3, ["ipcMain", "browserWindow", "channel", "listener", "sender"]);
        return e2.call(this, w(w({}, u2), { listener: a2, sender: l2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var re = (function(e2) {
      function n2(n3) {
        var t2 = n3.ipcRenderer, r2 = n3.channel, o2 = void 0 === r2 ? ne : r2, i2 = n3.listener, s2 = void 0 === i2 ? function(e3) {
          var n4 = function(n5, t3) {
            e3(t3);
          };
          return t2.on(o2, n4), function() {
            t2.off(o2, n4);
          };
        } : i2, a2 = n3.sender, c2 = void 0 === a2 ? function(e3) {
          return t2.send(o2, e3);
        } : a2, l2 = g(n3, ["ipcRenderer", "channel", "listener", "sender"]);
        return e2.call(this, w(w({}, l2), { listener: s2, sender: c2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var oe = { Main: te, Renderer: re };
    var ie = "undefined" != typeof window ? window : void 0 !== ie ? ie : "undefined" != typeof self ? self : {};
    var se = "__DATA_TRANSPORT_BROWSER_EXTENSIONS__";
    var ae = (function(e2) {
      function n2(n3) {
        var t2;
        void 0 === n3 && (n3 = {});
        var r2 = n3.browser, o2 = void 0 === r2 ? null !== (t2 = ie.browser) && void 0 !== t2 ? t2 : ie.chrome : r2, i2 = n3.listener, s2 = void 0 === i2 ? function(e3) {
          this[l] = e3;
          var n4 = function(n5, t3, r3) {
            return n5._sendResponse = r3, e3(n5), true;
          };
          return o2.runtime.onMessage.addListener(n4), function() {
            o2.runtime.onMessage.removeListener(n4);
          };
        } : i2, a2 = n3.sender, c2 = void 0 === a2 ? function(e3) {
          if (e3._sendResponse) {
            var n4 = e3._sendResponse;
            delete e3._sendResponse, n4(e3);
          } else o2.runtime.sendMessage(e3, {}, this[l]);
        } : a2, u2 = g(n3, ["browser", "listener", "sender"]);
        return e2.call(this, w(w({}, u2), { listener: s2, sender: c2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var ce = "sharedworker-connect";
    var le = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2, r2 = this, o2 = n3.browser, i2 = void 0 === o2 ? null !== (t2 = ie.browser) && void 0 !== t2 ? t2 : ie.chrome : o2, s2 = n3.listener, a2 = void 0 === s2 ? function(e3) {
          var n4 = this;
          return this[l] = e3, function() {
            n4.ports.forEach((function(e4) {
              e4.disconnect();
            }));
          };
        } : s2, c2 = n3.sender, u2 = void 0 === c2 ? function(e3) {
          var n4, t3 = null === (n4 = e3._extra) || void 0 === n4 ? void 0 : n4._port;
          if (t3) delete e3._port, t3.postMessage(e3);
          else if ("response" === e3.type && this.ports.has(e3.requestId)) {
            this.ports.get(e3.requestId).postMessage(e3);
          } else this.ports.forEach((function(n5) {
            try {
              n5.postMessage(e3);
            } catch (e4) {
              console.error(e4);
            }
          }));
        } : c2, d2 = g(n3, ["browser", "listener", "sender"]);
        return (r2 = e2.call(this, w(w({}, d2), { listener: a2, sender: u2 })) || this).ports = /* @__PURE__ */ new Map(), r2._onConnectCallback = /* @__PURE__ */ new Set(), r2._onDisconnectCallback = /* @__PURE__ */ new Set(), i2.runtime.onConnect.addListener((function(e3) {
          return C(r2, void 0, void 0, (function() {
            var n4, t3, r3 = this;
            return k(this, (function(o3) {
              switch (o3.label) {
                case 0:
                  return e3.name !== se ? [3, 2] : (n4 = function(n5) {
                    var t4;
                    n5._extra = null !== (t4 = n5._extra) && void 0 !== t4 ? t4 : {}, n5._extra._port = e3, r3[l](n5);
                  }, e3.onMessage.addListener(n4), e3.onDisconnect.addListener((function() {
                    e3.onMessage.removeListener(n4), r3.ports.forEach((function(n5, t4) {
                      n5 === e3 && r3.ports.delete(t4);
                    })), r3._onDisconnectCallback.forEach((function(e4) {
                      e4(t3);
                    }));
                  })), [4, this.emit({ name: ce, _extra: { _port: e3 } })]);
                case 1:
                  t3 = o3.sent(), this.ports.set(t3, e3), this._onConnectCallback.forEach((function(e4) {
                    e4(t3);
                  })), o3.label = 2;
                case 2:
                  return [2];
              }
            }));
          }));
        })), r2;
      }
      return _(n2, e2), n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        };
      }, n2.prototype.onDisconnect = function(e3) {
        var n3 = this;
        return this._onDisconnectCallback.add(e3), function() {
          n3._onDisconnectCallback.delete(e3);
        };
      }, n2;
    })(A);
    var ue = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2, r2 = this, o2 = n3.browser, i2 = void 0 === o2 ? null !== (t2 = ie.browser) && void 0 !== t2 ? t2 : ie.chrome : o2, s2 = n3.port, a2 = void 0 === s2 ? i2.runtime.connect({ name: se }) : s2, c2 = n3.listener, l2 = void 0 === c2 ? function(e3) {
          var n4 = function(n5) {
            e3(n5);
          };
          return a2.onMessage.addListener(n4), function() {
            a2.onMessage.removeListener(n4);
          };
        } : c2, u2 = n3.sender, d2 = void 0 === u2 ? function(e3) {
          a2.postMessage(e3);
        } : u2, f2 = g(n3, ["browser", "port", "listener", "sender"]);
        return (r2 = e2.call(this, w(w({}, f2), { listener: l2, sender: d2 })) || this)._onConnectCallback = /* @__PURE__ */ new Set(), r2.listen(ce, (function() {
          return C(r2, void 0, void 0, (function() {
            var e3 = this;
            return k(this, (function(n4) {
              return Promise.resolve().then((function() {
                e3._onConnectCallback.forEach((function(e4) {
                  e4();
                }));
              })), [2, this.id];
            }));
          }));
        })), r2;
      }
      return _(n2, e2), n2.prototype.onConnect = function(e3) {
        var n3 = this;
        return this._onConnectCallback.add(e3), function() {
          n3._onConnectCallback.delete(e3);
        };
      }, n2;
    })(A);
    var de = { Main: le, Client: ue };
    var fe = 61440;
    var he = (function(e2) {
      function n2(n3) {
        var t2 = this, r2 = n3.peer, o2 = n3.listener, i2 = void 0 === o2 ? function(e3) {
          var n4 = function(n5) {
            var r3, o3, i3, s3 = JSON.parse(n5), a3 = Object.prototype.hasOwnProperty.call(s3, "request") ? "request" : "response", c3 = null !== (i3 = t2.receiveBuffer.get(s3.__DATA_TRANSPORT_UUID__)) && void 0 !== i3 ? i3 : { data: [], timestamp: Date.now() };
            t2.receiveBuffer.set(s3.__DATA_TRANSPORT_UUID__, c3), c3.data[s3.chunkId] = s3[a3], c3.data.length = s3.length, c3.timestamp = Date.now();
            var l3 = c3.data.filter((function(e4) {
              return e4;
            })).length === s3.length;
            if (l3) {
              var u3 = JSON.parse(c3.data.join(""));
              s3[a3] = "request" === a3 ? u3 : u3[0], delete s3.length, e3(s3), t2.receiveBuffer.delete(s3.__DATA_TRANSPORT_UUID__);
              try {
                for (var d3 = E(t2.receiveBuffer), f3 = d3.next(); !f3.done; f3 = d3.next()) {
                  var h2 = S(f3.value, 2), p2 = h2[0], v2 = h2[1];
                  Date.now() - v2.timestamp > 6e4 && t2.receiveBuffer.delete(p2);
                }
              } catch (e4) {
                r3 = { error: e4 };
              } finally {
                try {
                  f3 && !f3.done && (o3 = d3.return) && o3.call(d3);
                } finally {
                  if (r3) throw r3.error;
                }
              }
            }
          };
          return r2.on("data", n4), function() {
            r2.off("data", n4);
          };
        } : o2, s2 = n3.sender, a2 = void 0 === s2 ? function(e3) {
          var n4, t3 = Object.prototype.hasOwnProperty.call(e3, "request") ? "request" : "response";
          e3[t3] = JSON.stringify("request" === t3 ? e3.request : void 0 !== e3.response ? [e3.response] : []);
          for (var o3 = 0, i3 = Math.ceil(e3[t3].length / fe); e3[t3].length > 0; ) {
            var s3 = w(w({}, e3), ((n4 = {})[t3] = e3[t3].slice(0, fe), n4.chunkId = o3, n4.length = i3, n4));
            r2.send(JSON.stringify(s3)), e3[t3] = e3[t3].slice(fe), o3 += 1;
          }
        } : s2, c2 = g(n3, ["peer", "listener", "sender"]);
        if ((t2 = e2.call(this, w(w({}, c2), { listener: i2, sender: a2 })) || this).receiveBuffer = /* @__PURE__ */ new Map(), r2) {
          var l2 = false, u2 = [], d2 = r2.send.bind(r2), f2 = function() {
            l2 = false;
            for (var e3 = u2.shift(), n4 = function() {
              if (r2._channel.bufferedAmount && r2._channel.bufferedAmount > 65536) {
                l2 = true, u2.unshift(e3);
                var n5 = function() {
                  r2._channel.removeEventListener("bufferedamountlow", n5), f2();
                };
                return r2._channel.addEventListener("bufferedamountlow", n5), { value: void 0 };
              }
              try {
                d2(e3), e3 = u2.shift();
              } catch (e4) {
                throw new Error("Error send message to peer: ".concat(e4.message));
              }
            }; e3; ) {
              var t3 = n4();
              if ("object" == typeof t3) return t3.value;
            }
          };
          r2.send = function(e3) {
            u2.push(e3), l2 || f2();
          };
        }
        return t2;
      }
      return _(n2, e2), n2;
    })(A);
    var pe = (function(e2) {
      function n2(n3) {
        var t2 = n3.targetOrigin, r2 = void 0 === t2 ? "*" : t2, o2 = n3.listener, i2 = void 0 === o2 ? function(e3) {
          var n4 = function(n5) {
            var t3 = n5.data;
            return e3(t3);
          };
          return window.addEventListener("message", n4), function() {
            window.removeEventListener("message", n4);
          };
        } : o2, s2 = n3.sender, a2 = void 0 === s2 ? function(e3) {
          window.postMessage(e3, r2);
        } : s2, c2 = g(n3, ["targetOrigin", "listener", "sender"]);
        return e2.call(this, w(w({}, c2), { listener: i2, sender: a2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var ve = (function(e2) {
      function n2(n3) {
        var t2 = n3.child, r2 = n3.listener, o2 = void 0 === r2 ? function(e3) {
          var n4 = function(n5) {
            e3(n5);
          };
          return t2.on("message", n4), function() {
            t2.off("message", n4);
          };
        } : r2, i2 = n3.sender, s2 = void 0 === i2 ? function(e3) {
          t2.send(e3);
        } : i2, a2 = g(n3, ["child", "listener", "sender"]);
        return e2.call(this, w(w({}, a2), { listener: o2, sender: s2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var me = (function(e2) {
      function n2(n3) {
        void 0 === n3 && (n3 = {});
        var t2 = n3.listener, r2 = void 0 === t2 ? function(e3) {
          var n4 = function(n5) {
            e3(n5);
          };
          return process.on("message", n4), function() {
            process.off("message", n4);
          };
        } : t2, o2 = n3.sender, i2 = void 0 === o2 ? function(e3) {
          process.send(e3);
        } : o2, s2 = g(n3, ["listener", "sender"]);
        return e2.call(this, w(w({}, s2), { listener: r2, sender: i2 })) || this;
      }
      return _(n2, e2), n2;
    })(A);
    var ye = { Main: ve, Child: me };
    var be = { Base: A, MessageTransport: pe, IFrameMain: j.Main, IFrameInternal: j.IFrame, BrowserExtensions: ae, BrowserExtensionsMain: de.Main, BrowserExtensionsClient: de.Client, ElectronMain: oe.Main, ElectronRenderer: oe.Renderer, ServiceWorkerClient: Z.Client, ServiceWorkerService: Z.Service, WebWorkerClient: $.Main, WebWorkerInternal: $.Worker, WebRTC: he, Broadcast: ee, SharedWorkerClient: X.Client, SharedWorkerInternal: X.Worker, MainProcess: ye.Main, ChildProcess: ye.Child };
    var _e = function(e2, n2) {
      return new be[e2](n2);
    };
    exports.BroadcastTransport = ee, exports.BrowserExtensionsClientTransport = ue, exports.BrowserExtensionsGenericTransport = ae, exports.BrowserExtensionsMainTransport = le, exports.BrowserExtensionsTransport = de, exports.ChildProcessTransport = me, exports.ElectronMainTransport = te, exports.ElectronRendererTransport = re, exports.ElectronTransport = oe, exports.IFrameInternalTransport = U, exports.IFrameMainTransport = B, exports.IFrameTransport = j, exports.MainProcessTransport = ve, exports.MessageTransport = pe, exports.ProcessTransport = ye, exports.ServiceWorkerClientTransport = Q, exports.ServiceWorkerServiceTransport = Y, exports.ServiceWorkerTransport = Z, exports.SharedWorkerClientTransport = z, exports.SharedWorkerInternalTransport = G, exports.SharedWorkerTransport = X, exports.Transport = A, exports.TransportMap = be, exports.WebRTCTransport = he, exports.WorkerInternalTransport = J, exports.WorkerMainTransport = F, exports.WorkerTransport = $, exports.createTransport = _e, exports.getAction = W, exports.listen = function(e2, n2, t2) {
      var r2, o2 = t2.value;
      return e2[c] = null !== (r2 = e2[c]) && void 0 !== r2 ? r2 : /* @__PURE__ */ new Map(), e2[c].set(n2, o2), w(w({}, t2), { value: function() {
        return Promise.resolve();
      } });
    }, exports.listenKey = n, exports.listenerKey = e, exports.logKey = s, exports.merge = function(n2, r2) {
      for (var o2 = [], i2 = 2; i2 < arguments.length; i2++) o2[i2 - 2] = arguments[i2];
      var s2 = (function(e2, n3, t2) {
        if (t2 || 2 === arguments.length) for (var r3, o3 = 0, i3 = n3.length; o3 < i3; o3++) !r3 && o3 in n3 || (r3 || (r3 = Array.prototype.slice.call(n3, 0, o3)), r3[o3] = n3[o3]);
        return e2.concat(r3 || Array.prototype.slice.call(n3));
      })([n2, r2], S(o2), false);
      if (void 0 === n2 || void 0 === r2) throw new Error("Only more than one transports can be merged.");
      return _e("Base", { listener: function(n3) {
        var t2 = function(e2) {
          n3(e2);
        }, r3 = s2.map((function(n4) {
          return n4[e](t2);
        }));
        return function() {
          r3.forEach((function(e2) {
            return e2 && e2();
          }));
        };
      }, sender: function(e2) {
        s2.forEach((function(n3) {
          n3[t](e2);
        }));
      } });
    }, exports.mockPorts = function() {
      var e2 = /* @__PURE__ */ new Set(), n2 = null;
      return { main: { listener: function(e3) {
        return n2 = e3, function() {
          n2 = null;
        };
      }, sender: function(n3) {
        var t2, r2;
        try {
          for (var o2 = E(e2), i2 = o2.next(); !i2.done; i2 = o2.next()) {
            (0, i2.value)(JSON.parse(JSON.stringify(n3)));
          }
        } catch (e3) {
          t2 = { error: e3 };
        } finally {
          try {
            i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
          } finally {
            if (t2) throw t2.error;
          }
        }
      } }, create: function() {
        return { listener: function(n3) {
          return e2.add(n3), function() {
            e2.delete(n3);
          };
        }, sender: function(e3) {
          null == n2 || n2(JSON.parse(JSON.stringify(e3)));
        } };
      } };
    }, exports.senderKey = t, exports.verboseKey = a;
  }
});

// ../../node_modules/data-transport/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/data-transport/dist/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_index_cjs_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../core/dist/src/originStorageClient.js
var require_originStorageClient = __commonJS({
  "../core/dist/src/originStorageClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OriginStorageClient = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var data_transport_1 = require_dist();
    var OriginStorageClient2 = class extends data_transport_1.IFrameTransport.Main {
      constructor(_a) {
        var { storageOptions, uri } = _a, options = tslib_1.__rest(_a, ["storageOptions", "uri"]);
        const iframe = document.createElement("iframe");
        iframe.setAttribute("style", "display:none");
        iframe.src = uri;
        document.body.appendChild(iframe);
        super(Object.assign({ iframe }, options));
        this._onConnectCallbacks = /* @__PURE__ */ new Set();
        this._onChangeCallbacks = /* @__PURE__ */ new Set();
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
          const result = yield this.emit("broadcastChanges");
          if (!result.broadcastChanges) {
            if (false) {
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
          } catch (e) {
            console.error(e);
          }
        });
      }
      change(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this._change(Object.assign(Object.assign({}, options), typeof options.key === "string" && !options.value ? { value: yield this.getItem(options.key) } : {}));
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
          if (typeof this._connect !== "function") {
            if (false) {
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
          const result = yield this.emit("getItem", Object.assign({ key }, options));
          if (result === null || result === void 0 ? void 0 : result.error) {
            throw new Error(`'getItem' error: ${result.error}`);
          }
          if (options === null || options === void 0 ? void 0 : options.includeMetadata) {
            const metadataResult = result;
            if (metadataResult && typeof metadataResult === "object" && "value" in metadataResult && "origin" in metadataResult && "timestamp" in metadataResult) {
              return metadataResult;
            }
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
          const result = yield this.emit("setItem", { key, value });
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
          const result = yield this.emit("removeItem", { key });
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
          const result = yield this.emit("clear", filterOrigin ? { filterOrigin } : void 0);
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
          const result = yield this.emit("length", filterOrigin ? { filterOrigin } : void 0);
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
          const result = yield this.emit("key", Object.assign({ index }, filterOrigin ? { filterOrigin } : {}));
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
          const result = yield this.emit("keys", filterOrigin ? { filterOrigin } : void 0);
          if (result === null || result === void 0 ? void 0 : result.error) {
            throw new Error(`'keys' error: ${result.error}`);
          }
          return result === null || result === void 0 ? void 0 : result.keys;
        });
      }
    };
    exports.OriginStorageClient = OriginStorageClient2;
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorageClient2.prototype, "change", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", []),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorageClient2.prototype, "getConfig", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", []),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorageClient2.prototype, "connect", null);
  }
});

// ../../node_modules/broadcast-channel/dist/lib/util.js
var require_util = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PROMISE_RESOLVED_VOID = exports.PROMISE_RESOLVED_TRUE = exports.PROMISE_RESOLVED_FALSE = void 0;
    exports.isPromise = isPromise;
    exports.microSeconds = microSeconds;
    exports.randomInt = randomInt;
    exports.randomToken = randomToken;
    exports.sleep = sleep;
    exports.supportsWebLockAPI = supportsWebLockAPI;
    function isPromise(obj) {
      return obj && typeof obj.then === "function";
    }
    var PROMISE_RESOLVED_FALSE = exports.PROMISE_RESOLVED_FALSE = Promise.resolve(false);
    var PROMISE_RESOLVED_TRUE = exports.PROMISE_RESOLVED_TRUE = Promise.resolve(true);
    var PROMISE_RESOLVED_VOID = exports.PROMISE_RESOLVED_VOID = Promise.resolve();
    function sleep(time, resolveWith) {
      if (!time) time = 0;
      return new Promise(function(res) {
        return setTimeout(function() {
          return res(resolveWith);
        }, time);
      });
    }
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function randomToken() {
      return Math.random().toString(36).substring(2);
    }
    var lastMs = 0;
    var additional = 0;
    function microSeconds() {
      var ms = Date.now();
      if (ms === lastMs) {
        additional++;
        return ms * 1e3 + additional;
      } else {
        lastMs = ms;
        additional = 0;
        return ms * 1e3;
      }
    }
    function supportsWebLockAPI() {
      if (typeof navigator !== "undefined" && typeof navigator.locks !== "undefined" && typeof navigator.locks.request === "function") {
        return true;
      } else {
        return false;
      }
    }
  }
});

// ../../node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "../../node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    "use strict";
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// ../../node_modules/broadcast-channel/dist/lib/methods/native.js
var require_native = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/methods/native.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NativeMethod = void 0;
    exports.averageResponseTime = averageResponseTime;
    exports.canBeUsed = canBeUsed;
    exports.close = close;
    exports.create = create;
    exports.microSeconds = void 0;
    exports.onMessage = onMessage;
    exports.postMessage = postMessage2;
    exports.type = void 0;
    var _util = require_util();
    var microSeconds = exports.microSeconds = _util.microSeconds;
    var type = exports.type = "native";
    function create(channelName) {
      var state = {
        messagesCallback: null,
        bc: new BroadcastChannel(channelName),
        subFns: []
        // subscriberFunctions
      };
      state.bc.onmessage = function(msg) {
        if (state.messagesCallback) {
          state.messagesCallback(msg.data);
        }
      };
      return state;
    }
    function close(channelState) {
      channelState.bc.close();
      channelState.subFns = [];
    }
    function postMessage2(channelState, messageJson) {
      try {
        channelState.bc.postMessage(messageJson, false);
        return _util.PROMISE_RESOLVED_VOID;
      } catch (err) {
        return Promise.reject(err);
      }
    }
    function onMessage(channelState, fn) {
      channelState.messagesCallback = fn;
    }
    function canBeUsed() {
      if ((typeof window !== "undefined" || typeof self !== "undefined") && typeof BroadcastChannel === "function") {
        if (BroadcastChannel._pubkey) {
          throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
        }
        return true;
      } else {
        return false;
      }
    }
    function averageResponseTime() {
      return 150;
    }
    var NativeMethod = exports.NativeMethod = {
      create,
      close,
      onMessage,
      postMessage: postMessage2,
      canBeUsed,
      type,
      averageResponseTime,
      microSeconds
    };
  }
});

// ../../node_modules/oblivious-set/dist/es/index.js
var es_exports = {};
__export(es_exports, {
  ObliviousSet: () => ObliviousSet,
  now: () => now,
  removeTooOldValues: () => removeTooOldValues
});
function removeTooOldValues(obliviousSet) {
  var olderThen = now() - obliviousSet.ttl;
  var iterator = obliviousSet.map[Symbol.iterator]();
  while (true) {
    var next = iterator.next().value;
    if (!next) {
      return;
    }
    var value = next[0];
    var time = next[1];
    if (time < olderThen) {
      obliviousSet.map.delete(value);
    } else {
      return;
    }
  }
}
function now() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var ObliviousSet;
var init_es = __esm({
  "../../node_modules/oblivious-set/dist/es/index.js"() {
    "use strict";
    ObliviousSet = /** @class */
    (function() {
      function ObliviousSet2(ttl) {
        this.ttl = ttl;
        this.map = /* @__PURE__ */ new Map();
        this._to = false;
      }
      ObliviousSet2.prototype.has = function(value) {
        return this.map.has(value);
      };
      ObliviousSet2.prototype.add = function(value) {
        var _this = this;
        this.map.set(value, now());
        if (!this._to) {
          this._to = true;
          setTimeout(function() {
            _this._to = false;
            removeTooOldValues(_this);
          }, 0);
        }
      };
      ObliviousSet2.prototype.clear = function() {
        this.map.clear();
      };
      return ObliviousSet2;
    })();
  }
});

// ../../node_modules/broadcast-channel/dist/lib/options.js
var require_options = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fillOptionsWithDefaults = fillOptionsWithDefaults;
    function fillOptionsWithDefaults() {
      var originalOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var options = JSON.parse(JSON.stringify(originalOptions));
      if (typeof options.webWorkerSupport === "undefined") options.webWorkerSupport = true;
      if (!options.idb) options.idb = {};
      if (!options.idb.ttl) options.idb.ttl = 1e3 * 45;
      if (!options.idb.fallbackInterval) options.idb.fallbackInterval = 150;
      if (originalOptions.idb && typeof originalOptions.idb.onclose === "function") options.idb.onclose = originalOptions.idb.onclose;
      if (!options.localstorage) options.localstorage = {};
      if (!options.localstorage.removeTimeout) options.localstorage.removeTimeout = 1e3 * 60;
      if (originalOptions.methods) options.methods = originalOptions.methods;
      if (!options.node) options.node = {};
      if (!options.node.ttl) options.node.ttl = 1e3 * 60 * 2;
      if (!options.node.maxParallelWrites) options.node.maxParallelWrites = 2048;
      if (typeof options.node.useFastPath === "undefined") options.node.useFastPath = true;
      return options;
    }
  }
});

// ../../node_modules/broadcast-channel/dist/lib/methods/indexed-db.js
var require_indexed_db = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/methods/indexed-db.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TRANSACTION_SETTINGS = exports.IndexedDBMethod = void 0;
    exports.averageResponseTime = averageResponseTime;
    exports.canBeUsed = canBeUsed;
    exports.cleanOldMessages = cleanOldMessages;
    exports.close = close;
    exports.commitIndexedDBTransaction = commitIndexedDBTransaction;
    exports.create = create;
    exports.createDatabase = createDatabase;
    exports.getAllMessages = getAllMessages;
    exports.getIdb = getIdb;
    exports.getMessagesHigherThan = getMessagesHigherThan;
    exports.getOldMessages = getOldMessages;
    exports.microSeconds = void 0;
    exports.onMessage = onMessage;
    exports.postMessage = postMessage2;
    exports.removeMessagesById = removeMessagesById;
    exports.type = void 0;
    exports.writeMessage = writeMessage;
    var _util = require_util();
    var _obliviousSet = (init_es(), __toCommonJS(es_exports));
    var _options = require_options();
    var microSeconds = exports.microSeconds = _util.microSeconds;
    var DB_PREFIX = "pubkey.broadcast-channel-0-";
    var OBJECT_STORE_ID = "messages";
    var TRANSACTION_SETTINGS = exports.TRANSACTION_SETTINGS = {
      durability: "relaxed"
    };
    var type = exports.type = "idb";
    function getIdb() {
      if (typeof indexedDB !== "undefined") return indexedDB;
      if (typeof window !== "undefined") {
        if (typeof window.mozIndexedDB !== "undefined") return window.mozIndexedDB;
        if (typeof window.webkitIndexedDB !== "undefined") return window.webkitIndexedDB;
        if (typeof window.msIndexedDB !== "undefined") return window.msIndexedDB;
      }
      return false;
    }
    function commitIndexedDBTransaction(tx) {
      if (tx.commit) {
        tx.commit();
      }
    }
    function createDatabase(channelName) {
      var IndexedDB = getIdb();
      var dbName = DB_PREFIX + channelName;
      var openRequest = IndexedDB.open(dbName);
      openRequest.onupgradeneeded = function(ev) {
        var db = ev.target.result;
        db.createObjectStore(OBJECT_STORE_ID, {
          keyPath: "id",
          autoIncrement: true
        });
      };
      return new Promise(function(res, rej) {
        openRequest.onerror = function(ev) {
          return rej(ev);
        };
        openRequest.onsuccess = function() {
          res(openRequest.result);
        };
      });
    }
    function writeMessage(db, readerUuid, messageJson) {
      var time = Date.now();
      var writeObject = {
        uuid: readerUuid,
        time,
        data: messageJson
      };
      var tx = db.transaction([OBJECT_STORE_ID], "readwrite", TRANSACTION_SETTINGS);
      return new Promise(function(res, rej) {
        tx.oncomplete = function() {
          return res();
        };
        tx.onerror = function(ev) {
          return rej(ev);
        };
        var objectStore = tx.objectStore(OBJECT_STORE_ID);
        objectStore.add(writeObject);
        commitIndexedDBTransaction(tx);
      });
    }
    function getAllMessages(db) {
      var tx = db.transaction(OBJECT_STORE_ID, "readonly", TRANSACTION_SETTINGS);
      var objectStore = tx.objectStore(OBJECT_STORE_ID);
      var ret = [];
      return new Promise(function(res) {
        objectStore.openCursor().onsuccess = function(ev) {
          var cursor = ev.target.result;
          if (cursor) {
            ret.push(cursor.value);
            cursor["continue"]();
          } else {
            commitIndexedDBTransaction(tx);
            res(ret);
          }
        };
      });
    }
    function getMessagesHigherThan(db, lastCursorId) {
      var tx = db.transaction(OBJECT_STORE_ID, "readonly", TRANSACTION_SETTINGS);
      var objectStore = tx.objectStore(OBJECT_STORE_ID);
      var ret = [];
      var keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
      if (objectStore.getAll) {
        var getAllRequest = objectStore.getAll(keyRangeValue);
        return new Promise(function(res, rej) {
          getAllRequest.onerror = function(err) {
            return rej(err);
          };
          getAllRequest.onsuccess = function(e) {
            res(e.target.result);
          };
        });
      }
      function openCursor() {
        try {
          keyRangeValue = IDBKeyRange.bound(lastCursorId + 1, Infinity);
          return objectStore.openCursor(keyRangeValue);
        } catch (e) {
          return objectStore.openCursor();
        }
      }
      return new Promise(function(res, rej) {
        var openCursorRequest = openCursor();
        openCursorRequest.onerror = function(err) {
          return rej(err);
        };
        openCursorRequest.onsuccess = function(ev) {
          var cursor = ev.target.result;
          if (cursor) {
            if (cursor.value.id < lastCursorId + 1) {
              cursor["continue"](lastCursorId + 1);
            } else {
              ret.push(cursor.value);
              cursor["continue"]();
            }
          } else {
            commitIndexedDBTransaction(tx);
            res(ret);
          }
        };
      });
    }
    function removeMessagesById(channelState, ids) {
      if (channelState.closed) {
        return Promise.resolve([]);
      }
      var tx = channelState.db.transaction(OBJECT_STORE_ID, "readwrite", TRANSACTION_SETTINGS);
      var objectStore = tx.objectStore(OBJECT_STORE_ID);
      return Promise.all(ids.map(function(id) {
        var deleteRequest = objectStore["delete"](id);
        return new Promise(function(res) {
          deleteRequest.onsuccess = function() {
            return res();
          };
        });
      }));
    }
    function getOldMessages(db, ttl) {
      var olderThen = Date.now() - ttl;
      var tx = db.transaction(OBJECT_STORE_ID, "readonly", TRANSACTION_SETTINGS);
      var objectStore = tx.objectStore(OBJECT_STORE_ID);
      var ret = [];
      return new Promise(function(res) {
        objectStore.openCursor().onsuccess = function(ev) {
          var cursor = ev.target.result;
          if (cursor) {
            var msgObk = cursor.value;
            if (msgObk.time < olderThen) {
              ret.push(msgObk);
              cursor["continue"]();
            } else {
              commitIndexedDBTransaction(tx);
              res(ret);
            }
          } else {
            res(ret);
          }
        };
      });
    }
    function cleanOldMessages(channelState) {
      return getOldMessages(channelState.db, channelState.options.idb.ttl).then(function(tooOld) {
        return removeMessagesById(channelState, tooOld.map(function(msg) {
          return msg.id;
        }));
      });
    }
    function create(channelName, options) {
      options = (0, _options.fillOptionsWithDefaults)(options);
      return createDatabase(channelName).then(function(db) {
        var state = {
          closed: false,
          lastCursorId: 0,
          channelName,
          options,
          uuid: (0, _util.randomToken)(),
          /**
           * emittedMessagesIds
           * contains all messages that have been emitted before
           * @type {ObliviousSet}
           */
          eMIs: new _obliviousSet.ObliviousSet(options.idb.ttl * 2),
          // ensures we do not read messages in parallel
          writeBlockPromise: _util.PROMISE_RESOLVED_VOID,
          messagesCallback: null,
          readQueuePromises: [],
          db
        };
        db.onclose = function() {
          state.closed = true;
          if (options.idb.onclose) options.idb.onclose();
        };
        _readLoop(state);
        return state;
      });
    }
    function _readLoop(state) {
      if (state.closed) return;
      readNewMessages(state).then(function() {
        return (0, _util.sleep)(state.options.idb.fallbackInterval);
      }).then(function() {
        return _readLoop(state);
      });
    }
    function _filterMessage(msgObj, state) {
      if (msgObj.uuid === state.uuid) return false;
      if (state.eMIs.has(msgObj.id)) return false;
      if (msgObj.data.time < state.messagesCallbackTime) return false;
      return true;
    }
    function readNewMessages(state) {
      if (state.closed) return _util.PROMISE_RESOLVED_VOID;
      if (!state.messagesCallback) return _util.PROMISE_RESOLVED_VOID;
      return getMessagesHigherThan(state.db, state.lastCursorId).then(function(newerMessages) {
        var useMessages = newerMessages.filter(function(msgObj) {
          return !!msgObj;
        }).map(function(msgObj) {
          if (msgObj.id > state.lastCursorId) {
            state.lastCursorId = msgObj.id;
          }
          return msgObj;
        }).filter(function(msgObj) {
          return _filterMessage(msgObj, state);
        }).sort(function(msgObjA, msgObjB) {
          return msgObjA.time - msgObjB.time;
        });
        useMessages.forEach(function(msgObj) {
          if (state.messagesCallback) {
            state.eMIs.add(msgObj.id);
            state.messagesCallback(msgObj.data);
          }
        });
        return _util.PROMISE_RESOLVED_VOID;
      });
    }
    function close(channelState) {
      channelState.closed = true;
      channelState.db.close();
    }
    function postMessage2(channelState, messageJson) {
      channelState.writeBlockPromise = channelState.writeBlockPromise.then(function() {
        return writeMessage(channelState.db, channelState.uuid, messageJson);
      }).then(function() {
        if ((0, _util.randomInt)(0, 10) === 0) {
          cleanOldMessages(channelState);
        }
      });
      return channelState.writeBlockPromise;
    }
    function onMessage(channelState, fn, time) {
      channelState.messagesCallbackTime = time;
      channelState.messagesCallback = fn;
      readNewMessages(channelState);
    }
    function canBeUsed() {
      return !!getIdb();
    }
    function averageResponseTime(options) {
      return options.idb.fallbackInterval * 2;
    }
    var IndexedDBMethod = exports.IndexedDBMethod = {
      create,
      close,
      onMessage,
      postMessage: postMessage2,
      canBeUsed,
      type,
      averageResponseTime,
      microSeconds
    };
  }
});

// ../../node_modules/broadcast-channel/dist/lib/methods/localstorage.js
var require_localstorage = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/methods/localstorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalstorageMethod = void 0;
    exports.addStorageEventListener = addStorageEventListener;
    exports.averageResponseTime = averageResponseTime;
    exports.canBeUsed = canBeUsed;
    exports.close = close;
    exports.create = create;
    exports.getLocalStorage = getLocalStorage;
    exports.microSeconds = void 0;
    exports.onMessage = onMessage;
    exports.postMessage = postMessage2;
    exports.removeStorageEventListener = removeStorageEventListener;
    exports.storageKey = storageKey;
    exports.type = void 0;
    var _obliviousSet = (init_es(), __toCommonJS(es_exports));
    var _options = require_options();
    var _util = require_util();
    var microSeconds = exports.microSeconds = _util.microSeconds;
    var KEY_PREFIX = "pubkey.broadcastChannel-";
    var type = exports.type = "localstorage";
    function getLocalStorage() {
      var localStorage2;
      if (typeof window === "undefined") return null;
      try {
        localStorage2 = window.localStorage;
        localStorage2 = window["ie8-eventlistener/storage"] || window.localStorage;
      } catch (e) {
      }
      return localStorage2;
    }
    function storageKey(channelName) {
      return KEY_PREFIX + channelName;
    }
    function postMessage2(channelState, messageJson) {
      return new Promise(function(res) {
        (0, _util.sleep)().then(function() {
          var key = storageKey(channelState.channelName);
          var writeObj = {
            token: (0, _util.randomToken)(),
            time: Date.now(),
            data: messageJson,
            uuid: channelState.uuid
          };
          var value = JSON.stringify(writeObj);
          getLocalStorage().setItem(key, value);
          var ev = document.createEvent("Event");
          ev.initEvent("storage", true, true);
          ev.key = key;
          ev.newValue = value;
          window.dispatchEvent(ev);
          res();
        });
      });
    }
    function addStorageEventListener(channelName, fn) {
      var key = storageKey(channelName);
      var listener = function listener2(ev) {
        if (ev.key === key) {
          fn(JSON.parse(ev.newValue));
        }
      };
      window.addEventListener("storage", listener);
      return listener;
    }
    function removeStorageEventListener(listener) {
      window.removeEventListener("storage", listener);
    }
    function create(channelName, options) {
      options = (0, _options.fillOptionsWithDefaults)(options);
      if (!canBeUsed()) {
        throw new Error("BroadcastChannel: localstorage cannot be used");
      }
      var uuid = (0, _util.randomToken)();
      var eMIs = new _obliviousSet.ObliviousSet(options.localstorage.removeTimeout);
      var state = {
        channelName,
        uuid,
        eMIs
        // emittedMessagesIds
      };
      state.listener = addStorageEventListener(channelName, function(msgObj) {
        if (!state.messagesCallback) return;
        if (msgObj.uuid === uuid) return;
        if (!msgObj.token || eMIs.has(msgObj.token)) return;
        if (msgObj.data.time && msgObj.data.time < state.messagesCallbackTime) return;
        eMIs.add(msgObj.token);
        state.messagesCallback(msgObj.data);
      });
      return state;
    }
    function close(channelState) {
      removeStorageEventListener(channelState.listener);
    }
    function onMessage(channelState, fn, time) {
      channelState.messagesCallbackTime = time;
      channelState.messagesCallback = fn;
    }
    function canBeUsed() {
      var ls = getLocalStorage();
      if (!ls) return false;
      try {
        var key = "__broadcastchannel_check";
        ls.setItem(key, "works");
        ls.removeItem(key);
      } catch (e) {
        return false;
      }
      return true;
    }
    function averageResponseTime() {
      var defaultTime = 120;
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        return defaultTime * 2;
      }
      return defaultTime;
    }
    var LocalstorageMethod = exports.LocalstorageMethod = {
      create,
      close,
      onMessage,
      postMessage: postMessage2,
      canBeUsed,
      type,
      averageResponseTime,
      microSeconds
    };
  }
});

// ../../node_modules/broadcast-channel/dist/lib/methods/simulate.js
var require_simulate = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/methods/simulate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SimulateMethod = void 0;
    exports.averageResponseTime = averageResponseTime;
    exports.canBeUsed = canBeUsed;
    exports.close = close;
    exports.create = create;
    exports.microSeconds = void 0;
    exports.onMessage = onMessage;
    exports.postMessage = postMessage2;
    exports.type = void 0;
    var _util = require_util();
    var microSeconds = exports.microSeconds = _util.microSeconds;
    var type = exports.type = "simulate";
    var SIMULATE_CHANNELS = /* @__PURE__ */ new Set();
    function create(channelName) {
      var state = {
        name: channelName,
        messagesCallback: null
      };
      SIMULATE_CHANNELS.add(state);
      return state;
    }
    function close(channelState) {
      SIMULATE_CHANNELS["delete"](channelState);
    }
    function postMessage2(channelState, messageJson) {
      return new Promise(function(res) {
        return setTimeout(function() {
          var channelArray = Array.from(SIMULATE_CHANNELS);
          channelArray.filter(function(channel) {
            return channel.name === channelState.name;
          }).filter(function(channel) {
            return channel !== channelState;
          }).filter(function(channel) {
            return !!channel.messagesCallback;
          }).forEach(function(channel) {
            return channel.messagesCallback(messageJson);
          });
          res();
        }, 5);
      });
    }
    function onMessage(channelState, fn) {
      channelState.messagesCallback = fn;
    }
    function canBeUsed() {
      return true;
    }
    function averageResponseTime() {
      return 5;
    }
    var SimulateMethod = exports.SimulateMethod = {
      create,
      close,
      onMessage,
      postMessage: postMessage2,
      canBeUsed,
      type,
      averageResponseTime,
      microSeconds
    };
  }
});

// ../../node_modules/broadcast-channel/dist/lib/method-chooser.js
var require_method_chooser = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/method-chooser.js"(exports) {
    "use strict";
    var _typeof = require_typeof();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.chooseMethod = chooseMethod;
    var _native = require_native();
    var _indexedDb = require_indexed_db();
    var _localstorage = require_localstorage();
    var _simulate = require_simulate();
    var METHODS = [
      _native.NativeMethod,
      // fastest
      _indexedDb.IndexedDBMethod,
      _localstorage.LocalstorageMethod
    ];
    function chooseMethod(options) {
      var chooseMethods = [].concat(options.methods, METHODS).filter(Boolean);
      if (options.type) {
        if (options.type === "simulate") {
          return _simulate.SimulateMethod;
        }
        var ret = chooseMethods.find(function(m) {
          return m.type === options.type;
        });
        if (!ret) throw new Error("method-type " + options.type + " not found");
        else return ret;
      }
      if (!options.webWorkerSupport) {
        chooseMethods = chooseMethods.filter(function(m) {
          return m.type !== "idb";
        });
      }
      var useMethod = chooseMethods.find(function(method) {
        return method.canBeUsed();
      });
      if (!useMethod) {
        throw new Error("No usable method found in " + JSON.stringify(METHODS.map(function(m) {
          return m.type;
        })));
      } else {
        return useMethod;
      }
    }
  }
});

// ../../node_modules/broadcast-channel/dist/lib/broadcast-channel.js
var require_broadcast_channel = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/broadcast-channel.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OPEN_BROADCAST_CHANNELS = exports.BroadcastChannel = void 0;
    exports.clearNodeFolder = clearNodeFolder;
    exports.enforceOptions = enforceOptions;
    var _util = require_util();
    var _methodChooser = require_method_chooser();
    var _options = require_options();
    var OPEN_BROADCAST_CHANNELS = exports.OPEN_BROADCAST_CHANNELS = /* @__PURE__ */ new Set();
    var lastId = 0;
    var BroadcastChannel2 = exports.BroadcastChannel = function BroadcastChannel3(name, options) {
      this.id = lastId++;
      OPEN_BROADCAST_CHANNELS.add(this);
      this.name = name;
      if (ENFORCED_OPTIONS) {
        options = ENFORCED_OPTIONS;
      }
      this.options = (0, _options.fillOptionsWithDefaults)(options);
      this.method = (0, _methodChooser.chooseMethod)(this.options);
      this._iL = false;
      this._onML = null;
      this._addEL = {
        message: [],
        internal: []
      };
      this._uMP = /* @__PURE__ */ new Set();
      this._befC = [];
      this._prepP = null;
      _prepareChannel(this);
    };
    BroadcastChannel2._pubkey = true;
    function clearNodeFolder(options) {
      options = (0, _options.fillOptionsWithDefaults)(options);
      var method = (0, _methodChooser.chooseMethod)(options);
      if (method.type === "node") {
        return method.clearNodeFolder().then(function() {
          return true;
        });
      } else {
        return _util.PROMISE_RESOLVED_FALSE;
      }
    }
    var ENFORCED_OPTIONS;
    function enforceOptions(options) {
      ENFORCED_OPTIONS = options;
    }
    BroadcastChannel2.prototype = {
      postMessage: function postMessage2(msg) {
        if (this.closed) {
          throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + /**
           * In the past when this error appeared, it was really hard to debug.
           * So now we log the msg together with the error so it at least
           * gives some clue about where in your application this happens.
           */
          JSON.stringify(msg));
        }
        return _post(this, "message", msg);
      },
      postInternal: function postInternal(msg) {
        return _post(this, "internal", msg);
      },
      set onmessage(fn) {
        var time = this.method.microSeconds();
        var listenObj = {
          time,
          fn
        };
        _removeListenerObject(this, "message", this._onML);
        if (fn && typeof fn === "function") {
          this._onML = listenObj;
          _addListenerObject(this, "message", listenObj);
        } else {
          this._onML = null;
        }
      },
      addEventListener: function addEventListener(type, fn) {
        var time = this.method.microSeconds();
        var listenObj = {
          time,
          fn
        };
        _addListenerObject(this, type, listenObj);
      },
      removeEventListener: function removeEventListener(type, fn) {
        var obj = this._addEL[type].find(function(obj2) {
          return obj2.fn === fn;
        });
        _removeListenerObject(this, type, obj);
      },
      close: function close() {
        var _this = this;
        if (this.closed) {
          return;
        }
        OPEN_BROADCAST_CHANNELS["delete"](this);
        this.closed = true;
        var awaitPrepare = this._prepP ? this._prepP : _util.PROMISE_RESOLVED_VOID;
        this._onML = null;
        this._addEL.message = [];
        return awaitPrepare.then(function() {
          return Promise.all(Array.from(_this._uMP));
        }).then(function() {
          return Promise.all(_this._befC.map(function(fn) {
            return fn();
          }));
        }).then(function() {
          return _this.method.close(_this._state);
        });
      },
      get type() {
        return this.method.type;
      },
      get isClosed() {
        return this.closed;
      }
    };
    function _post(broadcastChannel, type, msg) {
      var time = broadcastChannel.method.microSeconds();
      var msgObj = {
        time,
        type,
        data: msg
      };
      var awaitPrepare = broadcastChannel._prepP ? broadcastChannel._prepP : _util.PROMISE_RESOLVED_VOID;
      return awaitPrepare.then(function() {
        var sendPromise = broadcastChannel.method.postMessage(broadcastChannel._state, msgObj);
        broadcastChannel._uMP.add(sendPromise);
        sendPromise["catch"]().then(function() {
          return broadcastChannel._uMP["delete"](sendPromise);
        });
        return sendPromise;
      });
    }
    function _prepareChannel(channel) {
      var maybePromise = channel.method.create(channel.name, channel.options);
      if ((0, _util.isPromise)(maybePromise)) {
        channel._prepP = maybePromise;
        maybePromise.then(function(s) {
          channel._state = s;
        });
      } else {
        channel._state = maybePromise;
      }
    }
    function _hasMessageListeners(channel) {
      if (channel._addEL.message.length > 0) return true;
      if (channel._addEL.internal.length > 0) return true;
      return false;
    }
    function _addListenerObject(channel, type, obj) {
      channel._addEL[type].push(obj);
      _startListening(channel);
    }
    function _removeListenerObject(channel, type, obj) {
      channel._addEL[type] = channel._addEL[type].filter(function(o) {
        return o !== obj;
      });
      _stopListening(channel);
    }
    function _startListening(channel) {
      if (!channel._iL && _hasMessageListeners(channel)) {
        var listenerFn = function listenerFn2(msgObj) {
          channel._addEL[msgObj.type].forEach(function(listenerObject) {
            var hundredMsInMicro = 100 * 1e3;
            var minMessageTime = listenerObject.time - hundredMsInMicro;
            if (msgObj.time >= minMessageTime) {
              listenerObject.fn(msgObj.data);
            }
          });
        };
        var time = channel.method.microSeconds();
        if (channel._prepP) {
          channel._prepP.then(function() {
            channel._iL = true;
            channel.method.onMessage(channel._state, listenerFn, time);
          });
        } else {
          channel._iL = true;
          channel.method.onMessage(channel._state, listenerFn, time);
        }
      }
    }
    function _stopListening(channel) {
      if (channel._iL && !_hasMessageListeners(channel)) {
        channel._iL = false;
        var time = channel.method.microSeconds();
        channel.method.onMessage(channel._state, null, time);
      }
    }
  }
});

// ../../node_modules/unload/dist/es/browser.js
function addBrowser(fn) {
  if (typeof WorkerGlobalScope === "function" && self instanceof WorkerGlobalScope) {
    var oldClose = self.close.bind(self);
    self.close = function() {
      fn();
      return oldClose();
    };
  } else {
    if (typeof window.addEventListener !== "function") {
      return;
    }
    window.addEventListener("beforeunload", function() {
      fn();
    }, true);
    window.addEventListener("unload", function() {
      fn();
    }, true);
  }
}
var init_browser = __esm({
  "../../node_modules/unload/dist/es/browser.js"() {
    "use strict";
  }
});

// ../../node_modules/unload/dist/es/node.js
function addNode(fn) {
  process.on("exit", function() {
    return fn();
  });
  process.on("beforeExit", function() {
    return fn().then(function() {
      return process.exit();
    });
  });
  process.on("SIGINT", function() {
    return fn().then(function() {
      return process.exit();
    });
  });
  process.on("uncaughtException", function(err) {
    return fn().then(function() {
      console.trace(err);
      process.exit(101);
    });
  });
}
var init_node = __esm({
  "../../node_modules/unload/dist/es/node.js"() {
    "use strict";
  }
});

// ../../node_modules/unload/dist/es/index.js
var es_exports2 = {};
__export(es_exports2, {
  add: () => add,
  getSize: () => getSize,
  removeAll: () => removeAll,
  runAll: () => runAll
});
function startListening() {
  if (startedListening) {
    return;
  }
  startedListening = true;
  USE_METHOD(runAll);
}
function add(fn) {
  startListening();
  if (typeof fn !== "function") {
    throw new Error("Listener is no function");
  }
  LISTENERS.add(fn);
  var addReturn = {
    remove: function remove() {
      return LISTENERS["delete"](fn);
    },
    run: function run() {
      LISTENERS["delete"](fn);
      return fn();
    }
  };
  return addReturn;
}
function runAll() {
  var promises = [];
  LISTENERS.forEach(function(fn) {
    promises.push(fn());
    LISTENERS["delete"](fn);
  });
  return Promise.all(promises);
}
function removeAll() {
  LISTENERS.clear();
}
function getSize() {
  return LISTENERS.size;
}
var isNode, USE_METHOD, LISTENERS, startedListening;
var init_es2 = __esm({
  "../../node_modules/unload/dist/es/index.js"() {
    "use strict";
    init_browser();
    init_node();
    isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
    USE_METHOD = isNode ? addNode : addBrowser;
    LISTENERS = /* @__PURE__ */ new Set();
    startedListening = false;
  }
});

// ../../node_modules/broadcast-channel/dist/lib/leader-election-util.js
var require_leader_election_util = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/leader-election-util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beLeader = beLeader;
    exports.sendLeaderMessage = sendLeaderMessage;
    var _unload = (init_es2(), __toCommonJS(es_exports2));
    function sendLeaderMessage(leaderElector, action) {
      var msgJson = {
        context: "leader",
        action,
        token: leaderElector.token
      };
      return leaderElector.broadcastChannel.postInternal(msgJson);
    }
    function beLeader(leaderElector) {
      leaderElector.isLeader = true;
      leaderElector._hasLeader = true;
      var unloadFn = (0, _unload.add)(function() {
        return leaderElector.die();
      });
      leaderElector._unl.push(unloadFn);
      var isLeaderListener = function isLeaderListener2(msg) {
        if (msg.context === "leader" && msg.action === "apply") {
          sendLeaderMessage(leaderElector, "tell");
        }
        if (msg.context === "leader" && msg.action === "tell" && !leaderElector._dpLC) {
          leaderElector._dpLC = true;
          leaderElector._dpL();
          sendLeaderMessage(leaderElector, "tell");
        }
      };
      leaderElector.broadcastChannel.addEventListener("internal", isLeaderListener);
      leaderElector._lstns.push(isLeaderListener);
      return sendLeaderMessage(leaderElector, "tell");
    }
  }
});

// ../../node_modules/broadcast-channel/dist/lib/leader-election-web-lock.js
var require_leader_election_web_lock = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/leader-election-web-lock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LeaderElectionWebLock = void 0;
    var _util = require_util();
    var _leaderElectionUtil = require_leader_election_util();
    var LeaderElectionWebLock = exports.LeaderElectionWebLock = function LeaderElectionWebLock2(broadcastChannel, options) {
      var _this = this;
      this.broadcastChannel = broadcastChannel;
      broadcastChannel._befC.push(function() {
        return _this.die();
      });
      this._options = options;
      this.isLeader = false;
      this.isDead = false;
      this.token = (0, _util.randomToken)();
      this._lstns = [];
      this._unl = [];
      this._dpL = function() {
      };
      this._dpLC = false;
      this._wKMC = {};
      this.lN = "pubkey-bc||" + broadcastChannel.method.type + "||" + broadcastChannel.name;
    };
    LeaderElectionWebLock.prototype = {
      hasLeader: function hasLeader() {
        var _this2 = this;
        return navigator.locks.query().then(function(locks) {
          var relevantLocks = locks.held ? locks.held.filter(function(lock) {
            return lock.name === _this2.lN;
          }) : [];
          if (relevantLocks && relevantLocks.length > 0) {
            return true;
          } else {
            return false;
          }
        });
      },
      awaitLeadership: function awaitLeadership() {
        var _this3 = this;
        if (!this._wLMP) {
          this._wKMC.c = new AbortController();
          var returnPromise = new Promise(function(res, rej) {
            _this3._wKMC.res = res;
            _this3._wKMC.rej = rej;
          });
          this._wLMP = new Promise(function(res) {
            navigator.locks.request(_this3.lN, {
              signal: _this3._wKMC.c.signal
            }, function() {
              _this3._wKMC.c = void 0;
              (0, _leaderElectionUtil.beLeader)(_this3);
              res();
              return returnPromise;
            })["catch"](function() {
            });
          });
        }
        return this._wLMP;
      },
      set onduplicate(_fn) {
      },
      die: function die() {
        var _this4 = this;
        this._lstns.forEach(function(listener) {
          return _this4.broadcastChannel.removeEventListener("internal", listener);
        });
        this._lstns = [];
        this._unl.forEach(function(uFn) {
          return uFn.remove();
        });
        this._unl = [];
        if (this.isLeader) {
          this.isLeader = false;
        }
        this.isDead = true;
        if (this._wKMC.res) {
          this._wKMC.res();
        }
        if (this._wKMC.c) {
          this._wKMC.c.abort("LeaderElectionWebLock.die() called");
        }
        return (0, _leaderElectionUtil.sendLeaderMessage)(this, "death");
      }
    };
  }
});

// ../../node_modules/broadcast-channel/dist/lib/leader-election.js
var require_leader_election = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/leader-election.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createLeaderElection = createLeaderElection;
    var _util = require_util();
    var _leaderElectionUtil = require_leader_election_util();
    var _leaderElectionWebLock = require_leader_election_web_lock();
    var LeaderElection = function LeaderElection2(broadcastChannel, options) {
      var _this = this;
      this.broadcastChannel = broadcastChannel;
      this._options = options;
      this.isLeader = false;
      this._hasLeader = false;
      this.isDead = false;
      this.token = (0, _util.randomToken)();
      this._aplQ = _util.PROMISE_RESOLVED_VOID;
      this._aplQC = 0;
      this._unl = [];
      this._lstns = [];
      this._dpL = function() {
      };
      this._dpLC = false;
      var hasLeaderListener = function hasLeaderListener2(msg) {
        if (msg.context === "leader") {
          if (msg.action === "death") {
            _this._hasLeader = false;
          }
          if (msg.action === "tell") {
            _this._hasLeader = true;
          }
        }
      };
      this.broadcastChannel.addEventListener("internal", hasLeaderListener);
      this._lstns.push(hasLeaderListener);
    };
    LeaderElection.prototype = {
      hasLeader: function hasLeader() {
        return Promise.resolve(this._hasLeader);
      },
      /**
       * Returns true if the instance is leader,
       * false if not.
       * @async
       */
      applyOnce: function applyOnce(isFromFallbackInterval) {
        var _this2 = this;
        if (this.isLeader) {
          return (0, _util.sleep)(0, true);
        }
        if (this.isDead) {
          return (0, _util.sleep)(0, false);
        }
        if (this._aplQC > 1) {
          return this._aplQ;
        }
        var applyRun = function applyRun2() {
          if (_this2.isLeader) {
            return _util.PROMISE_RESOLVED_TRUE;
          }
          var stopCriteria = false;
          var stopCriteriaPromiseResolve;
          var stopCriteriaPromise = new Promise(function(res) {
            stopCriteriaPromiseResolve = function stopCriteriaPromiseResolve2() {
              stopCriteria = true;
              res();
            };
          });
          var handleMessage = function handleMessage2(msg) {
            if (msg.context === "leader" && msg.token != _this2.token) {
              if (msg.action === "apply") {
                if (msg.token > _this2.token) {
                  stopCriteriaPromiseResolve();
                }
              }
              if (msg.action === "tell") {
                stopCriteriaPromiseResolve();
                _this2._hasLeader = true;
              }
            }
          };
          _this2.broadcastChannel.addEventListener("internal", handleMessage);
          var waitForAnswerTime = isFromFallbackInterval ? _this2._options.responseTime * 4 : _this2._options.responseTime;
          return (0, _leaderElectionUtil.sendLeaderMessage)(_this2, "apply").then(function() {
            return Promise.race([(0, _util.sleep)(waitForAnswerTime), stopCriteriaPromise.then(function() {
              return Promise.reject(new Error());
            })]);
          }).then(function() {
            return (0, _leaderElectionUtil.sendLeaderMessage)(_this2, "apply");
          }).then(function() {
            return Promise.race([(0, _util.sleep)(waitForAnswerTime), stopCriteriaPromise.then(function() {
              return Promise.reject(new Error());
            })]);
          })["catch"](function() {
          }).then(function() {
            _this2.broadcastChannel.removeEventListener("internal", handleMessage);
            if (!stopCriteria) {
              return (0, _leaderElectionUtil.beLeader)(_this2).then(function() {
                return true;
              });
            } else {
              return false;
            }
          });
        };
        this._aplQC = this._aplQC + 1;
        this._aplQ = this._aplQ.then(function() {
          return applyRun();
        }).then(function() {
          _this2._aplQC = _this2._aplQC - 1;
        });
        return this._aplQ.then(function() {
          return _this2.isLeader;
        });
      },
      awaitLeadership: function awaitLeadership() {
        if (
          /* _awaitLeadershipPromise */
          !this._aLP
        ) {
          this._aLP = _awaitLeadershipOnce(this);
        }
        return this._aLP;
      },
      set onduplicate(fn) {
        this._dpL = fn;
      },
      die: function die() {
        var _this3 = this;
        this._lstns.forEach(function(listener) {
          return _this3.broadcastChannel.removeEventListener("internal", listener);
        });
        this._lstns = [];
        this._unl.forEach(function(uFn) {
          return uFn.remove();
        });
        this._unl = [];
        if (this.isLeader) {
          this._hasLeader = false;
          this.isLeader = false;
        }
        this.isDead = true;
        return (0, _leaderElectionUtil.sendLeaderMessage)(this, "death");
      }
    };
    function _awaitLeadershipOnce(leaderElector) {
      if (leaderElector.isLeader) {
        return _util.PROMISE_RESOLVED_VOID;
      }
      return new Promise(function(res) {
        var resolved = false;
        function finish() {
          if (resolved) {
            return;
          }
          resolved = true;
          leaderElector.broadcastChannel.removeEventListener("internal", whenDeathListener);
          res(true);
        }
        leaderElector.applyOnce().then(function() {
          if (leaderElector.isLeader) {
            finish();
          }
        });
        var tryOnFallBack = function tryOnFallBack2() {
          return (0, _util.sleep)(leaderElector._options.fallbackInterval).then(function() {
            if (leaderElector.isDead || resolved) {
              return;
            }
            if (leaderElector.isLeader) {
              finish();
            } else {
              return leaderElector.applyOnce(true).then(function() {
                if (leaderElector.isLeader) {
                  finish();
                } else {
                  tryOnFallBack2();
                }
              });
            }
          });
        };
        tryOnFallBack();
        var whenDeathListener = function whenDeathListener2(msg) {
          if (msg.context === "leader" && msg.action === "death") {
            leaderElector._hasLeader = false;
            leaderElector.applyOnce().then(function() {
              if (leaderElector.isLeader) {
                finish();
              }
            });
          }
        };
        leaderElector.broadcastChannel.addEventListener("internal", whenDeathListener);
        leaderElector._lstns.push(whenDeathListener);
      });
    }
    function fillOptionsWithDefaults(options, channel) {
      if (!options) options = {};
      options = JSON.parse(JSON.stringify(options));
      if (!options.fallbackInterval) {
        options.fallbackInterval = 3e3;
      }
      if (!options.responseTime) {
        options.responseTime = channel.method.averageResponseTime(channel.options);
      }
      return options;
    }
    function createLeaderElection(channel, options) {
      if (channel._leaderElector) {
        throw new Error("BroadcastChannel already has a leader-elector");
      }
      options = fillOptionsWithDefaults(options, channel);
      var elector = (0, _util.supportsWebLockAPI)() ? new _leaderElectionWebLock.LeaderElectionWebLock(channel, options) : new LeaderElection(channel, options);
      channel._befC.push(function() {
        return elector.die();
      });
      channel._leaderElector = elector;
      return elector;
    }
  }
});

// ../../node_modules/broadcast-channel/dist/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "BroadcastChannel", {
      enumerable: true,
      get: function get() {
        return _broadcastChannel.BroadcastChannel;
      }
    });
    Object.defineProperty(exports, "OPEN_BROADCAST_CHANNELS", {
      enumerable: true,
      get: function get() {
        return _broadcastChannel.OPEN_BROADCAST_CHANNELS;
      }
    });
    Object.defineProperty(exports, "beLeader", {
      enumerable: true,
      get: function get() {
        return _leaderElectionUtil.beLeader;
      }
    });
    Object.defineProperty(exports, "clearNodeFolder", {
      enumerable: true,
      get: function get() {
        return _broadcastChannel.clearNodeFolder;
      }
    });
    Object.defineProperty(exports, "createLeaderElection", {
      enumerable: true,
      get: function get() {
        return _leaderElection.createLeaderElection;
      }
    });
    Object.defineProperty(exports, "enforceOptions", {
      enumerable: true,
      get: function get() {
        return _broadcastChannel.enforceOptions;
      }
    });
    var _broadcastChannel = require_broadcast_channel();
    var _leaderElection = require_leader_election();
    var _leaderElectionUtil = require_leader_election_util();
  }
});

// ../../node_modules/broadcast-channel/dist/lib/index.es5.js
var require_index_es5 = __commonJS({
  "../../node_modules/broadcast-channel/dist/lib/index.es5.js"(exports, module) {
    "use strict";
    var _index = require_lib();
    module.exports = {
      BroadcastChannel: _index.BroadcastChannel,
      createLeaderElection: _index.createLeaderElection,
      clearNodeFolder: _index.clearNodeFolder,
      enforceOptions: _index.enforceOptions,
      beLeader: _index.beLeader
    };
  }
});

// ../core/dist/src/constant.js
var require_constant = __commonJS({
  "../core/dist/src/constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultBroadcastChannelName = exports.NoWriteAccessError = exports.NoReadAccessError = exports.NoAccessError = void 0;
    exports.NoAccessError = "The OriginStorage does not have any read/write access.";
    exports.NoReadAccessError = "The OriginStorage does not have any read access.";
    exports.NoWriteAccessError = "The OriginStorage does not have any write access.";
    exports.DefaultBroadcastChannelName = "origin-storage-broadcast-channel";
  }
});

// ../core/dist/src/originStorage.js
var require_originStorage = __commonJS({
  "../core/dist/src/originStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OriginStorage = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var data_transport_1 = require_dist();
    var broadcast_channel_1 = require_index_es5();
    var localforage_1 = tslib_1.__importDefault(require_localforage());
    var constant_1 = require_constant();
    var OriginStorage2 = class extends data_transport_1.IFrameTransport.IFrame {
      /**
       * 提取 hostname（去除协议）
       */
      extractHostname(origin) {
        if (!origin || origin.trim() === "") {
          return "";
        }
        try {
          const url = new URL(origin);
          return url.hostname + (url.port ? `:${url.port}` : "");
        } catch (_a) {
          const match = origin.match(/\/\/([^\/]+)/);
          return match ? match[1] : origin;
        }
      }
      /**
       * 获取当前 origin 的 hostname
       */
      getCurrentOrigin() {
        if (typeof window !== "undefined") {
          const storageOrigin = window.STORAGE_ORIGIN;
          if (storageOrigin) {
            return this.extractHostname(storageOrigin);
          }
          return window.location.hostname + (window.location.port ? `:${window.location.port}` : "");
        }
        return "";
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
            this.emit({ name: "change", respond: false }, message);
          };
        }
        this.connect();
      }
      connect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!this._read && !this._write) {
            throw new Error(constant_1.NoAccessError);
          }
          const config = yield this.emit("getConfig");
          this._localforage = localforage_1.default.createInstance(config);
          yield this.emit("connect");
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
            if (false) {
              console.error(constant_1.NoReadAccessError);
            }
            return { error: constant_1.NoReadAccessError };
          }
          try {
            const stored = yield this._localforage.getItem(options.key);
            if (false) {
              console.log("[OriginStorage] getItem - stored:", stored, "key:", options.key);
            }
            if (!stored) {
              return { error: "Data not found" };
            }
            if (typeof stored !== "object" || !("origin" in stored) || !("timestamp" in stored) || !("value" in stored)) {
              if (false) {
                console.error("[OriginStorage] getItem - Invalid data format:", stored);
              }
              return { error: "Invalid data format: missing origin or timestamp" };
            }
            const filterOrigin = options.filterOrigin || this.getCurrentOrigin();
            if (stored.origin !== filterOrigin) {
              return { error: "Data does not belong to the specified origin" };
            }
            if (options.includeMetadata) {
              return {
                value: stored.value,
                origin: stored.origin,
                timestamp: stored.timestamp
              };
            }
            return { value: stored.value };
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      setItem(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          var _a;
          if (!this._write) {
            if (false) {
              console.error(constant_1.NoWriteAccessError);
            }
            return { error: constant_1.NoWriteAccessError };
          }
          try {
            const origin = this.getCurrentOrigin();
            if (false) {
              console.log("[OriginStorage] setItem - origin:", origin, "key:", options.key);
            }
            const storedData = {
              value: options.value,
              origin,
              timestamp: Date.now()
            };
            if (false) {
              console.log("[OriginStorage] setItem - storedData:", storedData);
            }
            yield this._localforage.setItem(options.key, storedData);
            (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
              key: options.key,
              origin,
              timestamp: storedData.timestamp
            });
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      removeItem(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          var _a;
          if (!this._write) {
            if (false) {
              console.error(constant_1.NoWriteAccessError);
            }
            return { error: constant_1.NoWriteAccessError };
          }
          try {
            const stored = yield this._localforage.getItem(options.key);
            yield this._localforage.removeItem(options.key);
            (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
              key: options.key,
              origin: stored === null || stored === void 0 ? void 0 : stored.origin,
              timestamp: stored === null || stored === void 0 ? void 0 : stored.timestamp
            });
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      clear(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          var _a;
          if (!this._write) {
            if (false) {
              console.error(constant_1.NoWriteAccessError);
            }
            return { error: constant_1.NoWriteAccessError };
          }
          try {
            const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
            const allKeys = yield this._localforage.keys();
            const keysToDelete = [];
            for (const key of allKeys) {
              const stored = yield this._localforage.getItem(key);
              if (stored && stored.origin === filterOrigin) {
                keysToDelete.push(key);
              }
            }
            for (const key of keysToDelete) {
              yield this._localforage.removeItem(key);
            }
            if (keysToDelete.length > 0) {
              (_a = this._broadcastChannel) === null || _a === void 0 ? void 0 : _a.postMessage({
                key: null,
                origin: filterOrigin
              });
            }
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      length(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!this._read) {
            if (false) {
              console.error(constant_1.NoReadAccessError);
            }
            return { error: constant_1.NoReadAccessError };
          }
          try {
            const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
            const allKeys = yield this._localforage.keys();
            let count = 0;
            for (const key of allKeys) {
              const stored = yield this._localforage.getItem(key);
              if (stored && stored.origin === filterOrigin) {
                count++;
              }
            }
            return { length: count };
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      key(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!this._read) {
            if (false) {
              console.error(constant_1.NoReadAccessError);
            }
            return { error: constant_1.NoReadAccessError };
          }
          try {
            const filterOrigin = options.filterOrigin || this.getCurrentOrigin();
            const allKeys = yield this._localforage.keys();
            const filteredKeys = [];
            for (const key2 of allKeys) {
              const stored = yield this._localforage.getItem(key2);
              if (stored && stored.origin === filterOrigin) {
                filteredKeys.push(key2);
              }
            }
            const key = filteredKeys[options.index] || null;
            return { key };
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
      keys(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          if (!this._read) {
            if (false) {
              console.error(constant_1.NoReadAccessError);
            }
            return { error: constant_1.NoReadAccessError };
          }
          try {
            const filterOrigin = (options === null || options === void 0 ? void 0 : options.filterOrigin) || this.getCurrentOrigin();
            const allKeys = yield this._localforage.keys();
            const filteredKeys = [];
            for (const key of allKeys) {
              const stored = yield this._localforage.getItem(key);
              if (stored && stored.origin === filterOrigin) {
                filteredKeys.push(key);
              }
            }
            return { keys: filteredKeys };
          } catch (e) {
            if (typeof (e === null || e === void 0 ? void 0 : e.toString) === "function") {
              return { error: e.toString() };
            }
            if (false) {
              throw e;
            }
          }
        });
      }
    };
    exports.OriginStorage = OriginStorage2;
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", []),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "broadcastChanges", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "getItem", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "setItem", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "removeItem", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "clear", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "length", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "key", null);
    tslib_1.__decorate([
      data_transport_1.listen,
      tslib_1.__metadata("design:type", Function),
      tslib_1.__metadata("design:paramtypes", [Object]),
      tslib_1.__metadata("design:returntype", Promise)
    ], OriginStorage2.prototype, "keys", null);
  }
});

// ../core/dist/src/interface.js
var require_interface = __commonJS({
  "../core/dist/src/interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../core/dist/index.js
var require_dist2 = __commonJS({
  "../core/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.localforage = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var localforage_1 = tslib_1.__importDefault(require_localforage());
    exports.localforage = localforage_1.default;
    tslib_1.__exportStar(require_originStorageClient(), exports);
    tslib_1.__exportStar(require_originStorage(), exports);
    tslib_1.__exportStar(require_interface(), exports);
  }
});

// src/client.ts
var import_core = __toESM(require_dist2());
var AgentLinkClient = class {
  constructor(options) {
    this.serverUrl = options.serverUrl;
    const storageUrl = options.serverUrl.endsWith("/storage") ? options.serverUrl : `${options.serverUrl.replace(/\/$/, "")}/storage`;
    this.client = new import_core.OriginStorageClient({
      uri: storageUrl,
      storageOptions: options.storageOptions
    });
  }
  /**
   * 获取当前 origin 的 hostname
   */
  getCurrentHostname() {
    if (typeof window !== "undefined") {
      return window.location.hostname + (window.location.port ? `:${window.location.port}` : "");
    }
    return "";
  }
  /**
   * 连接成功回调
   */
  onConnect(callback) {
    return this.client.onConnect(callback);
  }
  /**
   * 监听存储变更
   */
  async onChange(callback) {
    return this.client.onChange(callback);
  }
  /**
   * 获取指定 key 的值
   * @param key 数据键
   * @param options 选项
   * @param options.filterOrigin 指定要读取的域名（默认：当前域名）
   * @param options.includeMetadata 是否包含元数据（origin 和 timestamp）
   */
  async getItem(key, options) {
    const filterOrigin = options?.filterOrigin || this.getCurrentHostname();
    return this.client.getItem(key, { filterOrigin, includeMetadata: options?.includeMetadata });
  }
  /**
   * 设置指定 key 的值
   */
  async setItem(key, value) {
    return this.client.setItem(key, value);
  }
  /**
   * 删除指定 key
   */
  async removeItem(key) {
    return this.client.removeItem(key);
  }
  /**
   * 清空所有数据
   * @param filterOrigin 指定要清除的域名（默认：当前域名）
   */
  async clear(filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.clear(origin);
  }
  /**
   * 获取存储项数量
   * @param filterOrigin 指定要统计的域名（默认：当前域名）
   */
  async length(filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.length(origin);
  }
  /**
   * 获取指定索引的 key 名称
   * @param index 索引
   * @param filterOrigin 指定要查询的域名（默认：当前域名）
   */
  async key(index, filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.key(index, origin);
  }
  /**
   * 获取所有 key 的数组
   * @param filterOrigin 指定要查询的域名（默认：当前域名）
   */
  async keys(filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.keys(origin);
  }
  /**
   * 获取包含元数据的数据项
   * @param key 数据键
   * @param filterOrigin 指定要读取的域名（默认：当前域名）
   * @returns 包含 value、origin 和 timestamp 的对象
   */
  async getItemWithMetadata(key, filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    return this.client.getItem(key, { filterOrigin: origin, includeMetadata: true });
  }
  /**
   * 获取所有数据项（支持过滤）
   * @param filterOrigin 指定要读取的域名（默认：当前域名）
   * @returns 包含所有数据的对象，key 为数据键，value 为包含 value、origin 和 timestamp 的对象
   */
  async getAllItems(filterOrigin) {
    const origin = filterOrigin || this.getCurrentHostname();
    const keys = await this.keys(origin);
    const result = {};
    for (const key of keys) {
      try {
        const item = await this.getItemWithMetadata(key, origin);
        result[key] = item;
      } catch (error) {
        console.warn(`Failed to get item ${key}:`, error);
      }
    }
    return result;
  }
  /**
   * 获取白名单信息
   * @param includeAll 如果为true，返回所有白名单；如果为false，只返回当前域名的白名单信息
   */
  async getWhitelistInfo(includeAll = false) {
    const baseUrl = this.serverUrl.replace("/storage", "");
    const url = `${baseUrl}/api/whitelist/info${includeAll ? "?includeAll=true" : ""}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Origin": typeof window !== "undefined" ? window.location.origin : ""
      }
    });
    if (!response.ok) {
      if (response.status === 403) {
        const data = await response.json();
        throw new Error(data.error || "\u57DF\u540D\u4E0D\u5728\u767D\u540D\u5355\u4E2D");
      }
      throw new Error(`\u83B7\u53D6\u767D\u540D\u5355\u4FE1\u606F\u5931\u8D25: ${response.statusText}`);
    }
    return await response.json();
  }
};

// src/index.ts
var import_core2 = __toESM(require_dist2());
var export_OriginStorage = import_core2.OriginStorage;
export {
  AgentLinkClient,
  export_OriginStorage as OriginStorage
};
/*! Bundled license information:

localforage/dist/localforage.js:
  (*!
      localForage -- Offline Storage, Improved
      Version 1.10.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  *)
*/
//# sourceMappingURL=index.mjs.map