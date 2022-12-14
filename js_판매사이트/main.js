/**
 * [๐ฏ javascript ๊ฟํ๋ค]
 * <์์ ๊ฐ์ ธ์ค๋ ์๋ญํฐ๋ค~!> 
 * 1) querySelector : . # ํ๊ทธ ๋ฑ ์ด๋ค ๊ฑธ ๋ถ๋ฌ์ค๋์ง ํ๊ธฐํด์ ๊ฐ์ ธ์ฌ ๊ฒ
 * 2) getElementsByClassName('ํด๋์ค์ด๋ฆ')[0] : ์ธ๋ฑ์ฑ์ ํตํด ๋ช๋ฒ์งธ ํด๋์ค์ธ์ง ์ง์ดํด์ค๊ฒ 
 * 3) getElementById : id๋ง ๊ฐ์ ธ์ฌ ์ ์์ 
 * 4) querySelectorAll : ํด๋นํ๋ ํด๋์ค ๋๋ ์์ด๋ ์ฌ๋ฌ๊ฐ ํ๋ฒ์ ๊ฐ์ ธ์ค๊ธฐ 
 * 
 * <๋ฌธ์ ๋ค์ด์๋์ง ํ์ธํ๋ ๋ฐฉ๋ฒ๋ค~!>
 * 1) 'abc'.includes('ab) : ๋จ, ์์ด, ํ๊ธ, ์ซ์๊ฐ 1ํ๋ผ๋ ์๋์ง ๋ฑ์ ํ์ธ X
 * 2) ์ ๊ท์) /๊ฒ์ฌํ ๋ฌธ์/.test('์๋์ง ํ์ธํ๊ณ ์ถ์ ๋ฌธ์์ด')
 * - /[a-z]/.test('abcd')
 * - /[A-Z]/.test('abcdA')
 * - /[a-zA-Z]/.test('abcdA')
 * - /[ใฑ-ใ๊ฐ-ํฃ]/.test('๋ฐ๋ณด')
 * - /[0-9]/.test('๋ฐ๋ณด')
 * - /\S/.test('๋ฐ๋ณด') : ์๋ฌด ๋ฌธ์ ํ๋๋ผ๋ ์๋๊ฐ
 * - /^a/.test('a๋ฐ๋ณด') : a๋ก ์์ํ๋์ง
 * - /a$/.test('a๋ฐ๋ณด') : a๋ก ๋๋๋์ง
 * - /(a|b)/.test('a๋ฐ๋ณด') : a ๋๋ b๊ฐ ์๋์ง
 * - /\S+@\S+\.\S+/.test('aaa@bbb.ccc') : ์ด๋ฉ์ผ ๊ฒ์ฌ
 * 
 * <์ด๋ฒคํธ๋ฆฌ์ค๋ ์ฝ๋ฐฑํจ์์ ์ถ๊ฐํ  ์ ์๋ ํจ์๋ค>
 * 1) e.target: ์ง๊ธ ์ด๋ฒคํธ๋ฆฌ์ค๋๊ฐ ๋ฌ๋ฆฐ ๊ณณ ์๋ ค์ค(this์จ๋ ๊ฐ์)
 * 2) e.currentTarget: ์ด๋ฒคํธ ๊ธฐ๋ณธ ๋์์ ๋ง์์ค
 * 3) e.prevntDefault(): ์คํํ๋ฉด ์ด๋ฒคํธ ๊ธฐ๋ณธ ๋์์ ๋ง์์ค
 * 4) e.stopPropagation(): ๋ด ์์์์๋ก์ ์ด๋ฒคํธ ๋ฒ๋ธ๋ง ์ค๋จํด์ค
 * 
 * [javascript์์ html ์์ฑํ๋ ๋ฒ]
 * 
 * - ์๋  ๋ฐฉ๋ฒ
 * let a = document.createElement('ํ๊ทธ')๋ผ๊ณ  ์์ฑํ๋ฉด ๋จ 
 * a.innerHTML = '์๋'ํ๋ฉด pํ๊ทธ์ ์๋ ๋ค์ด๊ฐ
 * document.querySelector('ํด๋์ค๋ช').appendChild(a)ํ๋ฉด ๋ณ์ a๋ฅผ ์์์ผ๋ก ๋ฃ์
 * 
 * - ์์ฆ ๋ฐฉ๋ฒ 1 :html ๋ง๋ค๊ณ  insertAdjacentHTML๋ก ๋ฃ์ด์ฃผ๊ธฐ
 * let a = '<p>์๋</p>'; 
 * document.querySelector('#test').insertAdjacentHTML('beforeend', a);
 * 
 * - ์์ฆ ๋ฐฉ๋ฒ 2 : 
 * var a = '<p>์๋</p>';
 * document.querySelector('#test').append(a);
 * 
 * [๋ฉ์๋]
 * 1) ๋ฌธ์ ์ ๋ ฌํ๋ ๋ฉ์๋ : ๋ฐฐ์ด์ด๋ฆ.sort()
 *    ๋ฌธ์ ์ญ์์ ๋ ฌ์ ๋ฐฐ์ด์ด๋ฆ.reverse() ๋๋ ์๋ ํจ์ ์ฌ์ฉ
 * 
 * 2) ์ซ์ ์ ๋ ฌํ๋ ๋ฉ์๋ : ๋ฐฐ์ด์ด๋ฆ.sort((a,b) => {return a - b}) 
 *    ์ซ์ ์ญ์์ ๋ ฌ์ 'a - b'๋ฅผ 'b - a'๋ก ๋ณ๊ฒฝํ๋ฉด ๋จ
 * 
 * 3) ์ํ๋ ๋ฐ์ดํฐ๋ง ๋ฝ์๋ด๋ ๋ฉ์๋ : ๋ฐฐ์ด์ด๋ฆ.filter
 *    let ์๋ก์ด๋ฐฐ์ด์ด๋ฆ = ๋ฐฐ์ด์ด๋ฆ.filter((a) => {return a < 4})(์๋ณธ ์์  X)
 * 
 * 4) ๋ณํํ  ๋ ์ฌ์ฉํ๋ ๋ฉ์๋ : ๋ฐฐ์ด์ด๋ฆ.map 
 *    let ์๋ก์ด๋ฐฐ์ด์ด๋ฆ = ๋ฐฐ์ด์ด๋ฆ.map((a) => {return a * 4})(์๋ณธ ์์  X)
 * 
 * [๊ฐ๋ฐ์ ๋๊ตฌ application์ storage]
 * local storage : ๋ธ๋ผ์ฐ์  ๊ป๋ค ์ผ๋ ๊ณ์ ์ ์ฅ๋์ด์์, key:valueํํ, ๋ฌธ์๋ง ์ ์ฅ ๊ฐ๋ฅ
 * session storage : ๋ธ๋ผ์ฐ์  ๊ป๋ค ํค๋ฉด ์ฌ๋ผ์ง, key:valueํํ, ๋ฌธ์๋ง ์ ์ฅ ๊ฐ๋ฅ
 * 
 * ์ฌ์ฉ๋ฒ
 * - ์ ์ฅํ๊ธฐ: localStorage.setItem('์ด๋ฆ', 'kim')
 * - ์ถ๋ ฅํ๊ธฐ: localStorage.getItem('์ด๋ฆ') 
 * - ์ญ์ ํ๊ธฐ: localStorage.removeItem('์ด๋ฆ')
 * -  {},[] ๋ฃ๊ธฐ : 
 *    let a = [1,2,3];
 *    let newA = JSON.stringify(a);
 *    localStorage.setItem('num', newA)
 * -  {},[] ๊บผ๋ด๊ธฐ : 
 *    let ๊บผ๋ธ๋ฐ์ดํฐ = localStorage.getItem('num');
 *    JSON.parse(๊บผ๋ธ๋ฐ์ดํฐ)[์ธ๋ฑ์ฑ๊ฐ๋ฅ];
 * 
 * mousedown, mouseup, mousemove 
 * */ 


