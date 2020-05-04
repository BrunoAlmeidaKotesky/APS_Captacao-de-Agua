import {$} from '../utils/utils.js';

class ContactCards{
  static renderCards(){
    const cardImgArea = $('.img-area');
    const userProfiles = [
        {nome: 'Bruno Almeida Kotesky',photo: 'src/icons/IMG_1543.jpg'},
        { nome: 'Renzo Hideki',photo: 'src/icons/RenzoPicture.jpg'},
        {nome: 'Lucas', photo: 'src/icons/LucasPicture.jpg'},
        { nome: 'Gustavo',photo: 'src/icons/IMG_1543.jpg'}
    ];
    
    userProfiles.forEach(card => {
        const cardEl =  `<div class="card">
           <div class="img-wrapper">
             <img src="${card.photo}" alt="${card.nome}">
             <h2>${card.nome}</h2>
              <ul>
                <li><a id="linkUnip" href="">UNIP</a></li>
                <li><a class="profileCard" href="https://twitter.com/home?lang=pt"><i class="fa fa-twitter"></i></a></li>
                <li><a class="profileCard" href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin"></i></a></li>
                <li><a class="profileCard" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
              </ul>
           </div>
          </div>`;
          cardImgArea.innerHTML += cardEl;
    });
  }
}
ContactCards.renderCards();

