"use strict";
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
var fs_extra_1 = __importDefault(require("fs-extra"));
var kumu_1 = require("./kumu");
var tiddly_1 = require("./tiddly");
var tiddly_2 = require("./tiddly");
function createNodeTiddlerFromElement(elt, ctx) {
    var edgemap = {};
    for (var o in elt.outbound) {
        var c = elt.outbound[o];
        edgemap[o] = {
            to: c.to.guid,
            type: c.type.name
        };
    }
    var fields = new Map();
    fields['tags'] = elt.tags;
    fields['element.type'] = elt.type.name;
    fields['tmap.id'] = elt.guid;
    fields['tmap.edges'] = JSON.stringify(edgemap);
    var result = ctx.tiddly.createNodeTiddler({
        title: elt.label,
        fields: fields,
        text: elt.description
    });
    return result;
}
function createEdgeTypeTiddlerFromConnectionType(type, ctx) {
    var result = ctx.tiddly.createEdgeTypeTiddler(type.parts);
    return result;
}
function createNodeTypeTiddlerFromElementType(type, ctx) {
    var result = ctx.tiddly.createNodeTypeTiddler(type.parts);
    return result;
}
function writeMap(map, ctx) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = new tiddly_2.TiddlerViewFiles(map, ctx.tiddly);
                    console.log("Writing View Tiddler:", files.tiddler);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(files.tiddler, files.tiddlerdata())];
                case 1:
                    _a.sent();
                    console.log("Writing View Tiddler:", files.edges);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(files.edges, files.edgedata())];
                case 2:
                    _a.sent();
                    console.log("Writing View Tiddler:", files.nodes);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(files.nodes, files.nodedata())];
                case 3:
                    _a.sent();
                    console.log("Writing View Tiddler:", files.layout);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(files.layout, files.layoutdata())];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function convert(eltfile, connfile, filebase) {
    return __awaiter(this, void 0, void 0, function () {
        var model, tiddly, ctx, map, map2, map3, mapmap, nodes, slug, tiddler, elt, tname, edgeTypes, slug, tiddler, nodeTypes, slug, tiddler, _i, nodes_1, node, dir, path, data, _a, edgeTypes_1, type, dir, path, data, _b, nodeTypes_1, type, dir, path, data, _c, _d, _e, x;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.log("Load Kumu");
                    return [4 /*yield*/, kumu_1.kumuloader(eltfile, connfile)];
                case 1:
                    model = _f.sent();
                    console.log("Load Tiddly");
                    return [4 /*yield*/, tiddly_1.tiddlyloader(filebase)];
                case 2:
                    tiddly = _f.sent();
                    ctx = { model: model, tiddly: tiddly };
                    map = new tiddly_2.SimpleTiddlyMap("Everything");
                    map2 = new tiddly_2.SimpleTiddlyMap("Nothing");
                    map3 = new tiddly_2.SimpleTiddlyMap("Something");
                    mapmap = new Map();
                    console.log("Convert Kumu Elements -> Tiddlers");
                    nodes = [];
                    for (slug in model.elements) {
                        tiddler = createNodeTiddlerFromElement(model.elements[slug], ctx);
                        nodes.push(tiddler);
                        map.nodes.add(tiddler.tmap_id);
                        if (tiddler.tmap_id[4] == '3')
                            map3.nodes.add(tiddler.tmap_id);
                        elt = model.elements[slug];
                        tname = elt.type.name;
                        if (!mapmap[tname])
                            mapmap[tname] = new tiddly_2.SimpleTiddlyMap(tname);
                        mapmap[tname].nodes.add(tiddler.tmap_id);
                    }
                    console.log("Convert Kumu Connection Types -> Edge Type Tiddlers");
                    edgeTypes = [];
                    for (slug in model.connectionTypes) {
                        tiddler = createEdgeTypeTiddlerFromConnectionType(model.connectionTypes[slug], ctx);
                        edgeTypes.push(tiddler);
                    }
                    console.log("Convert Kumu Element Types -> Node Type Tiddlers");
                    nodeTypes = [];
                    for (slug in model.elementTypes) {
                        tiddler = createNodeTypeTiddlerFromElementType(model.elementTypes[slug], ctx);
                        nodeTypes.push(tiddler);
                    }
                    console.log("Writing Tiddlers");
                    _i = 0, nodes_1 = nodes;
                    _f.label = 3;
                case 3:
                    if (!(_i < nodes_1.length)) return [3 /*break*/, 7];
                    node = nodes_1[_i];
                    dir = node.tiddlerdir();
                    path = node.tiddlerfile();
                    data = node.tiddlerdata();
                    return [4 /*yield*/, tiddly.ensurePath(dir)];
                case 4:
                    _f.sent();
                    console.log("Writing Tiddler:", path);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(path, data)];
                case 5:
                    _f.sent();
                    _f.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    console.log("Writing Edge Types");
                    _a = 0, edgeTypes_1 = edgeTypes;
                    _f.label = 8;
                case 8:
                    if (!(_a < edgeTypes_1.length)) return [3 /*break*/, 12];
                    type = edgeTypes_1[_a];
                    dir = type.tiddlerdir();
                    path = type.tiddlerfile();
                    data = type.tiddlerdata();
                    return [4 /*yield*/, tiddly.ensurePath(dir)];
                case 9:
                    _f.sent();
                    console.log("Writing Edge Type:", path);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(path, data)];
                case 10:
                    _f.sent();
                    _f.label = 11;
                case 11:
                    _a++;
                    return [3 /*break*/, 8];
                case 12:
                    console.log("Writing Node Types");
                    _b = 0, nodeTypes_1 = nodeTypes;
                    _f.label = 13;
                case 13:
                    if (!(_b < nodeTypes_1.length)) return [3 /*break*/, 17];
                    type = nodeTypes_1[_b];
                    dir = type.tiddlerdir();
                    path = type.tiddlerfile();
                    data = type.tiddlerdata();
                    return [4 /*yield*/, tiddly.ensurePath(dir)];
                case 14:
                    _f.sent();
                    console.log("Writing Node Type:", path);
                    return [4 /*yield*/, fs_extra_1.default.writeFile(path, data)];
                case 15:
                    _f.sent();
                    _f.label = 16;
                case 16:
                    _b++;
                    return [3 /*break*/, 13];
                case 17: return [4 /*yield*/, writeMap(map, ctx)];
                case 18:
                    _f.sent();
                    return [4 /*yield*/, writeMap(map2, ctx)];
                case 19:
                    _f.sent();
                    return [4 /*yield*/, writeMap(map3, ctx)];
                case 20:
                    _f.sent();
                    _c = [];
                    for (_d in mapmap)
                        _c.push(_d);
                    _e = 0;
                    _f.label = 21;
                case 21:
                    if (!(_e < _c.length)) return [3 /*break*/, 24];
                    x = _c[_e];
                    return [4 /*yield*/, writeMap(mapmap[x], ctx)];
                case 22:
                    _f.sent();
                    _f.label = 23;
                case 23:
                    _e++;
                    return [3 /*break*/, 21];
                case 24: return [2 /*return*/];
            }
        });
    });
}
module.exports = function (args) {
    console.log("start", args);
    convert('elements.json', 'connections.json', 'output').then(function () {
        console.log("done");
    });
};
//# sourceMappingURL=convert.js.map