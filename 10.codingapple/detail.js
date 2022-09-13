let mainBtn = document.querySelectorAll('.tab-button')
let text = document.querySelectorAll('.tab-content')

console.log(mainBtn, text);

for(let i = 0; i < mainBtn.length; i++) {
  mainBtn[i].addEventListener('click', () => {
    tabOpen(i)
  })}

  // 함수로 만들어서 위 코드양 줄이기 
function tabOpen(tab){
  // tab
  for(let j = 0; j < mainBtn.length; j++) {
    mainBtn[j].classList.remove('orange');
  }
  mainBtn[tab].classList.add('orange');
  
  // tab아래 내용
  for(let j = 0; j < mainBtn.length; j++) {
    text[j].classList.remove('show');
  }
  text[tab].classList.add('show')
}
