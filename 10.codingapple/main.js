/**
 * [🍯 javascript 꿀팁들]
 * 요소 가져오는 셀럭터들~! 
 * 1) querySelector : . # 태그 등 어떤 걸 불러오는지 표기해서 가져올 것
 * 2) getElementsByClassName('클래스이름')[0] : 인덱싱을 통해 몇번째 클래스인지 지어해줄것 
 * 3) getElementById : id만 가져올 수 있음 
 * 4) querySelectorAll : 해당하는 클래스 또는 아이디 여러개 한번에 가져오기 
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
loginBtn.addEventListener('click', () => {
  modal.classList.add('modalOn')
})