export declare type tiddlydate = string;
export declare type uuid = string;
export declare const TIDDLERTYPE = "text/vnd.tiddlywiki";
export interface MapNode {
    guid: string;
}
export interface Tiddler extends MapNode {
    created: tiddlydate;
    modified: tiddlydate;
    title: string;
    type: string;
    tiddlerfile: string;
    tiddlerdata: () => string;
}
export interface TiddlerData {
    created?: tiddlydate;
    modified?: tiddlydate;
    title?: string;
    type?: string;
    guid?: string;
}
export interface TiddlyMap {
    name: string;
}
export interface KumuEntity {
    guid: string;
}
export interface Element extends KumuEntity {
    label: string;
    fields: any;
    type: ElementType;
    description: string;
    inbound: any[];
    outbound: any[];
}
export declare type ElementMap = {
    [label: string]: Element;
};
export interface Connection extends KumuEntity {
    from: Element;
    to: Element;
    type: ConnectionType;
    fields: any;
    description: string;
}
export interface KumuType {
    title: string;
}
export interface ElementType extends KumuType {
}
export interface ConnectionType extends KumuType {
}
export declare type ElementTypeMap = {
    [label: string]: ElementType;
};
export declare type ConnectionTypeMap = {
    [label: string]: ConnectionType;
};
