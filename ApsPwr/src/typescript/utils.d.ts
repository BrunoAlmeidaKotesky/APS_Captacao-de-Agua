export declare function $(selector: string): Element;
export declare function $$(selector: string): NodeListOf<Element>;
export declare const debouncer: <F extends Function>(fn: F, wait?: number, time?: number) => (...args: any[]) => void;
