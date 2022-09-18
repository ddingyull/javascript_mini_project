// js를 보다 엄격하게 사용할 때 작성하는 선언 strict mode
'use strict';

/**
 *📍 this 1번
 * 그냥 쓰거나 일반 함수 안에서 쓰면 {window} 
 * window? 기본 함수들이 들어있는 object를 의미함 = 전역 object
 * 오브젝트 내 함수에서 쓰면 -> 그 함수를 가지고 있는 오브젝트를 의미함
 * function함수일 때만 적용, arrow함수일 때는 함수밖에 있는 this 그대로 사용
 * 
 *📍 this 2번, 3번
 * constructor : 반복 생성하는 기계를 의미하고
 * instance : 위의 기계에서 새로 생성되는 object를 의미함
 * 
 *📍 this 4번
 * addEventListener : e.currentTarget 곧 이벤트가 동작하고 있는 곳을 의미 (e라는 파라미터 필요)
 * 
 * 📍 함수를 만드는 이유 
 * 1. 코드들의 기능을 묶고 싶을 때
 * 2. 입출력 기계를 만들고 싶을 때
 * */

// this & arrow function 연습문제 
// ✅ 연습 1
let people = {
  name: '손흥민',
  sayHi : function () {
    console.log('안녕 나는' + this.name);
  }
}

people.sayHi();

// ✅ 연습 2
let arr = {
  data : [1,2,3,4,5]
}

arr.mul = function() {
  let result = 0;
  this.data.forEach(ele => {
    result = result + ele;
  });
  console.log(result);
}
arr.mul(arr.data);

// ✅ 연습 3
let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
  setTimeout(() => {
    console.log(this.innerHTML)
  }, 1000)
});

/**
 *  변수란?(variable)
 * 
 * 📍 var
 *  재선언 O / 재할당 O / 범위: function 안에서
 * 📍 let
 *  재선언 X / 재할당 O / 범위: {} 안에서
 * 📍 const
 *  재선언 X / 재할당 X / 범위: {} 안에서
 *  단 {}, [] 안의 내용 재할당은 가능함 
 *  {},[]도 안되게 하려면 object.freeze(오브젝트이름);이라고하면 변경 아예안됨
 * 📍 호이스팅
 *   : 변수를 만나면 변수 범위 맨 위로 끌고오는 현상
 * 📍 전역변수 
 *   : 모든 곳에서 쓸 수 있는 변수
 *   : 범위 안에 만들었을 경우 지역변수라고 칭함
 *   : window.변수
 * 
*/

// 변수(variable) 연습문제 
// ✅ 연습 1 : error
// let은 호이스팅이 일어나더라도 err처리로 막고 있음(var은 undefined가 나올 듯)

// ✅ 연습 2 : undefined
함수();
function 함수() {
  console.log(안녕);
  var 안녕 = 'hello!';
}

// ✅ 연습 3
let a = 1;
var 함수 = function() {
  a = 2;
}
console.log(a);

// ✅ 연습 4
let c = 1;
var d = 2;
window.c = 3;
window.d = 4;
console.log(c, d, c+d);

// ✅ 연습 5
// i를 var로 선언했을 경우 for문 완료 후 전역변수 형태로 "var i = 5;"라고 숨겨져서 남아있기 때문에 계속 5가 출력됨
// let은 for 함수 안에서 선언되기 때문 
// for(let i = 1; i<6; i++) {
//   setTimeout( () => {console.log(i)}, i*1000 );
// }

let pants = 20;
let socks = 100;
console.log(`바지${pants} 양말${socks}`);

function 해체분석기(letter, variable1, variable2){
  if(variable1 == 0) {
    console.log('다팔렸어요');
  } else {
    console.log(letter[1] + variable1 + letter[0] + variable2); 
  }
}
해체분석기`바지${pants} 양말${socks}`

/**
 * 📍...spread operator : []를 제거해주세요 의미 
*/

// [] 없애기
let letter = 'hello';
console.log(letter); // hello
console.log(...letter); // h e l l o

// [] 합치기
let one = [1,2,3]
let two = [4,5,6]
let oneTwo = [...one, ...two] //[1, 2, 3, 4, 5, 6]

// [] 복사하기 = Deep copy
let hey = [1,2,3];
let yo = hey; // 이렇게 복사하게되면 원본이 손상되면 영향이 있기 때문에 독립적으로 복사애야함 = reference data type
let yoo = [...hey]; // 수정해도 원본에 영향없이 복사할 수 있다 

// {} 합치기
let o1 = { a : 1, b : 2 };
let o2 = { ...o1, c : 3 }; // a : 1, b : 2, c : 3

// {} 복사하기 = Deep copy
let o3 = { a : 1, b : 2 };
let o4 = { ...o3}; // 단, 값중복이 일어날 경우 가장 뒤의 값을 적용되고 앞의 key값은 사라짐

// 함수 파라미터 넣을 때 사용
function 더하기(a,b,c){
  console.log(a+b+c);
}

let abc = [10,20,30]
더하기(...abc)

// 함수 합쳐서 사용하고 싶을 때 사용
let person = {
  hello : () => {
    console.log('안녕');
  }
}

let person2 = {
  name : '손흥민'
}

person.hello.apply(person2, [1,2]) //apply를 사용해서 함수 안의 object가져와서 사용 가능
person.hello.call(person2, 1,2) //파라미터를 []형태로 안넣어도됨 / 요즘 apply에 파라미터 잘 안넣음



