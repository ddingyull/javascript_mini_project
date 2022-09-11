//369게임
function game39(num) {
  if( num % 3 === 0) {
    console.log('박수');
  } else if(num % 9 === 0) {
    console.log('박수박수');
  } else {
    console.log('통과');
  }
}

// 3,6,9로 끝나는 숫자에 '박수' 출력
function game369(num) {
  let numLast = num.slice(-1);
  if( numLast === '3' || numLast === '6' || numLast === '9' ) {
    console.log('박수');
  } else {
    console.log('통과');
  }
}
game369('26')

//공인중개사 합격여부 
function pass(개론, 민법) {
  if( 개론 + 민법 > 120 && 개론 > 40 && 민법 > 40){
    console.log('합격'); 
  } else if (100 < 개론 || 0 > 개론 || 100 < 민법 || 0 > 민법){
    alert('장난치지마')
  }else {
    console.log('불합격');
  }
}

// 합격판독기에서 0, 100사이 숫자가 아닌걸 입력하면 alert띄우기

// 나이 : 재할당 가능 변수,  출신지역 : 재할당 불가능 변수에 저장하기
let age = 29
const place = '서울'

// 2/3만큼 2번 리필해주는 카페 
let first = 360;
let repeat = first + (first * 2/3) + ((first * 2/3) * 2/3) 

console.log(repeat);

// input답을 적고 제출했을 때 작동
let input = document.querySelector('#send-answer')
let answer = document.querySelector('#answer')
let count = 0;
input.addEventListener('click', () => {
  count += 1;
  if(answer.value == '1335') {
    alert('성공')
  } else if(count >= 3 && answer.value != '1335') {
    alert('멍청아')
  }
})

// 분, 초를 차례로 입력하면 ms단위로 바꿔주는 함수만들기
function changeMS (min, sec) {
  let result = (min * 60 + sec) * 1000
  return result
}

// 가격을 파라미터로 입력하면 10%할인가를 알려주는 함수만들기
// 단, 첫구매일 경우 1.5달러 할인
function sale(price, a) {
  let salePrice = price * 0.1
  if(true) {
    salePrice = salePrice - 1.5
  }
  return salePrice
}