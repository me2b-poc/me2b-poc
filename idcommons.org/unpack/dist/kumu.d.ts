export interface KumuEntity {
    guid: string;
    model: KumuModel;
    slugmap: {
        [key: string]: string;
    };
}
export interface KumuTag extends KumuEntity {
    slug: string;
    title: string;
    elements: KumuElementMap;
    connections: KumuConnectionMap;
}
export interface KumuType {
    name: string;
    depth: number;
    parts: string[];
}
export interface KumuElementType extends KumuType {
    parent?: KumuElementType;
}
export interface KumuConnectionType extends KumuType {
    parent?: KumuConnectionType;
}
export interface KumuElement extends KumuEntity {
    slug: string;
    label: string;
    type: KumuElementType;
    description: string;
    tags: KumuTagMap;
    inbound: KumuConnectionMap;
    outbound: KumuConnectionMap;
    fields: any;
    addOutbound: (conn: KumuConnection) => void;
    addInbound: (conn: KumuConnection) => void;
}
export interface KumuConnection extends KumuEntity {
    from: KumuElement;
    to: KumuElement;
    type: KumuConnectionType;
    fields: any;
    description: string;
}
export declare type KumuTagMap = {
    [id: string]: KumuTag;
};
export declare type KumuElementMap = {
    [id: string]: KumuElement;
};
export declare type KumuConnectionMap = {
    [id: string]: KumuConnection;
};
export declare type KumuElementTypeMap = {
    [id: string]: KumuElementType;
};
export declare type KumuConnectionTypeMap = {
    [id: string]: KumuConnectionType;
};
export declare class SimpleKumuEntity implements KumuEntity {
    guid: string;
    model: KumuModel;
    slugmap: {
        [key: string]: string;
    };
    constructor(src: any, model: KumuModel);
    mapFieldsExcept(elt: any, exclusion: string[]): Map<string, string>;
}
export declare class SimpleKumuElement extends SimpleKumuEntity implements KumuElement {
    slug: string;
    label: string;
    type: KumuElementType;
    description: string;
    tags: KumuTagMap;
    inbound: KumuConnectionMap;
    outbound: KumuConnectionMap;
    fields: Map<string, string>;
    constructor(elt: any, model: KumuModel);
    addOutbound(conn: KumuConnection): void;
    addInbound(conn: KumuConnection): void;
}
export declare class SimpleKumuConnection extends SimpleKumuEntity implements KumuConnection {
    from: KumuElement;
    to: KumuElement;
    type: KumuConnectionType;
    fields: Map<string, string>;
    description: string;
    locateFrom(def: any): KumuElement;
    locateTo(def: any): KumuElement;
    constructor(def: any, model: KumuModel);
}
export declare class SimpleKumuType extends SimpleKumuEntity implements KumuType {
    name: string;
    depth: number;
    parts: string[];
    constructor(type: string, model: KumuModel);
}
export declare class SimpleKumuElementType extends SimpleKumuType implements KumuElementType {
    parent?: KumuElementType;
    constructor(type: string, model: KumuModel);
}
export declare class SimpleKumuConnectionType extends SimpleKumuType implements KumuConnectionType {
    parent?: KumuConnectionType;
    constructor(type: string, model: KumuModel);
}
export declare class KumuModel {
    index: number;
    next_label(): string;
    elements: KumuElementMap;
    elementTypes: KumuElementTypeMap;
    defaultElementType: KumuElementType;
    connectionTypes: KumuConnectionTypeMap;
    defaultConnectionType: KumuConnectionType;
    constructor();
    encounterElement(elt: KumuElement): void;
    locateElementByLabel(label: string): KumuElement;
    encounterElementType(type: string): KumuElementType;
    encounterConnectionType(type: string): KumuConnectionType;
}
export declare function kumuloader(eltfile: string, connfile: string): Promise<KumuModel>;
