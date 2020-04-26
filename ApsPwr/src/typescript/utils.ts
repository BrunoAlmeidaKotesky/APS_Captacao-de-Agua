
export function $(selector: string){ 
    return document.querySelector(selector)
}
export function $$(selector: string) {
    return document.querySelectorAll(selector);
}

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
let page = window.location.pathname;
//@ts-ignore
if(page.endsWith('index.html'))
    toggleNavCollor();