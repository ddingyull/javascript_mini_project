let mainBtn = document.querySelectorAll('.tab-button')
let text = document.querySelectorAll('.tab-content')
let list = document.querySelector('.list');

// console.log(mainBtn, text);

  // 버전1) 함수로 만들어서 위 코드양 줄이기 
// for(let i = 0; i < mainBtn.length; i++) {
//   mainBtn[i].addEventListener('click', () => {
//     tabOpen(i)
//   })}


// 버전2) 이벤트버블링을 고려하여 코드양 줄이기
console.log(list);
list.addEventListener('click', (e) => {
  tabOpen(e.target.dataset.id)
  console.log(tabOpen(e.target.dataset.id));
}
)

function tabOpen(tab){
  for(let j = 0; j < mainBtn.length; j++) {   // tab
    mainBtn[j].classList.remove('orange');
  }
  mainBtn[tab].classList.add('orange');
  
  for(let j = 0; j < mainBtn.length; j++) {    // tab아래 내용
    text[j].classList.remove('show');
  }
  text[tab].classList.add('show')
}
