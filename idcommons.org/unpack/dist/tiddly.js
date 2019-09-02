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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var uuid_1 = __importDefault(require("uuid"));
var slugify_1 = __importDefault(require("slugify"));
var path_1 = __importDefault(require("path"));
exports.TIDDLERTYPE = "text/vnd.tiddlywiki";
// --------------------------------------------------------------------------
// Impelementation
var SimpleTiddlyElement = /** @class */ (function () {
    function SimpleTiddlyElement(base) {
        this.guid = uuid_1.default.v4();
        this.base = base;
    }
    return SimpleTiddlyElement;
}());
exports.SimpleTiddlyElement = SimpleTiddlyElement;
var SimpleTiddler = /** @class */ (function (_super) {
    __extends(SimpleTiddler, _super);
    function SimpleTiddler(data, base) {
        var _this = _super.call(this, base) || this;
        _this.title = data.title || "untitled";
        _this.created = data.created || '';
        _this.modified = data.modified || '';
        _this.type = data.type || exports.TIDDLERTYPE;
        _this.guid = data.guid || _this.guid;
        return _this;
    }
    SimpleTiddler.prototype.tiddlerdir = function () {
        return this.base.path;
    };
    SimpleTiddler.prototype.tiddlerfile = function () {
        var filepart = slugify_1.default(this.title) + ".tid";
        return path_1.default.join(this.tiddlerdir(), filepart);
    };
    SimpleTiddler.prototype.tiddlerdata = function () {
        return "" +
            "created:" + this.created + "\n" +
            "modified:" + this.modified + "\n" +
            "title:" + this.title + "\n" +
            "type:" + this.type + "\n";
    };
    return SimpleTiddler;
}(SimpleTiddlyElement));
exports.SimpleTiddler = SimpleTiddler;
var SimpleNodeTiddler = /** @class */ (function (_super) {
    __extends(SimpleNodeTiddler, _super);
    function SimpleNodeTiddler(data, base) {
        var _this = _super.call(this, data, base) || this;
        _this.fields = data.fields || new Map();
        _this.tmap_id = _this.fields['tmap.id'] || '';
        _this.tmap_edges = _this.fields['tmap.edges'] || '';
        _this.element_type = _this.fields['element.type'] || undefined;
        _this.wiki_text = data.text || "";
        _this.sorted_keys = [];
        for (var k in _this.fields)
            _this.sorted_keys.push(k);
        _this.sorted_keys.sort();
        return _this;
    }
    SimpleNodeTiddler.prototype.tiddlerdir = function () {
        var typepart = this.fields['element.type'];
        if (!typepart)
            return this.base.nodes;
        else
            return path_1.default.join(this.base.nodes, typepart);
    };
    SimpleNodeTiddler.prototype.tiddlerdata = function () {
        var field_data = "";
        for (var _i = 0, _a = this.sorted_keys; _i < _a.length; _i++) {
            var k = _a[_i];
            field_data = field_data + k + ":" + this.fields[k] + "\n";
        }
        return _super.prototype.tiddlerdata.call(this) + field_data + "\n" + this.wiki_text;
    };
    return SimpleNodeTiddler;
}(SimpleTiddler));
exports.SimpleNodeTiddler = SimpleNodeTiddler;
var NodeTypeTiddler = /** @class */ (function (_super) {
    __extends(NodeTypeTiddler, _super);
    function NodeTypeTiddler(parts, base) {
        var _this = _super.call(this, {
            title: "$:/plugins/felixhayashi/tiddlymap/graph/nodeTypes/" + parts.join("/")
        }, base) || this;
        _this.parts = parts;
        _this.slugchain = [];
        var len = _this.parts.length;
        for (var idx in parts)
            _this.slugchain[idx] = slugify_1.default(parts[idx]);
        if (len == 1) {
            _this.filepart = _this.slugchain[0];
            _this.dirchain = undefined;
        }
        else {
            _this.filepart = _this.slugchain[len - 1];
            _this.dirchain = _this.slugchain.slice(0, len - 1);
        }
        _this.scope = '[field:element.type[' + _this.filepart + ']]';
        _this.style = '{"color":{"border":"' + _this.randomRGBA() + '","background":"' + _this.randomRGBA() + '"}}';
        return _this;
    }
    NodeTypeTiddler.prototype.tiddlerdata = function () {
        return _super.prototype.tiddlerdata.call(this) +
            "scope: " + this.scope + "\n" +
            "style: " + this.style + "\n";
    };
    NodeTypeTiddler.prototype.randomRGBA = function () {
        return 'rgba('
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ')';
    };
    NodeTypeTiddler.prototype.tiddlerdir = function () {
        if (this.dirchain)
            return path_1.default.join(this.base.mapNodeTypes, this.dirchain.join("/"));
        else
            return this.base.mapNodeTypes;
    };
    NodeTypeTiddler.prototype.tiddlerfile = function () {
        return path_1.default.join(this.tiddlerdir(), this.filepart + ".tid");
    };
    return NodeTypeTiddler;
}(SimpleTiddler));
exports.NodeTypeTiddler = NodeTypeTiddler;
var EdgeTypeTiddler = /** @class */ (function (_super) {
    __extends(EdgeTypeTiddler, _super);
    function EdgeTypeTiddler(parts, base) {
        var _this = _super.call(this, {
            title: "$:/plugins/felixhayashi/tiddlymap/graph/edgeTypes/" + parts.join("/")
        }, base) || this;
        _this.parts = parts;
        _this.slugchain = [];
        var len = _this.parts.length;
        for (var idx in parts)
            _this.slugchain[idx] = slugify_1.default(parts[idx]);
        if (len == 1) {
            _this.filepart = _this.slugchain[0];
            _this.dirchain = undefined;
        }
        else {
            _this.filepart = _this.slugchain[len - 1];
            _this.dirchain = _this.slugchain.slice(0, len - 1);
        }
        _this.style = '{"color":{"color":"' + _this.randomRGBA() + '"},"width":' + Math.round(1 + 15 * Math.random()) + '}';
        return _this;
    }
    EdgeTypeTiddler.prototype.tiddlerdata = function () {
        return _super.prototype.tiddlerdata.call(this) +
            "style: " + this.style + "\n";
    };
    EdgeTypeTiddler.prototype.randomRGBA = function () {
        return 'rgba('
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ','
            + Math.round(256 * Math.random()) + ')';
    };
    EdgeTypeTiddler.prototype.tiddlerdir = function () {
        if (this.dirchain)
            return path_1.default.join(this.base.mapEdgeTypes, this.dirchain.join("/"));
        else
            return this.base.mapEdgeTypes;
    };
    EdgeTypeTiddler.prototype.tiddlerfile = function () {
        return path_1.default.join(this.tiddlerdir(), this.filepart + ".tid");
    };
    return EdgeTypeTiddler;
}(SimpleTiddler));
exports.EdgeTypeTiddler = EdgeTypeTiddler;
var SimpleTiddlyMap = /** @class */ (function () {
    function SimpleTiddlyMap(name) {
        this.name = name;
        this.nodes = new Set();
        this.edges = new Set();
    }
    return SimpleTiddlyMap;
}());
exports.SimpleTiddlyMap = SimpleTiddlyMap;
var TiddlerViewFiles = /** @class */ (function (_super) {
    __extends(TiddlerViewFiles, _super);
    function TiddlerViewFiles(def, base) {
        var _this = _super.call(this, base) || this;
        _this.name = def.name;
        _this.viewbase = base.ensurePath(base.mapViews, def.name);
        _this.tiddler = path_1.default.join(_this.viewbase, "tiddler.tid");
        _this.edges = path_1.default.join(_this.viewbase, "edges.tid");
        _this.nodes = path_1.default.join(_this.viewbase, "nodes.tid");
        _this.layout = path_1.default.join(_this.viewbase, "layout.tid");
        _this.edgeFilter = '';
        for (var e in def.edges) {
            //this.edgeFilter += "[field:tmap.id["+e+"]] "
        }
        _this.nodeFilter = '';
        var idx = 0.0;
        var radius = 3000;
        var ld = {};
        def.nodes.forEach(function (val) {
            _this.nodeFilter += "[field:tmap.id[" + val + "]] ";
            ld[val] = { x: radius * Math.sin(idx), y: radius * Math.cos(idx) };
            idx = idx + (3 * Math.random());
        });
        _this.layoutData = JSON.stringify(ld, null, 3);
        return _this;
    }
    TiddlerViewFiles.prototype.tiddlerdata = function () {
        return "" +
            "id:" + this.guid + "\n" +
            "isview:" + true + "\n" +
            "title: $:/plugins/felixhayashi/tiddlymap/graph/views/" + this.name + "\n" +
            "\n";
    };
    TiddlerViewFiles.prototype.edgedata = function () {
        return "" +
            "filter:" + this.edgeFilter + "\n" +
            "title: $:/plugins/felixhayashi/tiddlymap/graph/views/" + this.name + "/filter/edges\n" +
            "\n";
    };
    TiddlerViewFiles.prototype.nodedata = function () {
        return "" +
            "type: text/vnd.tiddlywiki" + "\n" +
            "filter:" + this.nodeFilter + "\n" +
            "title: $:/plugins/felixhayashi/tiddlymap/graph/views/" + this.name + "/filter/nodes\n" +
            "\n";
    };
    TiddlerViewFiles.prototype.layoutdata = function () {
        return "" +
            "type: text/vnd.tiddlywiki" + "\n" +
            "title: $:/plugins/felixhayashi/tiddlymap/graph/views/" + this.name + "/map\n" +
            "\n" + this.layoutData + "\n";
    };
    return TiddlerViewFiles;
}(SimpleTiddlyElement));
exports.TiddlerViewFiles = TiddlerViewFiles;
// --------------------------------------------------------------------------
var SimpleTiddlerFileBase = /** @class */ (function () {
    function SimpleTiddlerFileBase(path) {
        this.path = this.ensurePath(path);
        this.nodes = this.ensurePath(path, "nodes");
        this.system = this.ensurePath(path, "system");
        this.templates = this.ensurePath(path, "templates");
        var mapsDir = this.ensurePath(path, "maps");
        this.mapViews = this.ensurePath(mapsDir, "views");
        this.mapEdgeTypes = this.ensurePath(mapsDir, "edgeTypes");
        this.mapNodeTypes = this.ensurePath(mapsDir, "nodeTypes");
    }
    SimpleTiddlerFileBase.prototype.ensurePath = function (base, dir) {
        // make sure this exists
        var path = base;
        if (dir)
            path = base + "/" + dir;
        fs_extra_1.default.ensureDirSync(path);
        return path;
    };
    SimpleTiddlerFileBase.prototype.createNodeTiddler = function (data) {
        var result = new SimpleNodeTiddler(data, this);
        //console.log("Node Tiddler:",result.tiddlerfile())
        return result;
    };
    SimpleTiddlerFileBase.prototype.createEdgeTypeTiddler = function (parts) {
        var result = new EdgeTypeTiddler(parts, this);
        return result;
    };
    SimpleTiddlerFileBase.prototype.createNodeTypeTiddler = function (parts) {
        var result = new NodeTypeTiddler(parts, this);
        return result;
    };
    return SimpleTiddlerFileBase;
}());
exports.SimpleTiddlerFileBase = SimpleTiddlerFileBase;
// --------------------------------------------------------------------------
function tiddlyloader(dir) {
    var base = new SimpleTiddlerFileBase(dir);
    return base;
}
exports.tiddlyloader = tiddlyloader;
//# sourceMappingURL=tiddly.js.map