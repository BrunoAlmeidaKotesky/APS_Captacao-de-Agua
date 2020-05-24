class InfoPage{

   renderInfo(htmlDocument){
        let articleContainer = document.querySelector('.article');
        articleContainer.innerHTML = htmlDocument;
    }
}

let page = window.location.pathname;
let linkHome = document.querySelector('.link-to-0');
let linkSec2 = document.querySelector('.link-to-1');
let linkContact = document.querySelector('.link-to-2');
linkHome.href = 'index.html#secao-1';
linkSec2.href = 'index.html#secao-2';
linkContact.href = 'contacts.html';

let content = new InfoPage();

if(page.endsWith('cisternas.html')){
    content.renderInfo(`<article style="height: 100%;">
    <h2 style="padding: 8px;">O que são cisternas?</h2>
    <p style="background: #453c3c26;border-radius: 13px;border: 1px solid black;">A cisterna é um reservatório que faz a captação da água da chuva e a armazena para uso doméstico
        e industrial, e onde mais se fizer necessário; é um sistema de baixo custo ao se ter em vista
        que é um investimento único e com poucas manutenções, se percebe os benefícios por vários anos.
        E por conta da sua utilidade existem vários tipos de cisternas que apresentam cada uma suas
        características como por exemplo:</p>
    <br />
    <hr>
    <h4>Cisterna de alvenaria </h4>
    <div style="padding: 10px 0 10px 0;"><img
            src="https://cdn.ecycle.com.br/images/2018-03/cisterna-alvenaria.jpg"
            style="border-radius: 10px; width: 230px;" alt="" srcset=""></div>
    <p>A cisterna de alvenaria, ela é feita, de cimento, tijolos e cal. A vantagem desse tipo de
        cisterna é que ela consegue armazenar bastante água, por outro lado, essa cisterna exige um
        grande investimento financeiro além de necessitar bastante espaço, ela também não oferece grande
        proteção contra algas e micro-organismos </p>
    <hr>
    <h4>Cisterna de fibra de vidro</h4>
    <div style="padding: 10px 0 10px 0;"><img
            src="https://cdn.ecycle.com.br/images/2018-03/386512_1.jpg"
            style="border-radius: 10px; width: 230px;" alt="" srcset=""></div>
    <p>Esses tipos de cisternas são compostos de plástico por conta disso ela oferece uma maior
        resistência contra algas e micro-organismos, essas cisternas são mais leves e mais e conta,
        entretanto essa cisterna possui uma vedação precária o que pode torná-la um ambiente para a
        proliferação do mosquitos vetores de doenças como a dengue.</p>
    <hr>
    <h4>Cisterna de plástico remodelado </h4>
    <div style="padding: 10px 0 10px 0;"><img
            src="https://ciclovivo.com.br/wp-content/uploads/2016/03/cisterna_capa-1280x720.jpg"
            style="border-radius: 10px; width: 230px;" alt="" srcset=""></div>
    <p>A cisterna vertical modular é uma cisterna feita de polietileno a partir do processo de
        rotomoldagem (que a torna mais leve, durável e resistente). Esses tipos de cisternas possuem
        diversas capacidades, são compactos e não precisam ser enterrados, o que diminui o custo de
        instalação, assim podendo ser usadas em locais mais diversos como apartamento ou até mesmo como
        decoração de jardim, por serem mais fáceis de instalar em sistemas de calhas</p>
    <hr>
    <h4>Minicisterna</h4>
    <div style="padding: 10px 0 10px 0;"><img
            src="https://cdn4.ecycle.com.br/cache/images/eDicas/agua/mini-cisterna/50-650-mini-cisterna-captaco-de-agua-da-chuva.jpg"
            style="border-radius: 10px; width: 230px;" alt="" srcset=""></div>
    <p>Elas são acomodadas diretamente nas calhas para captação de água. A minicisterna têm capacidade
        de 80 a 240 litros e tem uma torneira em sua parte inferior para facilitar o uso imediato da
        água da cisterna, ela é destinada ao aproveitamento da água da chuva de cobertura em área
        urbanas para fins mais potáveis</p>
    <br />
</article>`);
}

if(page.endsWith('porque-captar.html')){
    content.renderInfo(`<article style="height: 100%; padding: 12px;"><h2 style="padding-bottom: 12px;">Porque devemos Captar?</h2>
    <p> No Brasil não é uma prática muito comum na sociedade a utilização da água da chuva, esta que é uma solução bem interessante para algumas necessidades do dia a dia, com tal captação pode-se economizar água potável de forma muito eficiente em pequenos e longos prazos.</p>
    <p>Atualmente muitas pessoas já ouviram falar sobre cisternas, mas ainda não é uma solução muito recorrente e propagada no país.</p>
    <p>Ao analisar a situação atual da sociedade, se ocorresse a expansão do hábito de instalar cisternas em residências, verticais, horizontais e até mesmo em indústrias, podendo ser instalada em zonas rurais ou urbanas; o que geraria um impacto em vários setores importantes para a população.</p>
    <p>Primeiramente, observa-se que a conta de água nos locais com esta instalação poderia ser consideravelmente reduzida, esta medida também ajuda a conter enchentes em zonas urbanas devido a maior parte do solo ser impermeável e a água não ser escoada para a terra, assim causando enchentes.</p>
    <p>Mas com as cisternas em residências pode se reduzir isto, ao levar em consideração que grande parte desta água seria armazenada para utilização em tarefas diárias, e também na redução do consumo deste recurso natural que é limitado, em que poderia ser notado os resultados positivos dentro de alguns anos.</p>
    <p>Dentre estes benefícios, o governo também incentiva esta prática por meio de benefícios para quem utiliza deste método, o que pode ser visto na <strong>Lei 13.501/2017</strong>, que em algumas cidades oferecem redução no IPTU para residências que possuem este sistema.</p>
    </article>`);
}

