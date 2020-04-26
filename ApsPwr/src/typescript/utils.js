export function $(selector) {
    return document.querySelector(selector);
}
export function $$(selector) {
    return document.querySelectorAll(selector);
}
export var debouncer = function (fn, wait, time) {
    if (wait === void 0) { wait = 1000; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (globalThis !== undefined) {
            globalThis.clearTimeout(time);
            time = globalThis.setTimeout(function () { return fn.apply(void 0, args); }, wait);
        }
        else {
            clearTimeout(time);
            time = setTimeout(function () { return fn.apply(void 0, args); }, wait);
        }
    };
};
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
toggleNavCollor();
