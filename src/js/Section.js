
class SecondSection {
    static renderSection(){
        let sectionPosition = document.querySelector('#secao-2');
        sectionPosition.innerHTML = `<h1 class="titleSecondSection">Formas de uso de Cisternas</h1>
        <div class="secao2-content">
          <p class="secondSectionParagraph sSP-first">É possível usar a água reciclada para uso na agricultura, tanto para uso domiciliar para regar hortas ou flores como também é possível usar esta água para uso profissional para regar uma fazenda</p>
          <p class="secondSectionParagraph">A água reciclada pode ser usada para limpeza em geral, por exemplo limpeza de casa, limpeza de carro, para lavagem de roupa, etc...</p>
          <p class="secondSectionParagraph">A água pode ser usada para uso geral por exemplo: água de descarga, água para limpar talheres, para lavar a mão, etc..</p>
        </div>`;
    }
}

SecondSection.renderSection();