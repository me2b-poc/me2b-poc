"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapname(name, suffix) {
    if (!suffix)
        suffix = '';
    else
        suffix = '_' + suffix;
    return "$__plugins_felixhayashi_tiddlymap_graph_views_" + name + suffix + ".tid";
}
function maptitle(name, suffix) {
    if (!suffix)
        suffix = '';
    else
        suffix = '/' + suffix;
    return "$:/plugins/felixhayashi/tiddlymap/graph/views/" + name + suffix;
}
var SimpleMap = /** @class */ (function () {
    function SimpleMap(name) {
        _this = _super.call(this) || this;
        this.name = name;
    }
    return SimpleMap;
}());
//# sourceMappingURL=maps.js.map