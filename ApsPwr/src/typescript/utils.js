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