// <alertbox js>
let alert_box = document.querySelector('.alert_box')

// alert box ๋ง๋ค๊ธฐ (onClick์ผ๋ก ๋ฃ์์)
function alert(params) {
  alert_box.style.display= params
}

// ๋ฒํผ ํด๋ฆญ์ ๋ฐ๋ผ ๋ค๋ฅธ alert box๋ฅผ ๋ณด์ฌ์ฃผ๊ธฐ
function alerts(params1, params2){
  alert_box.style.display= params1
  alert_box.innerHTML = params2
}

//โฌ๏ธ ์ ์ฝ๋์์ onClick์์จ์ ๊ธฐ๋ฅ ์ถ๊ฐํ๊ธฐ
// let idBtn = document.querySelector('.idBtn')
//   idBtn.addEventListener('click', () => {
//     alert_box.style.display= 'block'
//     alert_box.innerHTML = 'ID๋ฅผ ์๋ ฅํด์ฃผ์ธ์'
//   })

// <submenu js>
// nav bar ์์ด์ฝ ํด๋ฆญํ๋ฉด ์๋ธ๋ฉ๋ด ๋ณด์ด๊ฒํ๊ธฐ 
let menuToggler = document.querySelector('.navbar-toggler')
let menuShow = document.querySelector('.list-group')
  menuToggler.addEventListener('click', ()=>{
    menuShow.classList.toggle('show')
  })

