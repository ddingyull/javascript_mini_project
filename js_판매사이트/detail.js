let mainBtn = document.querySelectorAll('.tab-button')
let text = document.querySelectorAll('.tab-content')
let list = document.querySelector('.list');

// console.log(mainBtn, text, list);

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

// select 방법 1 : 클래스를 스위치로 작동
let selectInput = document.querySelectorAll('.form-select')

// selectInput[0].addEventListener('input', (e) => {
//   //let selectValue = selectInput[0].value;를 더 간단하게 적으면 아래 코드임
//   let value = e.currentTarget.value;

//   if( value == '다이어리' ) {
//     selectInput[1].classList.remove('form-hide')
//     let subInput = 
//     `<option>만년형</option><option>22년형</option><option>23년형</option>`;
//     selectInput[1].innerHTML = subInput
//   } 
  
//   else if( value == '볼펜' ) {
//     selectInput[1].classList.remove('form-hide')
//     selectInput[1].innerHTML = ''

// select 방법 2 : html을 생성해서 넣기
//     let subInput = 
//     `<option>red</option><option>blue</option><option>black</option>`;
//     console.log(subInput);
//     // selectInput[1].append(subInput)
//     selectInput[1].innerHTML = subInput
//   } 
  
//   else {
//     selectInput[1].classList.remove('form-hide')
//     let subInput = 
//     `<option>무지</option><option>모눈</option><option>줄형</option>`;
//     selectInput[1].innerHTML = subInput
//   }
// })

// select 방법 3 : 위 코드를 데이터에서 정보 가져와서 더 효율적으로 리팩토링 해보기

let dairy = ['만년형', '22년형', '23년형']
let pens = ['빨강', '파랑', '검정']
let notes = ['무지', '모눈', '줄']

selectInput[0].addEventListener('input', (e) => {
  let value = e.currentTarget.value;

  if( value == '다이어리' ) {
    selectInput[1].classList.remove('form-hide')
    // for(let i = 0; i < dairy.length; i++) {
    //   selectInput[1].innerHTML = diary[i]
    // }
    dairy.forEach((item) => {
      selectInput[1].innerHTML += `<option>${item}</option>`
    })
  } 
  
  else if( value == '볼펜' ) {
    selectInput[1].classList.remove('form-hide')
    selectInput[1].innerHTML = '';
    pens.forEach((item) => {
      selectInput[1].innerHTML += `<option>${item}</option>`
    })
  } 
  
  else {
    selectInput[1].classList.remove('form-hide')
    notes.forEach(item => {
      selectInput[1].innerHTML += `<option>${item}</option>`
    })
  }
})
