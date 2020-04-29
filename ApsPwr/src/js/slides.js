let slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

class SlideshowContainer {
  async renderSlider(){
    let slideshowCont = document.querySelector('#secao-1');
    slideshowCont.innerHTML = `<div class="slideshow-container">
    <div class="mySlides fade">
      <img src="https://cdn4.ecycle.com.br/cache/images/materias/Pegue-Leve/2015-05/50-650-cisternas-vertical-modular-1000-litros-filtro-750.jpg" class="imgContainer" >
      <div class="text">O que são cisternas?</div>
    </div>
    
    <div class="mySlides fade">
      <img src="https://www.mapadaobra.com.br/wp-content/uploads/2016/12/novo-layout1.png" class="imgContainer" >
      <div class="text">Por que devemos captar?</div>
    </div>
    
    <div class="mySlides fade">
      <img src="https://assets.change.org/photos/8/qv/ol/HBQVolKQfRiZBfi-800x450-noPad.jpg?1523383630"  class="imgContainer">
      <div class="text">Como faço para coletar?</div>
    </div>
    
    </div>
    <div style="text-align:center">
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
    </div>`;

  }
}

let slides = new SlideshowContainer();
slides.renderSlider();
showSlides();