// login๋ฒํผ ๋๋ฅด๋ฉด ๋ชจ๋ฌ์ฐฝ ๋์ค๊ฒํ๊ธฐ
let loginBtn = document.getElementById('login')
let modal = document.querySelector('.black-bg')
// ๋ชจ๋ฌ์ฐฝ ๋์ฐ๊ธฐ
loginBtn.addEventListener('click', () => {
  modal.classList.add('modalOn')
})
// ๋ชจ๋ฌ์ฐฝ ๋ซ๊ธฐ : ๋ซ๊ธฐ ๋ฒํผ ํด๋ฆญํ์ ๊ฒฝ์ฐ
document.querySelector('.modalClose')
.addEventListener('click', () => {
  modal.classList.remove('modalOn')
})
// ๋ชจ๋ฌ์ฐฝ ๋ซ๊ธฐ : ๊ฒ์ ๋ฐฐ๊ฒฝ ํด๋ฆญํด์ ๋ซ์ ๊ฒฝ์ฐ
document.querySelector('.black-bg')
.addEventListener('click', (e)=>{
  if(e.target == document.querySelector('.black-bg'))
  //  if(e.target == this) : functionํจ์ ์ผ์ ๊ฒฝ์ฐ this์ฌ์ฉ ๊ฐ๋ฅ
  modal.classList.remove('modalOn')
})


// form
// ์ ์ก๋ฒํผ ๋๋ฅด๋ฉด input์ ์๋ ฅํ ๊ฐ์ด ๊ณต๋ฐฑ์ด๋ฉด ์๋ฆผ์ฐฝ ๋์ฐ๊ธฐ????
let submit = document.querySelector('.submit')
console.log(submit);
submit.addEventListener('click', () => {
  if(document.getElementById('email').value == ''){
    alert('id๊ฐ์ ์์ฑํด์ฃผ์๊ธธ ๋ฐ๋๋๋ค')
  }

  if(/\S+@\S+\.\S+/.test('aaa@bbb.ccc')){
    alert('์ด๋ฉ์ผ ํ์ ์๋๋๋ค')
  }

  if(document.getElementById('email').value.length == ''){
    alert('id๊ฐ์ ์์ฑํด์ฃผ์๊ธธ ๋ฐ๋๋๋ค')
  }
})


// dark, light๋ชจ๋
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

// 5์ด ๋ค์ ์ฌ๋ผ์ง๊ฒ ๋ง๋ค๊ธฐ (์ธ๋ถ์์ ๋ง๋  ํจ์๋ฅผ ๋ฃ์ด์ ์ฌ์ฉํ๋ ๊ฒ๋ ๊ฐ๋ฅ (ํจ์()๊ฐ์๋๋ผ ํจ์๋ง ์ฐ๋ฉด ๋จ)
// setTimeout(() => {
//   document.querySelector('.setTimeoutAlert').style.display = 'none' //javascript ํจ์
//   // $('.setTimeoutAlert').hide() //jQueryํจ์ 
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

// 5์ด๋ง๋ค ์ฌ๋ผ์ง๊ฒ ๋ง๋ค๊ธฐ 
// setInterval(()=>{
//   document.querySelector('.setTimeoutAlert').style.display = 'none' //๋ณดํต setInerval์ ์ด๋ฐ ์ฝ๋ ์์ฐ๋๋ฏ
// }, 1000)

// carousel : ๋ฒํผ์ ๋ฐ๋ผ ์ด๋ฏธ์ง ๋ณํ๋๋ ์ ๋๋ฉ์ด์ ๊ธฐ๋ฅ
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

// carousel : forward ๋ฒํผ ๊ธฐ๋ฅ
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

// ์ ์ฝ๋ ํจ์จ์ ์ผ๋ก ์์ ํด๋ณด๊ธฐ
let present = 0;
slideNext.addEventListener('click', () => {
  slideContainer.style.transform = `translateX(-${present}00vw)`
  if(present < 2) {
    present += 1;
  } else {
    present = 0;
  }
})

// carousel : next ๋ฒํผ ๊ธฐ๋ฅ
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

// carousel : mouse ๋๋๊ทธ๋ก ๋ค์ ๊ทธ๋ฆผ ๋ณด๊ธฐ 
slideBox.addEventListener('mousemove', (e)=>{
  console.log(e.clientX);
})
// carousel : mouse ๋๋๊ทธ๋ก ๋ค์ ๊ทธ๋ฆผ์ผ๋ก ๋์ด๊ฐ๊ธฐ


// scrollํ๋ฉด ๋ก๊ณ  ์์์ง๋๋ก ๋ง๋ค๊ธฐ
window.addEventListener('scroll', () => {
  if(window.scrollY > 218) {
    document.querySelector('.navbar-brand').style.fontSize = '20px'
  } else {
    document.querySelector('.navbar-brand').style.fontSize = '30px'
  }
})

// ์ด์ฉ์ฝ๊ด ๋ค ์ฝ์์ ๊ฒฝ์ฐ ์ฒดํฌํ  ์ ์๋๋ก ๋ง๋ค๊ธฐ
document.querySelector('.promise').addEventListener('scroll', () => {
  let text = document.querySelector('.promise')
  let scrollHow = text.scrollTop;
  let scrollHeight = text.scrollHeight;
  let height = text.clientHeight;

  if(scrollHow + height > scrollHeight - 10) {
    alert('์ด์ฉ์ฝ๊ด ๋ชจ๋ ํ์ธํ์์')
  } else if(scrollHow + height > scrollHeight - 8) {
    alert('์ด์ฉ์ฝ๊ด์ด ์์ฑ๋์์ต๋๋ค.')
  }
})
