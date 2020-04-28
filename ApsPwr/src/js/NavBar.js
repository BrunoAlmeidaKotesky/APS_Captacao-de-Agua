import {$} from '../utils/utils.js'

class NavBar{

   static renderNavBar() {
        let icons = '';
        let page = window.location.pathname;
        const navBar = $('#navigation');
        const navAttributes = [{id: "homeIcon", image: page.endsWith('index.html') ? "../icons/homeIconW.png": "../icons/homeIcon.png",text: "Home"},
                               {id: "contactIcon", image: page.endsWith('index.html') ?  "../icons/page-icon-png-3W.png" : "../icons/page-icon-png-3W.png",text: "Captação da agua da chuva"},
                               {id: "contactIcon", image: page.endsWith('index.html') ?  "../icons/contactIconW.png": "../icons/contactIcon.png",text: "Contato"}];
    
        navAttributes.forEach((it, idx) => {
           let href;
           if(page.endsWith('index.html'))
            href = (idx+1) < 3 ?  `#secao-${idx+1}` : "../pages/contacts.html";
           else if(page.endsWith('contacts.html')) 
            href = (idx+1) === 1 ?  "../pages/index.html" : (idx+1) === 2 ? `../pages/index.html#secao-${idx+1}`: '';
           icons += `<li><a id="linkUm" href="${href}" ${page.endsWith('index.html') ? `style="color: white;"` : ''}>
                         <img id="${it.id}" src="${it.image}" width=10 height=10>
                         <span class="link-text">${it.text}</span>
                        </a>
                    </li>`;
        });
    
        const navBarElemtns = `
            <div id="titulo" ${page.endsWith('index.html') ? `style="visibility: hidden";` : ''}>
                <a id="link" href="#secao-1"><img class="logo" src="../icons/iconPage.png" alt="" height="60px"></a>
            </div>
            <ul class="lista-links">
            ${icons}
            </ul>`;
    
        navBar.innerHTML += navBarElemtns;
    }
    
}
NavBar.renderNavBar();

