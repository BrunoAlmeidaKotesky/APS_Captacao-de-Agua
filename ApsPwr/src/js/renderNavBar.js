import {$} from '../typescript/utils.js';

function renderNavBar() {
    let icons = '';
    const navBar = $('#navigation');
    const navAttributes = [{id: "homeIcon",    image: "../icons/homeIcon.png",text: "Home"},
                           {id: "contactIcon", image: "../icons/page-icon-png-3.png",text: "Captação da agua da chuva"},
                           {id: "contactIcon", image: "../icons/contactIcon.png",text: "Contato"}];

    navAttributes.forEach((it, idx) => {
       let page = window.location.pathname;
       let href;
       if(page.endsWith('index.html'))
        href = (idx+1) < 3 ?  `#secao-${idx+1}` : "../pages/contacts.html";
       else if(page.endsWith('contacts.html')) href = (idx+1) === 1 ?  "../pages/index.html" : (idx+1) === 2 ? `../pages/index.html#secao-${idx+1}`: '';
       icons += `<li><a id="linkUm" href="${href}">
                     <img id="${it.id}" src="${it.image}" width=10 height=10>
                     <span class="link-text">${it.text}</span>
                    </a>
                </li>`;
    });

    const navBarElemtns = `
        <div id="titulo">
            <a id="link" href="#secao-1"><img class="logo" src="../icons/iconPage.png" alt="" height="60px"></a>
        </div>
        <ul class="lista-links">
        ${icons}
        </ul>`;

    navBar.innerHTML += navBarElemtns;
}

renderNavBar();