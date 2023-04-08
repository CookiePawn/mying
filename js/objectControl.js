var object = document.querySelectorAll('.object');
var div = document.querySelector('.objectDiv');
var category = document.querySelectorAll('.enterDiv');
var cgDiv = document.querySelector('.categoryDiv');


window.addEventListener('resize', ()=> {
  if(div.clientWidth > 1250) {
    for(let i=0; i <= object.length; i++) {
        object[i].style.width = '17%';
        object[i].style.margin = '1.5%';
    }
  }
  else if(div.clientWidth <= 1250 && div.clientWidth > 850) {
    for(let i=0; i < object.length; i++) {
      object[i].style.width = '20%';
      object[i].style.margin = '2.4%';
    }
  }
  else if(div.clientWidth <= 850 && div.clientWidth > 500) {
    for(let i=0; i < object.length; i++) {
      object[i].style.width = '30%';
      object[i].style.margin = '1.6%';
    }
  }
  else if(div.clientWidth <= 500) {
    for(let i=0; i < object.length; i++) {
      object[i].style.width = '40%';
      object[i].style.margin = '5%';
    }
  }







  

  if(cgDiv.clientWidth <= 140) {
    for(let i=0; i < category.length; i++) {
      category[i].style.width = '90%';
      category[i].style.margin = '5%';
    }
  }
  else if(cgDiv.clientWidth > 140) {
    for(let i=0; i < category.length; i++) {
      category[i].style.width = '40%';
      category[i].style.margin = '5%';
    }
  }
})



