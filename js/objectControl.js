var object = document.querySelectorAll('.object');
var objectWidth = object[0].clientWidth;





const $target = object[0];

const observer = new ResizeObserver((entries) => {
  // 관찰 중인 배열 형식의 객체 리스트
  entries.forEach((entry) => {
    if(objectWidth >= 250) {
        for(let i=0; i <= object.length; i++) {
            object[i].style.width = '17%';
            object[i].style.margin = '1.5%';
        }
    }
  });
});

// 크기변화를 관찰할 요소지정
observer.observe($target);




