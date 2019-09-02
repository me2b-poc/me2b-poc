import { Element } from './interfaces';
import { ElementType, ConnectionType } from './interfaces';
export declare class TiddlerViewFiles {
    tiddler: string;
    edges: string;
    nodes: string;
    layout: string;
    constructor(path: string);
}
export declare class TiddlerMapFileBase {
    path: string;
    edgeTypes: string;
    nodeTypes: string;
    views: string;
    viewMap: {
        [key: string]: TiddlerViewFiles;
    };
    constructor(path: string);
    viewFiles(key: string): TiddlerViewFiles;
    pathForElementType(elt: ElementType): string;
    pathForConnectionType(elt: ConnectionType): string;
}
export declare class TiddlerFileBase {
    path: string;
    system: string;
    templates: string;
    maps: TiddlerMapFileBase;
    constructor(path: string);
    pathForElement(elt: Element): string;
}
