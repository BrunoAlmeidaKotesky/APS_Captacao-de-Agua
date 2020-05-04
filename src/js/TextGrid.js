import {$} from '../utils/utils.js';

class TextGrid {
    static renderGrid() {
        let gridPosition = $('.delimiter');

        gridPosition.innerHTML = `<div class="grid">
        <h2 style="grid-column: 2/4; text-align: center; padding-bottom: 7.5px">Benefícios da captação da água da chuva</h2>
        <div class="formas-grid" style="grid-column: c1-start/c4-end;">
            <img src="https://www.hometeka.com.br/wp-content/uploads/2016/02/captar-750x500.jpg" class="formas-img" width="150px" alt="">
            <div class="formas-de-uso"><h3 style="text-align: center; padding-bottom: 5px;">Sustentabilidade</h3>
A sustentabilidade é um assunto bastante atual e é também um assunto bastante importante para diminuir a poluição reutilização da água 
A utilização de maneira mais consciente e racional dos recursos naturais geram grandes benefícios e melhoram a qualidade de vida de forma geral.
A captação de água da chuva é um grande exemplo de consumo sustentável desse recurso.
Em vez de utilizar água tratada para lavar pisos, calçadas e áreas comuns de prédios, regar plantas ou lavar o carro, é possível aproveitar a água que corre das calhas.
Em tempos de chuva e fazer todas essas tarefas sem agredir o meio ambiente — e o bolso.
        </div>
    </div>
        <div class="formas-grid" style="grid-column: c1/c2;">
            <div class="formas-de-uso" style="grid-column: 1/3;"><h3 style="text-align: center; padding-bottom: 5px;">Economia na conta de água</h3>Aproveitar a água da chuva é também uma das melhores maneiras de economizar na sua conta de água.
Essa atitude pode representar uma economia de até 50% nos custos finais da sua conta.
Em locais com grande número de famílias, como condomínios, por exemplo, a economia pode ser ainda mais expressiva.
            </div>
        </div>
        <div class="formas-grid" style="grid-column: c3/c4;">
            <div class="formas-de-uso" style="grid-column: 1/3;"><h3 style="text-align: center; padding-bottom: 5px;">Segurança em tempos de racionamento</h3>
            Possuir um sistema de captação de água da chuva é, de certo modo, ter uma garantia de que esse recurso não faltará em períodos de racionamento e rodízios de água. Condomínios podem sofrer bastante, dado o grande consumo de água que possuem. Mas esse problema pode ser minimizado, com o uso de água da chuva na rega de jardim, lavagem de piso e entre outros, a manutenção do condomínio ficará sempre em dia. E não será necessário utilizar a água potável da concessionária de abastecimento para tais atividades. 
</div>
        </div>
        <div class="formas-grid" style="grid-column: c1/c2;">
            <div class="formas-de-uso" style="grid-column: 1/3;"><h3 style="text-align: center; padding-bottom: 5px;">Ajuda a conter enchentes</h3>
            Se essa fosse uma medida amplamente difundida e empregada, em momentos de chuvas fortes, um volume considerável de água deixaria de escoar pelas ruas, córregos e sistemas de drenagem da cidade, evitando inundações.
Por fim, a captação de água da chuva possui inúmeros benefícios e pode auxiliar na resolução e minimização de diversos problemas.
        </div>
        </div>
        <div class="formas-grid" style="grid-column: c3/c4;">
            <div class="formas-de-uso" style="grid-column: 1/3;"><h3 style="text-align: center; padding-bottom: 5px;">Evita a proliferação do mosquito Aedes Aegypti.</h3>
            Totalmente vedadas, as cisternas rotomoldadas Tecnotri são uma segurança contra a contaminação e proliferação do mosquito transmissor dos vírus da dengue, do chikungunya, o zika virus. Por ser um reservatório totalmente vedado, garante o armazenamento de água, sem compromoter o ambiente.
        </div>
        </div>
    </div>`;

    }
}

TextGrid.renderGrid();