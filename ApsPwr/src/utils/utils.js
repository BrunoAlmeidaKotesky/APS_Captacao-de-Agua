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
        var hideLogo = $('#titulo');
        var contact = $$('#contactIcon');
        var home = $('#homeIcon');
        var linkText = $$('#linkUm');
        if (isInViewport(main) === false) {
            nav.style.backgroundColor = 'white';
            hideLogo.style.visibility = 'visible';
            linkText.forEach(function (t) { return t.style.color = "black"; });
            contact[0].src = "../icons/page-icon-png-3.png";
            contact[1].src = "../icons/contactIcon.png";
            home.src = "../icons/homeIcon.png";
        }
        else {
            nav.style.backgroundColor = "rgba(69, 61, 61, 0.48)";
            hideLogo.style.visibility = 'hidden';
            linkText.forEach(function (t) { return t.style.color = "white"; });
            contact[0].src = "../icons/page-icon-png-3W.png";
            contact[1].src = "../icons/contactIconW.png";
            home.src = "../icons/homeIconW.png";
        }
    });
}
var page = window.location.pathname;
//@ts-ignore
if (page.endsWith('index.html'))
    toggleNavCollor();
