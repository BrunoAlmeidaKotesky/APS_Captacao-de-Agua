
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

export function toggleNavCollor() {
    function isInViewport (elem: Element) {
        let bounding = elem.getBoundingClientRect();
        if(bounding.top <= 0 &&
           bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            return false;
    };
    window.addEventListener('scroll' , ()=> {
        let main = $('.main-content');
        let nav = $("#navigation") as HTMLElement;
        if(isInViewport(main) === false){
            nav.style.backgroundColor = 'white';
        }
        else nav.style.backgroundColor = "#ffffff00";
    })
}
toggleNavCollor();