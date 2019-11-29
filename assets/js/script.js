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

var product = document.getElementById("product");

if(product){
  product.addEventListener("change",function(){
    var nameProd = product.value;
    if(nameProd == "star"){
      document.getElementById('img-product').innerHTML='<img src="../assets/img/boite-star-wars.png" alt="box-starwars" />';
      var content = "";
      content+='<p>';
      content+='<strong> Star Wars HyperSpace Mountain</strong>';
      content+='<strong> Descriptif du produit</strong>';
      content+='<br /><br />';
      content+="Plonger au coeur de l'action Au volant de votre vaisseau spatial, combattez l'Empire depuis chez vous à l'aide de notre nouveau produit Pocket disney. Montez votre maquette du Star Wars Hyperspace Mountain et engagez-vous dans l’Alliance rebelle. Muni de votre casque de réalité virtuel, assistez à un briefing de l’Amiral Ackbar.Sur fond de rafales de tirs, de sensations fortes et du sublime thème musical de Star Wars™, Pocket Disney Star Wars Hyperspace Mountain est une expérience qui laissera bouche bée les plus fervents adeptes de la Force et des technologies innovantes.";
      content+='</p>';
      content+='<ul>';
      content+='<li>Un capteur de distance et de couleurs</li>';
      content+='<li>Un moteur équipé d’un Tachymètre</li>';
      content+='</ul>';
      document.getElementById("content").innerHTML=content;
      document.getElementById("price").value="499.99";
      document.getElementById("change-price").innerHTML="coût : 499.99 € + 1 casque (inclus)";
    }

    else if(nameProd == "pirate"){
      document.getElementById('img-product').innerHTML='<img src="../assets/img/Pirates-BOX.png" alt="box-pirates" />';
      var content = "";
      content+='<p>';
      content+='<strong> Pirates des caraïbes</strong>';
      content+='<strong> Descriptif du produit</strong>';
      content+='<br /><br />';
      content+="Frissonnez dans ce pillage de pirates périlleux, avec la présence inédite du Capitaine Jack Sparrow et de son équipage sans foi ni loi qui debarque directement dans votre salon. Fuyez à travers un dédale de ruelles d'une forteresse dévastée par les combats construit de toutes pièces de vos propres mains et descendez dans les cachots humides où gisent les squelettes des pirates déchus muni de votre casque de réalité virtuelle qui vous immerge complètement dans l'univers de la piraterie. Trouvez refuge près d'un lagon sous le clair de lune, embarquez à bord de votre vaisseau et plongez dans une aventure fantastique mise en scène faite de tirs de mousquets, d'explosions et de combats à l'épée.";
      content+='</p>';
      content+='<ul>';
      content+='<li>Vivez ou revivez l\'attraction comme si vous y etiez ! Mais ouvrez l\'œil</li>';
      content+='<li>Chantez en chœur avec les Pirates des Caraïbes</li>';
      content+='<li>Un capteur de distance et de couleurs</li>';
      content+='<li>Un moteur équipé d’un Tachymètre</li>';
      content+='</ul>';
      document.getElementById("content").innerHTML=content;
      document.getElementById("price").value="450.99";
      document.getElementById("change-price").innerHTML="coût : 450.99 € + 1 casque (inclus)";
    }

    else if(nameProd == "chateau"){
      document.getElementById('img-product').innerHTML='<img src="../assets/img/Box-Chateau.png" alt="box-chateau" />';
      var content = "";
      content+='<p>';
      content+='<strong> Chateau de Princesse Disney</strong>';
      content+='<strong> Descriptif du produit</strong>';
      content+='<br /><br />';
      content+="Sauter à pieds joints dans un nouveau monde, construisez ce château de légende et n'oubliez surtout pas de mettre votre casque de réalité virtuelle pour ne rien manquer du spectacle. Profitez d'une image réaliste, avec une profondeur et une precision des détails, des couleurs riches et des contrastes intenses. Laissez votre visage s'illuminer devant l’éblouissant spectacle nocturne Disney Illuminations. Laissez-vous porter, comme dans un rêve éveillé, au coeur des histoires Disney avec une constellation de feux d’artifices, de projections de lumières et d’effets spéciaux spectaculaires..";
      content+='</p>';
      content+='<ul>';
      content+='<li>Vivez chaque expérience avec une intensité incomparable. </li>';
      content+='<li>Véritable château de conte de fées avec ses flèches vertigineuses</li>';
      content+='<li>Ses tourelles richement décorées, ses toits d\'un bleu royal</li>';
      content+='<li>Le pocket Disney, c\'est ce qu\'il vous faut pour vous divertir dans le plus grand confort.</li>';
      content+='</ul>';
      document.getElementById("content").innerHTML=content;
      document.getElementById("price").value="399.99";
      document.getElementById("change-price").innerHTML="coût : 399.99 € + 1 casque (inclus)";
    }
  });
}

var numbers = document.getElementById("numbers");
if(numbers){
  numbers.addEventListener("change",function(){
    var valNumber = parseInt(numbers.value);
    var price = parseFloat(document.getElementById("price").value);
    var total = price + (valNumber * 399.99);
    if(valNumber == 1){
      var num = valNumber+" casque (inclus)";
    }
    else{
      var num = valNumber+" casques";
    }
    document.getElementById("change-price").innerHTML="coût : "+price+" € + "+num+"<br><br>"+"TOTAL : "+total+" € TTC";
  });
}



var commander = document.getElementById('commander');
if(commander){
  
  commander.addEventListener('click',function (){
  var require = document.querySelectorAll('.require');
  var retour = document.getElementById('retour');
  var error = 0;
  for(let n = 0; n<require.length; n++){
    var val = require[n].value;

    if(val.trim() == ""){
      require[n].classList.add('error');
      error++;
    }
    else{
      require[n].classList.remove('error');
    }
  }

  if(error == 0){  
    retour.innerHTML='<div class="alert success"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Votre commande a été enregistré</div><meta http-equiv="refresh" content="4; URL=../index.html">';
    for(let o = 0; o<require.length; o++){
      require[o].value="";
    }
  }
  else{
    retour.innerHTML='<div class="alert danger"><span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>Tous les champs sont obligatoires</div>';
  }

});

}