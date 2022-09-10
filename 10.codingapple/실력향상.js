//369게임
function game369(num) {
  if( num % 3 === 0) {
    console.log('박수');
  } else if(num % 9 === 0) {
    console.log('박수박수');
  } else {
    console.log('통과');
  }
}


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

pass(30, 100)

// 3,6,9로 끝나는 숫자에 '박수' 출력

// 합격판독기에서 0, 100사이 숫자가 아닌걸 입력하면 alert띄우기