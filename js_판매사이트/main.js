/**
 * [🍯 javascript 꿀팁들]
 * <요소 가져오는 셀럭터들~!> 
 * 1) querySelector : . # 태그 등 어떤 걸 불러오는지 표기해서 가져올 것
 * 2) getElementsByClassName('클래스이름')[0] : 인덱싱을 통해 몇번째 클래스인지 지어해줄것 
 * 3) getElementById : id만 가져올 수 있음 
 * 4) querySelectorAll : 해당하는 클래스 또는 아이디 여러개 한번에 가져오기 
 * 
 * <문자 들어있는지 확인하는 방법들~!>
 * 1) 'abc'.includes('ab) : 단, 영어, 한글, 숫자가 1회라도 있는지 등은 확인 X
 * 2) 정규식) /검사할문자/.test('있는지 확인하고싶은 문자열')
 * - /[a-z]/.test('abcd')
 * - /[A-Z]/.test('abcdA')
 * - /[a-zA-Z]/.test('abcdA')
 * - /[ㄱ-ㅎ가-힣]/.test('바보')
 * - /[0-9]/.test('바보')
 * - /\S/.test('바보') : 아무 문자 하나라도 있는가
 * - /^a/.test('a바보') : a로 시작하느지
 * - /a$/.test('a바보') : a로 끝나는지
 * - /(a|b)/.test('a바보') : a 또는 b가 있는지
 * - /\S+@\S+\.\S+/.test('aaa@bbb.ccc') : 이메일 검사
 * 
 * <이벤트리스너 콜백함수에 추가할 수 있는 함수들>
 * 1) e.target: 지금 이벤트리스너가 달린 곳 알려줌(this써도 같음)
 * 2) e.currentTarget: 이벤트 기본 동작을 막아줌
 * 3) e.prevntDefault(): 실행하면 이벤트 기본 동작을 막아줌
 * 4) e.stopPropagation(): 내 상위요소로의 이벤트 버블링 중단해줌
 * 
 * [javascript에서 html 생성하는 법]
 * 
 * - 옛날 방법
 * let a = document.createElement('태그')라고 작성하면 됨 
 * a.innerHTML = '안녕'하면 p태그에 안녕 들어감
 * document.querySelector('클래스명').appendChild(a)하면 변수 a를 자식으로 넣음
 * 
 * - 요즘 방법 1 :html 만들고 insertAdjacentHTML로 넣어주기
 * let a = '<p>안녕</p>'; 
 * document.querySelector('#test').insertAdjacentHTML('beforeend', a);
 * 
 * - 요즘 방법 2 : 
 * var a = '<p>안녕</p>';
 * document.querySelector('#test').append(a);
 * 
 * [메소드]
 * 1) 문자 정렬하는 메소드 : 배열이름.sort()
 *    문자 역순정렬은 배열이름.reverse() 또는 아래 함수 사용
 * 
 * 2) 숫자 정렬하는 메소드 : 배열이름.sort((a,b) => {return a - b}) 
 *    숫자 역순정렬은 'a - b'를 'b - a'로 변경하면 됨
 * 
 * 3) 원하는 데이터만 뽑아내는 메소드 : 배열이름.filter
 *    let 새로운배열이름 = 배열이름.filter((a) => {return a < 4})(원본 수정 X)
 * 
 * 4) 변혈할 때 사용하는 메소드 : 배열이름.map 
 *    let 새로운배열이름 = 배열이름.map((a) => {return a * 4})(원본 수정 X)
 * 
 * [개발자 도구 application의 storage]
 * local storage : 브라우저 껐다 켜도 계속 저장되어있음, key:value형태, 문자만 저장 가능
 * session storage : 브라우저 껐다 키면 사라짐, key:value형태, 문자만 저장 가능
 * 
 * 사용법
 * - 저장하기: localStorage.setItem('이름', 'kim')
 * - 출력하기: localStorage.getItem('이름') 
 * - 삭제하기: localStorage.removeItem('이름')
 * -  {},[] 넣기 : 
 *    let a = [1,2,3];
 *    let newA = JSON.stringify(a);
 *    localStorage.setItem('num', newA)
 * -  {},[] 꺼내기 : 
 *    let 꺼낸데이터 = localStorage.getItem('num');
 *    JSON.parse(꺼낸데이터)[인덱싱가능];
 * 
 * mousedown, mouseup, mousemove 
 * */ 


// <alertbox js>
let alert_box = document.querySelector('.alert_box')

// alert box 만들기 (onClick으로 넣었음)
function alert(params) {
  alert_box.style.display= params
}

// 버튼 클릭에 따라 다른 alert box를 보여주기
function alerts(params1, params2){
  alert_box.style.display= params1
  alert_box.innerHTML = params2
}

//⬆️ 위 코드에서 onClick안써서 기능 추가하기
// let idBtn = document.querySelector('.idBtn')
//   idBtn.addEventListener('click', () => {
//     alert_box.style.display= 'block'
//     alert_box.innerHTML = 'ID를 입력해주세요'
//   })

// <submenu js>
// nav bar 아이콘 클릭하면 서브메뉴 보이게하기 
let menuToggler = document.querySelector('.navbar-toggler')
let menuShow = document.querySelector('.list-group')
  menuToggler.addEventListener('click', ()=>{
    menuShow.classList.toggle('show')
  })

