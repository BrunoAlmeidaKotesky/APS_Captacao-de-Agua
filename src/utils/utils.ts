
function $(selector: string){ 
    return document.querySelector(selector)
}
function $$(selector: string) {
    return document.querySelectorAll(selector);
}

function toggleNavCollor() {

    function isInViewport (elem: Element) {
        let bounding = elem.getBoundingClientRect();
        if(bounding.top <= 0 &&
           bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            return false;
    }
    window.addEventListener('load', ()=> {
        if(window.innerWidth <= 720){
            let nav = $("#navigation") as HTMLElement;
            let hideLogo =  $('#titulo') as HTMLElement;
            hideLogo.style.visibility = "visible";
            nav.style.background = "white";
        }
    });
    
    window.addEventListener('scroll' , ()=> {
        let main = $('.main-content');
        let nav = $("#navigation") as HTMLElement;
        let hideLogo =  $('#titulo') as HTMLElement;
        let contact = $$('#contactIcon') as NodeListOf<HTMLImageElement>;
        let home = $('#homeIcon') as HTMLImageElement;
        let linkText = $$('#linkUm');
        if(window.innerWidth >= 720){
        if(isInViewport(main) === false){
            nav.style.backgroundColor = 'white';
            hideLogo.style.visibility = 'visible';
            linkText.forEach((t:HTMLElement) => t.style.color = "black");
            contact[0].src = "src/icons/page-icon-png-3.png";
            contact[1].src = "src/icons/contactIcon.png";
            home.src = "src/icons/homeIcon.png";
        }
        else {
            nav.style.backgroundColor = "rgba(69, 61, 61, 0.48)";
            hideLogo.style.visibility = 'hidden';
            linkText.forEach((t:HTMLElement) => t.style.color = "white");
            contact[0].src = "src/icons/page-icon-png-3W.png";
            contact[1].src = "src/icons/contactIconW.png";
            home.src = "src/icons/homeIconW.png";
        }
    }
    })
}
let page = window.location.pathname;
//@ts-ignore
if(page.endsWith('index.html'))
    toggleNavCollor();
