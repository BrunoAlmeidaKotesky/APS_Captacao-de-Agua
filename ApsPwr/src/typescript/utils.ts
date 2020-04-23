
export function $(selector: string){ 
    return document.querySelector(selector)
}
export function $$(selector: string) {
    return document.querySelectorAll(selector);
}
export const debouncer = <F extends Function>(fn: F, wait = 1000, time?:number) => (...args: any[]) => {
    if(globalThis!==undefined){
        globalThis.clearTimeout(time as number);
        time = globalThis.setTimeout(() => fn(...args), wait);
    }
    else{
        clearTimeout(time as number);
        time = setTimeout(() => fn(...args), wait);
    }
};  