// login버튼 누르면 모달창 나오게하기
let loginBtn = document.getElementById('login')
let modal = document.querySelector('.black-bg')
// 모달창 띄우기
loginBtn.addEventListener('click', () => {
  modal.classList.add('modalOn')
})
// 모달창 닫기 : 닫기 버튼 클릭했을 경우
document.querySelector('.modalClose')
.addEventListener('click', () => {
  modal.classList.remove('modalOn')
})
// 모달창 닫기 : 검은 배경 클릭해서 닫을 경우
document.querySelector('.black-bg')
.addEventListener('click', (e)=>{
  if(e.target == document.querySelector('.black-bg'))
  //  if(e.target == this) : function함수 썼을 경우 this사용 가능
  modal.classList.remove('modalOn')
})


// form
// 전송버튼 누르면 input에 입력한 값이 공백이면 알림창 띄우기????
let submit = document.querySelector('.submit')
console.log(submit);
submit.addEventListener('click', () => {
  if(document.getElementById('email').value == ''){
    alert('id값을 작성해주시길 바랍니다')
  }

  if(/\S+@\S+\.\S+/.test('aaa@bbb.ccc')){
    alert('이메일 형식 아닙니다')
  }

  if(document.getElementById('email').value.length == ''){
    alert('id값을 작성해주시길 바랍니다')
  }
})


// dark, light모두
let count = 0;
let mode = document.querySelector('.badge')
mode.addEventListener('click', () => {
  count += 1;
  if(count % 2 == 0) {
    mode.innerHTML = 'dark'
  } else {
    mode.innerHTML = 'light'
  }
  // mode.classList.add('dark')
})

// setTimeout

// 5초 뒤에 사라지게 만들기 (외부에서 만든 함수를 넣어서 사용하는 것도 가능 (함수()가아니라 함수만 쓰면 됨)
// setTimeout(() => {
//   document.querySelector('.setTimeoutAlert').style.display = 'none' //javascript 함수
//   // $('.setTimeoutAlert').hide() //jQuery함수 
// }, 5000)

let countNum = 5;
setInterval(() => {
  countNum -= 1;
  if(0 < countNum) {
    document.querySelector('.num').innerHTML = countNum
  } else if(0 == countNum){
    document.querySelector('.setTimeoutAlert').style.display = 'none'
  }
}, 1000)

// 5초마다 사라지게 만들기 
// setInterval(()=>{
//   document.querySelector('.setTimeoutAlert').style.display = 'none' //보통 setInerval에 이런 코드 안쓰는듯
// }, 1000)

// carousel : 버튼에 따라 이미지 변화되는 애니메이션 기능
let slideContainer = document.querySelector('.slide-container')
let slideBox = document.querySelector('.slide-box');
let slide1 = document.querySelector('.slide-1')
let slide2 = document.querySelector('.slide-2')
let slide3 = document.querySelector('.slide-3')
let slideNext = document.querySelector('.slide-next')
let slideForward = document.querySelector('.slide-forward')


slide1.addEventListener('mouseover', () => {
  slideContainer.style.transform = 'translateX(0vw)'
})
slide2.addEventListener('mouseover', () => {
  slideContainer.style.transform = 'translateX(-100vw)'
})
slide3.addEventListener('mouseover', () => {
  slideContainer.style.transform = 'translateX(-200vw)'
})

// carousel : forward 버튼 기능
// let present = 1;

// slideNext.addEventListener('click', () => {
//   if(present == 1) {
      // slideContainer.style.transform = 'translateX(-100vw)'
//     present += 1;
//   } else if(present == 2) {
      // slideContainer.style.transform = 'translateX(-200vw)'
//     present += 1;
//   } else{
      // slideContainer.style.transform = 'translateX(0vw)'
//     present = 1
//   }
// })

// 위 코드 효율적으로 수정해보기
let present = 0;
slideNext.addEventListener('click', () => {
  slideContainer.style.transform = `translateX(-${present}00vw)`
  if(present < 2) {
    present += 1;
  } else {
    present = 0;
  }
})

// carousel : next 버튼 기능
slideForward.addEventListener('click', () => {
  if(present == 1) {
    slideContainer.style.transform = 'translateX(-200vw)'
    present += 2;
  } else if(present == 3) {
    slideContainer.style.transform = 'translateX(-100vw)'
    present -= 1;
  } else {
    slideContainer.style.transform = 'translateX(0vw)'
    present -= 1;
  }
})

// carousel : mouse 드래그로 다음 그림 보기 
slideBox.addEventListener('mousemove', (e)=>{
  console.log(e.clientX);
})
// carousel : mouse 드래그로 다음 그림으로 넘어가기


// scroll하면 로고 작아지도록 만들기
window.addEventListener('scroll', () => {
  if(window.scrollY > 218) {
    document.querySelector('.navbar-brand').style.fontSize = '20px'
  } else {
    document.querySelector('.navbar-brand').style.fontSize = '30px'
  }
})

// 이용약관 다 읽었을 경우 체크할 수 있도록 만들기
document.querySelector('.promise').addEventListener('scroll', () => {
  let text = document.querySelector('.promise')
  let scrollHow = text.scrollTop;
  let scrollHeight = text.scrollHeight;
  let height = text.clientHeight;

  if(scrollHow + height > scrollHeight - 10) {
    alert('이용약관 모두 확인하였음')
  } else if(scrollHow + height > scrollHeight - 8) {
    alert('이용약관이 완성되었습니다.')
  }
})
