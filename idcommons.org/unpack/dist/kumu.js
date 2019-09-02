"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var slugify_1 = __importDefault(require("slugify"));
var uuid_1 = __importDefault(require("uuid"));
var kumu_slugify = function (x) {
    return slugify_1.default(x, { lower: true });
};
// --------------------------------------------------------------------------
// Implementation
var SimpleKumuEntity = /** @class */ (function () {
    function SimpleKumuEntity(src, model) {
        this.guid = uuid_1.default.v4();
        this.model = model;
        this.slugmap = {};
        for (var key in src) {
            var s = kumu_slugify(key);
            var val = '' + src[key];
            this.slugmap[s] = val;
        }
    }
    SimpleKumuEntity.prototype.mapFieldsExcept = function (elt, exclusion) {
        var result = new Map();
        var ex = new Set();
        for (var _i = 0, exclusion_1 = exclusion; _i < exclusion_1.length; _i++) {
            var key = exclusion_1[_i];
            ex.add(kumu_slugify(key));
        }
        for (var key in elt) {
            var slug = kumu_slugify(key);
            if (!ex.has(slug)) {
                var value = elt[key];
                if (value != '')
                    result[key] = value;
            }
        }
        return result;
    };
    return SimpleKumuEntity;
}());
exports.SimpleKumuEntity = SimpleKumuEntity;
var SimpleKumuElement = /** @class */ (function (_super) {
    __extends(SimpleKumuElement, _super);
    function SimpleKumuElement(elt, model) {
        var _this = _super.call(this, elt, model) || this;
        _this.label = _this.slugmap.label || model.next_label();
        _this.slug = kumu_slugify(_this.label);
        _this.type = _this.model.encounterElementType(_this.slugmap.type);
        _this.description = _this.slugmap.description || "";
        _this.tags = {};
        _this.inbound = {};
        _this.outbound = {};
        _this.fields = _this.mapFieldsExcept(elt, ['Label', 'Description', 'Type']);
        _this.model.encounterElement(_this);
        return _this;
    }
    SimpleKumuElement.prototype.addOutbound = function (conn) {
        this.outbound[conn.guid] = conn;
    };
    SimpleKumuElement.prototype.addInbound = function (conn) {
        this.inbound[conn.guid] = conn;
    };
    return SimpleKumuElement;
}(SimpleKumuEntity));
exports.SimpleKumuElement = SimpleKumuElement;
var SimpleKumuConnection = /** @class */ (function (_super) {
    __extends(SimpleKumuConnection, _super);
    function SimpleKumuConnection(def, model) {
        var _this = _super.call(this, def, model) || this;
        _this.type = _this.model.encounterConnectionType(_this.slugmap.type);
        _this.description = _this.slugmap.description || "";
        _this.fields = _this.mapFieldsExcept(def, ['Label', 'Description', 'Type']);
        _this.from = _this.locateFrom(def);
        _this.from.addOutbound(_this);
        _this.to = _this.locateTo(def);
        _this.to.addInbound(_this);
        return _this;
    }
    SimpleKumuConnection.prototype.locateFrom = function (def) {
        if (!def.From)
            throw "Malformed connection, missing From field on def";
        var result = this.model.locateElementByLabel(def.From);
        if (!result)
            throw "Can not find From element" + kumu_slugify(def.From) + " with connection " + JSON.stringify(def);
        return result;
    };
    SimpleKumuConnection.prototype.locateTo = function (def) {
        if (!def.To)
            throw "Malformed connection, missing To field on def";
        var result = this.model.locateElementByLabel(def.To);
        if (!result)
            throw "Can not find To element" + kumu_slugify(def.To) + " with connection " + JSON.stringify(def);
        return result;
    };
    return SimpleKumuConnection;
}(SimpleKumuEntity));
exports.SimpleKumuConnection = SimpleKumuConnection;
// --------------------------------------------------------------------------
//
var SimpleKumuType = /** @class */ (function (_super) {
    __extends(SimpleKumuType, _super);
    function SimpleKumuType(type, model) {
        var _this = _super.call(this, {}, model) || this;
        var p = type.split("/");
        _this.depth = p.length;
        _this.parts = [];
        for (var idx in p)
            _this.parts[idx] = kumu_slugify(p[idx]);
        _this.name = _this.parts[_this.depth - 1];
        return _this;
    }
    return SimpleKumuType;
}(SimpleKumuEntity));
exports.SimpleKumuType = SimpleKumuType;
var SimpleKumuElementType = /** @class */ (function (_super) {
    __extends(SimpleKumuElementType, _super);
    function SimpleKumuElementType(type, model) {
        var _this = _super.call(this, type, model) || this;
        if (_this.depth > 1) {
            var parentType = _this.parts.slice(0, _this.depth - 1).join("/");
            _this.parent = _this.model.encounterElementType(parentType);
        }
        return _this;
    }
    return SimpleKumuElementType;
}(SimpleKumuType));
exports.SimpleKumuElementType = SimpleKumuElementType;
var SimpleKumuConnectionType = /** @class */ (function (_super) {
    __extends(SimpleKumuConnectionType, _super);
    function SimpleKumuConnectionType(type, model) {
        var _this = _super.call(this, type, model) || this;
        if (_this.depth > 1) {
            var parentType = _this.parts.slice(0, _this.depth - 1).join("/");
            _this.parent = _this.model.encounterConnectionType(parentType);
        }
        return _this;
    }
    return SimpleKumuConnectionType;
}(SimpleKumuType));
exports.SimpleKumuConnectionType = SimpleKumuConnectionType;
// --------------------------------------------------------------------------
var KumuModel = /** @class */ (function () {
    function KumuModel() {
        this.index = 0;
        this.elements = {};
        this.elementTypes = {};
        this.connectionTypes = {};
        this.defaultConnectionType = this.encounterConnectionType('default');
        this.defaultElementType = this.encounterElementType('default');
    }
    KumuModel.prototype.next_label = function () {
        this.index = this.index + 1;
        return 'unlabeled-' + this.index;
    };
    KumuModel.prototype.encounterElement = function (elt) {
        this.elements[elt.slug] = elt;
    };
    KumuModel.prototype.locateElementByLabel = function (label) {
        var result = this.elements[kumu_slugify(label)];
        if (!result) {
            console.log("FAILED TO FIND", label, "=>", kumu_slugify(label));
            for (var x in this.elements)
                console.log(x);
        }
        return result;
    };
    KumuModel.prototype.encounterElementType = function (type) {
        if (!type)
            return this.defaultElementType;
        if (!this.elementTypes[type])
            this.elementTypes[type] = new SimpleKumuElementType(type, this);
        return this.elementTypes[type];
    };
    KumuModel.prototype.encounterConnectionType = function (type) {
        if (!type)
            return this.defaultConnectionType;
        if (!this.connectionTypes[type])
            this.connectionTypes[type] = new SimpleKumuConnectionType(type, this);
        return this.connectionTypes[type];
    };
    return KumuModel;
}());
exports.KumuModel = KumuModel;
// --------------------------------------------------------------------------
function kumuloader(eltfile, connfile) {
    return __awaiter(this, void 0, void 0, function () {
        var elts, _a, _b, conns, _c, _d, model, _i, elts_1, e, _e, conns_1, c;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, fs_extra_1.default.readFile(eltfile)];
                case 1:
                    elts = _b.apply(_a, [_f.sent()]);
                    _d = (_c = JSON).parse;
                    return [4 /*yield*/, fs_extra_1.default.readFile(connfile)];
                case 2:
                    conns = _d.apply(_c, [_f.sent()]);
                    model = new KumuModel();
                    console.log("Building Elements");
                    for (_i = 0, elts_1 = elts; _i < elts_1.length; _i++) {
                        e = elts_1[_i];
                        new SimpleKumuElement(e, model);
                    }
                    console.log("Building Connections");
                    for (_e = 0, conns_1 = conns; _e < conns_1.length; _e++) {
                        c = conns_1[_e];
                        new SimpleKumuConnection(c, model);
                    }
                    return [2 /*return*/, model];
            }
        });
    });
}
exports.kumuloader = kumuloader;
//# sourceMappingURL=kumu.js.map