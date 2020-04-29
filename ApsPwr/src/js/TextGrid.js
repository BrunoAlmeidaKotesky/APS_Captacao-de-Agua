import {$} from '../utils/utils.js';

class TextGrid {
    static renderGrid() {
        let gridPosition = $('.delimiter');

        gridPosition.innerHTML = `<div class="grid">
        <h2 style="grid-column: c1-start/c3-end; text-align: center;">Formas de Uso</h2>
        <div class="formas-grid">
            <img src="https://www.hometeka.com.br/wp-content/uploads/2016/02/captar-750x500.jpg" class="formas-img" width="150px" alt="">
            <div class="formas-de-uso"><h3 style="text-align: center;">Forma 1</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
        </div>
        <div class="formas-grid">
            <img src="https://www.hometeka.com.br/wp-content/uploads/2016/02/captar-750x500.jpg" class="formas-img" width="150px" alt="">
            <div class="formas-de-uso"><h3 style="text-align: center;">Forma 2</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
        <div class="formas-grid">
            <img src="https://www.hometeka.com.br/wp-content/uploads/2016/02/captar-750x500.jpg" class="formas-img" width="150px" alt="">
            <div class="formas-de-uso"><h3 style="text-align: center;">Forma 3</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
    </div>`;

    }
}

TextGrid.renderGrid();