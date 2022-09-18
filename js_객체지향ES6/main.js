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
 * 📍...spread operator : [],{}를 제거해주세요 의미 
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

/**
 * 📍arguments : 모든 파라미터를 출력해줌  단, 옛날문법,,,,💔
 * 📍rest파라미터 : 원하는 파라미터들만 출력할 수 있음, 파라미터 개수 지정안해줘도됨, 단, rest는 가장 마지막에 1번만 가능
*/
function 함수(a,b,c){
  for(let i = 0; i< arguments.length; i++){
    console.log(arguments[i]);
  }
}

function 함수2(a,b, ...rest){
  for(let i = 0; i< rest.length; i++){
    console.log(rest[i]);
  }
}

// spread 연습문제 
// ✅ 연습 1
// ['김','밥', 1,2,3]

// ✅ 연습 2
let q = [1,2,3]
let w = ['you', 'are'];
let e = function(a,b){
  console.log([[...q], ...[...w]][1]);
}
e(q,w);

// ✅ 연습 3
function 함수(a=5, b=a*2){
  console.log(a+b); // 9
  return 10
}
함수(3);

// ✅ 연습 4
function 함수(a=5, b=a*2){
  console.log(a+b); // 15
  return 10
}
함수(undefined, undefined);

// ✅ 연습 5
function array(...rest){
    console.log(rest);
  }
let newArray = array(1,2,3,4,5)
console.log(newArray);

// ✅ 연습 6
let number = [1,2,3,4,5,6,6,7,8,6,5,3]
console.log(Math.max(...number)); 

// ✅ 연습 7
// function sort(...rest){
//   for(let i = 0; i<rest.length; i++){
//     // console.log(...rest[i]);
//     let letter = [...rest[i]]
//     letter.sort()
//     // console.log(letter.sort());
//   }
//   // console.log([...rest].sort());
// }
function sort(rest){
    console.log([...rest].sort().join());
  }

sort('bear')

// ✅ 연습 8
function 글자세기(letter){

  let result = {}; 

  [...letter].forEach((ele) => {
    if(letter[ele] > 0) {
      result[ele] = result[ele] + 1;
    } else {
      result[ele] = 1;
    }
  })
  console.log(result);
}

글자세기('aabbcc')

/**
 * 📍Primitive / Reference data type
 *  Primitive: 변수에 그대로 저장되는 데이터타입 
 *  Reference: {}, [] 자료가 직접 저장되어있지 않음, 저장되어있는 저장소의 위치를 가르키는 화살표가 담겨있음
*/

/**
 * 📍Constructor : 비슷한 {}를 찍어낼 수 있는 문법
*/

let student = { 
  name : 'kim',
  age : 15,
  sayHi(){
    console.log(`안녕하세요 ${student.name}입니다`);
  }
}

function Student(name, age){ // Constructor : 기계 함수를 의미함
  this.name = name,  // => this : 기계에서 새로 생성되는 {}, instance라고 함
  this.age = age,
  this.sayHi= ()=>{
    console.log(`안녕하세요 ${student.name}입니다`);
  }
}

let student1 = new Student('yurim', 44);
let student2 = new Student();

student1.sayHi('유림')

// constructor
// ✅ 연습 1

function Store(name, price){
  this.name = name,
  this.price = price
  this.tax = price * .1 
}

let product1 = new Store('shirt', 60000);
let product2 = new Store();

console.log(product1.tax);

/**
 * 📍Prototype : constructor를 만들면 prototype이라는 공간이 자동으로 생김 => 유전자라고 볼 수 있음, 함수만 가능
 * 동작원리 
 * 1) 직접 데이터가 있는가?
 * 2) 부모한테 데이터가 있는가? 순서대로 확인 후 출력됨 
 * 때문에 본인에게 없어도 부모에게 있을 경우 출력될 수 있음 
 * 
 * toString()을 붙여주면 {}를 글자로 바꿔줌
 * __proto__ : 부모를 찾고 싶을 때 사용하는 메소드
 * Object.getPrototypeOf(자식)
*/

let arr1 = [1,2,3]
let arr2 = new Array(1,2,3)

let 부모 = {name : 'kim'};
let 자식 = {};
// 자식.__proto__ = 부모; 

// Prototype
// ✅ 연습 1

// let 학생1 = { name : 'kim', age : 20 }
// let 학생2 = { name : 'kang', age : 12 }
// let 학생3 = { name : 'song', age : 35 }

function Students(name, age){ 
  this.name = name,  
  this.age = age
  // this.sayHi= ()=>{
  //   console.log(`안녕하세요 ${name}입니다`);
  // }
}

Students.prototype.sayHi = function (){
  console.log(`안녕 나는 ${students.name}이야`);
}

let 학생1 = new Students('kim', 20)
let 학생2 = new Students('kang', 12)
let 학생3 = new Students('song', 35)

console.log(학생1.sayHi());
console.log(학생2);
console.log(학생3);

// 방법 2) Object.create(프로토타입object);
let 부모1 = { name : 'kim', age : 50 };
let 자식1 = Object.create(부모1); //prototype을 부모로 해주세요라는 의미이기 때문에 data가 바로 보여지진않지만 데이터 가져올 수 있음
자식1.age = 20; // 그 뒤로 특정 key값을 바꿀 수 있음 
let 손자 = Object.create(자식);

// 방법 3 constructor 만드는 새로운 방법 
class 부모2 {
  constructor(params) {
    this.name = 'kim';
    this.sayHi = function(){console.log('hello')}
  }
  sayHi = function(){console.log('hello')}
}
let 자식2 = new 부모2(params);

// 📍extends : class 복사
class 할아버지 {
  constructor(name, name1) {
    this.name = name;
    this.name1 = name1;
    // this.sayHi = function(){console.log('hello')}
  }
  sayHi = function(){console.log('hello')}
}
// let 할아버지1 = new 할아버지(params);
class 아버지 extends 할아버지 {
  constructor(name, name1){ //할아버지 class의 name 파라미터를 그대로 받아오기 위해 super함수에 넣어주기
    super(name, name1); //extends로 상속받으려면 super라는 함수를 넣어줘야 함 (단순 외우기,,)
    this.name = 50;
  }
  sayHi = function(){console.log('hello')}
  // super.sayHi(); //부모의 sayHi함수를 실행할 때 사용, 따로 작성하지 않았다면 가까운 프로토타입의 함수로 출력됨 
};

let 아버지 = new 아버지();



