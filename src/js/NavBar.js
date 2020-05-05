
class NavBar {

    static renderNavBar() {
        let icons = '';
        let page = window.location.pathname;
        const navBar = document.querySelector('#navigation');
        const navAttributes = [{
                id: "homeIcon",
                image: page.endsWith('index.html') && window.innerWidth >= 720 ? "src/icons/homeIconW.png" : "src/icons/homeIcon.png",
                text: "Home"
            },
            {
                id: "contactIcon",
                image: page.endsWith('index.html') && window.innerWidth >= 720 ? "src/icons/page-icon-png-3W.png" : "src/icons/page-icon-png-3.png",
                text: "Captação da agua da chuva"
            },
            {
                id: "contactIcon",
                image: page.endsWith('index.html') && window.innerWidth >= 720 ? "src/icons/contactIconW.png" : "src/icons/contactIcon.png",
                text: "Contato"
            }
        ];

        navAttributes.forEach((it, idx) => {
            let href;
            if (page.endsWith('index.html'))
                href = (idx + 1) < 3 ? `#secao-${idx+1}` : "contacts.html";
            else if (page.endsWith('contacts.html'))
                href = (idx + 1) === 1 ? "index.html" : (idx + 1) === 2 ? `index.html#secao-${idx+1}` : '';
            icons += `<li><a id="linkUm" href="${href}" ${page.endsWith('index.html') ? `style="color: white;"` : ''}>
                         <img id="${it.id}" src="${it.image}" width=10 height=10>
                         <span class="link-text">${it.text}</span>
                        </a>
                    </li>`;
        });

        const navBarElemtns = `
            <div id="titulo" ${page.endsWith('index.html') ? `style="visibility: hidden";` : ''}>
                <img class="logo" src="src/icons/iconPage.png" alt="" height="60px">
            </div>
            <ul class="lista-links">
            ${icons}
            </ul>`;

        navBar.innerHTML += navBarElemtns;
    }

}
NavBar.renderNavBar();