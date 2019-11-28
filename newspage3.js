var clickone = document.getElementById('clickone');
var clictwo = document.getElementById('clicktwo');
var clicthree = document.getElementById('clickthree');
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

clickone.addEventListener('click', function () {
  var nb = clickone.getAttribute('rel');
  if (nb == 0) {
    clickone.innerHTML = '<i class="icofont-rounded-up"></i>';
    first.classList.remove('hide-block');
    first.classList.add('show-block');
    clickone.setAttribute('rel', '1');
  }
  else {
    clickone.innerHTML = '<i class="icofont-rounded-down"></i>';
    first.classList.remove('show-block');
    first.classList.add('hide-block');
    clickone.setAttribute('rel', '0');
  }

})

clicktwo.addEventListener('click', function () {
  var nb = clicktwo.getAttribute('rel');
  if (nb == 0) {
    clicktwo.innerHTML = '<i class="icofont-rounded-up"></i>';
    second.classList.remove('hide-block');
    second.classList.add('show-block');
    clicktwo.setAttribute('rel', '1');
  }
  else {
    clicktwo.innerHTML = '<i class="icofont-rounded-down"></i>';
    second.classList.remove('show-block');
    second.classList.add('hide-block');
    clicktwo.setAttribute('rel', '0');
  }

})

clickthree.addEventListener('click', function () {
  var nb = clickthree.getAttribute('rel');
  if (nb == 0) {
    clickthree.innerHTML = '<i class="icofont-rounded-up"></i>';
    third.classList.remove('hide-block');
    third.classList.add('show-block');
    clickthree.setAttribute('rel', '1');
  }
  else {
    clickthree.innerHTML = '<i class="icofont-rounded-down"></i>';
    third.classList.remove('show-block');
    third.classList.add('hide-block');
    clickthree.setAttribute('rel', '0');
  }

})