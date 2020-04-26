export function $(selector) {
    return document.querySelector(selector);
}
export function $$(selector) {
    return document.querySelectorAll(selector);
}
export function toggleNavCollor() {
    function isInViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        if (bounding.top <= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            return false;
    }
    ;
    window.addEventListener('scroll', function () {
        var main = $('.main-content');
        var nav = $("#navigation");
        if (isInViewport(main) === false) {
            nav.style.backgroundColor = 'white';
        }
        else
            nav.style.backgroundColor = "#ffffff00";
    });
}
var page = window.location.pathname;
//@ts-ignore
if (page.endsWith('index.html'))
    toggleNavCollor();
