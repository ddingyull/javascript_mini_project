let mainBtn = document.querySelectorAll('.tab-button')
let text = document.querySelectorAll('.tab-content')
let list = document.querySelector('.list');

console.log(mainBtn, text, list);

  // 버전1) 함수로 만들어서 위 코드양 줄이기 
for(let i = 0; i < mainBtn.length; i++) {
  mainBtn[i].addEventListener('click', () => {
    tabOpen(i)
  })}


// 버전2) 이벤트버블링을 고려하여 코드양 줄이기
// console.log(list);
// list.addEventListener('click', (e) => {
//   tabOpen(e.target.dataset.id)
//   // console.log(tabOpen(e.target.dataset.id));
// })

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

// 
let pen = { name : '모나미', price : 3000 }
document.querySelector('.pen_title').innerHTML = pen.name
document.querySelector('.pen_price').innerHTML = pen.price


// select
document.querySelector('.form-select1').addEventListener('input', (e) => {
  let value = e.currentTarget.value;
  if(value == '다이어리'){
    document.querySelector('.form-select2').classList.remove('form-hide')
  }
})