if(page.endsWith('como-coletar.html')){
    content.renderInfo(`<article style="height: 100%; padding: 12px; display:grid;">
    <h2 style="padding-bottom: 12px;">Como Faço para coletar?</h2>
    <p>Para se captar a água da chuva é necessário a instalação  de uma cisterna, de acordo com as normas da ABNT é necessário se cumprir três pontos básicos:</p>
    <p><strong>Dimensionamento</strong>, que muda dependendo de fatores como a área do telhado a qualidade da água, <strong>origem</strong> e <strong>uso da água coletada</strong>, que se faz a instalação de filtros e apetrechos específicos para se garantir uma qualidade decente da água.</p>
    <p>A parte mais importante para instalação de uma cisterna é dimensionamento, pois é necessário o estudo da estrutura da sua casa, por conta disso é recomendado o contravento de um profissional para se ter uma instalação sem problema (principalmente se você for instalar a sua cisterna em baixo da terra).</p> 
    <p>Quantos aos filtros muitas cisternas já vem com filtros já instalados, caso a sua cisterna não venha com filtro já instalados a construção do seu filtro deve ser feita com muito cuidado ou um profissional deve ser consultado, pois o filtro é a parte mais importante para uso da cisterna.</p>
 </article>`);
}

if(page.endsWith('referencias.html')){
    content.renderInfo(`<article style="height: 100%; padding: 12px; display:grid;">
    <h2 style="padding-bottom: 12px;">Referências</h2>
<p>BRASÍLIA IV - Incentivar e promover a captação, a preservação e o aproveitamento de águas pluviais. LEI Nº 13.501, DE 30 DE OUTUBRO DE 2017.</p>
<p>COLLA, Lizzi Lemos. Sistemas de Captação e Aproveitamento de Água de Chuva. 2008. 80 f. Tcc (Graduação) Curso de Engenharia Ambiental, Universidade Estadual Paulista “Júlio de Mesquita Filho", Sorocaba, 2008. 
<p>CONSTRUTORA, Aloha. 4 benefícios da captação de água da chuva. Disponível em: <a href="https://alohaconstrutora.com.br/novo/2020/01/21/4-beneficios-da-captacao-de-agua-da-chuva/">https://alohaconstrutora.com.br/novo/2020/01/21/4-beneficios-da-captacao-de-agua-da-chuva/</a>. Acesso em: 01 maio 2020.</p>
<p>DEMARCHI, Itamar. Aproveitar água de chuva vale a pena? Disponível em: <a href="https://www.linkedin.com/pulse/aproveitar-%C3%A1gua-de-chuva-vale-pena-itamar-demarchi/">https://www.linkedin.com/pulse/aproveitar-%C3%A1gua-de-chuva-vale-pena-itamar-demarchi/</a>. Acesso em: 01 maio 2020.</p>
<p>ECYCLE, Equipe. Tipos de cisternas: modelos do cimento ao plástico. Disponível em: <a href="https://www.ecycle.com.br/4203-tipos-de-cisternas-modelos-de-plastico-cisterna-ecologica">https://www.ecycle.com.br/4203-tipos-de-cisternas-modelos-de-plastico-cisterna-ecologica</a>. Acesso em: 01 maio 2020.</p>
<p>ECOCASA. CAPTAÇÃO DE ÁGUA DA CHUVA: POR ONDE COMEÇAR? Disponível em: <a href="https://www.ecocasa.com.br/agua-da-chuva-por-onde-comecar/">https://www.ecocasa.com.br/agua-da-chuva-por-onde-comecar/</a>. Acesso em: 01 maio 2020.</p>
<p>OLIVEIRA, Frederico Moyle Baeta de. Aproveitamento de água de chuva para fins não potáveis no Campus da Universidade Federal de Ouro Preto – Universidade Federal de Ouro Preto - Ouro Preto, Minas Gerais. [manuscrito] / Frederico Moyle Baeta de Oliveira - 2008.</p>
<p>SILVA, Gilmar da. APROVEITAMENTO DE ÁGUA DE CHUVA EM UM PRÉDIO INDUSTRIAL E NUMA ESCOLA PÚBLICA: estudo de caso. 2008. 103 f. Tese (Doutorado) - Curso de Engenharia Civil, Universidade Estadual de Campinas, Campinas, 2008.</p>
 </article>`);
}