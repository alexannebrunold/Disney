/* Menu burger */
var open = document.getElementById("open");
var close = document.getElementById("close");
var mobileMenu = document.getElementById("mobile-menu");
open.addEventListener("click", open_menu);
close.addEventListener("click", close_menu);

function open_menu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.classList.remove("is-close");
}

function close_menu() {
  mobileMenu.classList.add("is-close");
  mobileMenu.classList.remove("is-open");
}

var visual = document.getElementById('visual');
var img_product = document.querySelectorAll('.img-product');
for(let i = 0; i<img_product.length; i++){
  img_product[i].addEventListener('click',function (){
    var change = img_product[i].getAttribute('src');
    
    visual.setAttribute('src',change);
  } )
}

if(visual){
  visual.addEventListener("click",function(){
    location.href="pages/shop.html";
  });
}

var btn = document.getElementById('contact');
if(btn){

  btn.addEventListener('click',function (){
    var require = document.querySelectorAll('.require');
    var retour = document.getElementById('retour');
    var error = 0;
    for(let j = 0; j<require.length; j++){
      var val = require[j].value;
  
      if(val.trim() == ""){
        require[j].classList.add('error');
        error++;
      }
      else{
        require[j].classList.remove('error');
      }
    }
  
    if(error == 0){  
      retour.innerHTML='<div class="alert success"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Message envoyé<br>Merci de nous avoir contacté</div>';
      for(let k = 0; k<require.length; k++){
        require[k].value="";
      }
    
    }
    else{
      retour.innerHTML='<div class="alert danger"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Tous les champs sont obligatoires</div>';
    }
  
  } );
}


var connexion = document.getElementById('login');
if(connexion){
  
connexion.addEventListener('click',function (){
  var require = document.querySelectorAll('.require');
  var retour = document.getElementById('retour');
  var error = 0;
  for(let l = 0; l<require.length; l++){
    var val = require[l].value;

    if(val.trim() == ""){
      require[l].classList.add('error');
      error++;
    }
    else{
      require[l].classList.remove('error');
    }
  }

  if(error == 0){  
    retour.innerHTML='<div class="alert success"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Connexion réussit</div>';
    for(let m = 0; m<require.length; m++){
      require[m].value="";
    }
  }
  else{
    retour.innerHTML='<div class="alert danger"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Tous les champs sont obligatoires</div>';
  }

});

}