"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
function tiddlerFilePath(base, fname) {
    // use appropriate path librarry
    return base + "/" + fname + ".tid";
}
function ensurePath(base, dir) {
    // make sure this exists
    var path = base;
    if (dir)
        path = base + "/" + dir;
    fs_extra_1.default.ensureDir(path);
    return path;
}
var TiddlerViewFiles = /** @class */ (function () {
    function TiddlerViewFiles(path) {
        this.tiddler = tiddlerFilePath(path, "tiddler");
        this.edges = tiddlerFilePath(path, "edges");
        this.nodes = tiddlerFilePath(path, "nodes");
        this.layout = tiddlerFilePath(path, "layout");
    }
    return TiddlerViewFiles;
}());
exports.TiddlerViewFiles = TiddlerViewFiles;
var TiddlerMapFileBase = /** @class */ (function () {
    function TiddlerMapFileBase(path) {
        this.path = ensurePath(path);
        this.edgeTypes = ensurePath(path, "edgeTypes");
        this.nodeTypes = ensurePath(path, "nodeTypes");
        this.views = ensurePath(path, "views");
        this.viewMap = {};
    }
    TiddlerMapFileBase.prototype.viewFiles = function (key) {
        if (!this.viewMap[key])
            this.viewMap[key] = new TiddlerViewFiles(ensurePath(this.views, key));
        return this.viewMap[key];
    };
    TiddlerMapFileBase.prototype.pathForElementType = function (elt) {
        return tiddlerFilePath(this.nodeTypes, elt.tiddlerfile);
    };
    TiddlerMapFileBase.prototype.pathForConnectionType = function (elt) {
        return tiddlerFilePath(this.edgeTypes, elt.tiddlerfile);
    };
    return TiddlerMapFileBase;
}());
exports.TiddlerMapFileBase = TiddlerMapFileBase;
var TiddlerFileBase = /** @class */ (function () {
    function TiddlerFileBase(path) {
        this.path = ensurePath(path);
        this.system = ensurePath(path, "system");
        this.templates = ensurePath(path, "templates");
        this.maps = new TiddlerMapFileBase(ensurePath(path, "maps"));
    }
    TiddlerFileBase.prototype.pathForElement = function (elt) {
        return tiddlerFilePath(ensurePath(this.path, elt.type.title), elt.label);
    };
    return TiddlerFileBase;
}());
exports.TiddlerFileBase = TiddlerFileBase;
//# sourceMappingURL=fsutil.js.map