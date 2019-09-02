export declare type tiddlydate = string;
export declare const TIDDLERTYPE = "text/vnd.tiddlywiki";
export interface TiddlyElement {
    guid: string;
    base: TiddlerFileBase;
}
export interface Tiddler extends TiddlyElement {
    created: tiddlydate;
    modified: tiddlydate;
    title: string;
    type: string;
    tiddlerdir: () => string;
    tiddlerfile: () => string;
    tiddlerdata: () => string;
}
export interface TiddlerData {
    created?: tiddlydate;
    modified?: tiddlydate;
    title?: string;
    type?: string;
    guid?: string;
    fields?: Map<string, string>;
    text?: string;
}
export interface TiddlyMap {
    name: string;
    nodes: Set<string>;
    edges: Set<string>;
}
export interface TiddlerFileBase {
    path: string;
    nodes: string;
    mapViews: string;
    mapEdgeTypes: string;
    mapNodeTypes: string;
    system: string;
    templates: string;
    createNodeTiddler: (data: TiddlerData) => NodeTiddler;
    createEdgeTypeTiddler: (parts: string[]) => EdgeTypeTiddler;
    createNodeTypeTiddler: (parts: string[]) => NodeTypeTiddler;
    ensurePath: (base: string, dir?: string) => string;
}
export interface NodeTiddler extends TiddlyElement, Tiddler {
    tmap_id: string;
    tmap_edges: string;
    element_type: string;
    wiki_text: string;
    fields: Map<string, string>;
}
export declare class SimpleTiddlyElement implements TiddlyElement {
    guid: string;
    base: TiddlerFileBase;
    constructor(base: TiddlerFileBase);
}
export declare class SimpleTiddler extends SimpleTiddlyElement implements Tiddler {
    created: tiddlydate;
    modified: tiddlydate;
    title: string;
    type: string;
    constructor(data: TiddlerData, base: TiddlerFileBase);
    tiddlerdir(): string;
    tiddlerfile(): string;
    tiddlerdata(): string;
}
export declare class SimpleNodeTiddler extends SimpleTiddler implements NodeTiddler {
    tmap_id: string;
    tmap_edges: string;
    element_type: string;
    wiki_text: string;
    fields: Map<string, string>;
    sorted_keys: string[];
    constructor(data: TiddlerData, base: TiddlerFileBase);
    tiddlerdir(): string;
    tiddlerdata(): string;
}
export declare class NodeTypeTiddler extends SimpleTiddler {
    parts: string[];
    slugchain: string[];
    filepart: string;
    dirchain?: string[];
    scope: string;
    style: string;
    constructor(parts: string[], base: TiddlerFileBase);
    tiddlerdata(): string;
    randomRGBA(): string;
    tiddlerdir(): string;
    tiddlerfile(): string;
}
export declare class EdgeTypeTiddler extends SimpleTiddler {
    parts: string[];
    slugchain: string[];
    filepart: string;
    dirchain?: string[];
    style: string;
    constructor(parts: string[], base: TiddlerFileBase);
    tiddlerdata(): string;
    randomRGBA(): string;
    tiddlerdir(): string;
    tiddlerfile(): string;
}
export declare class SimpleTiddlyMap implements TiddlyMap {
    name: string;
    nodes: Set<string>;
    edges: Set<string>;
    constructor(name: string);
}
export declare class TiddlerViewFiles extends SimpleTiddlyElement {
    name: string;
    viewbase: string;
    tiddler: string;
    edges: string;
    nodes: string;
    layout: string;
    edgeFilter: string;
    nodeFilter: string;
    layoutData: string;
    constructor(def: TiddlyMap, base: TiddlerFileBase);
    tiddlerdata(): string;
    edgedata(): string;
    nodedata(): string;
    layoutdata(): string;
}
export declare class SimpleTiddlerFileBase implements TiddlerFileBase {
    path: string;
    system: string;
    templates: string;
    nodes: string;
    mapViews: string;
    mapEdgeTypes: string;
    mapNodeTypes: string;
    ensurePath(base: string, dir?: string): string;
    constructor(path: string);
    createNodeTiddler(data: TiddlerData): NodeTiddler;
    createEdgeTypeTiddler(parts: string[]): EdgeTypeTiddler;
    createNodeTypeTiddler(parts: string[]): NodeTypeTiddler;
}
export declare function tiddlyloader(dir: string): TiddlerFileBase;
