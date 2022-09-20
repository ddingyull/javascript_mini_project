



/**
 * 📍getter/ setter  
 * get: return이 있어야함
 * set: param이 있어야함
*/

let setPeople = {
  name : 'Kim',
  age : 30,
  set setAge(나이){
    this.age = parseInt(나이)
  }
}
setPeople.setAge = 40; //set 키워드를 추가하면 이렇게 함수를 사용가능

var getPeople = {
  name : 'Kim',
  age : 30,
  get nextAge(){
    return  this.age + 1  
  }
}
console.log( getPeople.nextAge ) //get 키워드를 추가하면 이렇게 함수를 사용가능

//class에서 get, set사용
class 사람 {
  constructor(){
    this.name = 'Park';
    this.age = 20;
  }
  get nextAge(){
    return this.age + 1
  }
  set setAge(나이){
    this.age = 나이;
  }
}

let 사람1 = new 사람();

// get/set 연습문제 
// ✅ 연습 1
class Dog{
  constructor(type,color){
    this.type = type,
    this.color = color
  }
  한살먹기(){
    if( this instanceof Cat) { // a instanceof b: a가 b로부터 생성된 오브젝트인지 아닌지 true/false
      this.age++
    }
  }
}
// ✅ 연습 2
class Cat extends Dog{
  constructor(type,color,age){
    super()
    this.type = type,
    this.color = color
    this.age = age
  }
  get agePlus(){
    return this.age + 1
  }
}
let cat = new Cat('코숏', 'brown', 5)
let dog = new Dog('말티즈', 'white')


console.log(cat.agePlus);
console.log(dog.agePlus);

/**
 *  📍Destructing
*/

// 원래 선언, 값 빼내는 방법
let array = [2,3,4]
let first = array[0]
let second = array[1]
// Destructing문법으로 요약하면 아래 코드임
let [a,b,c] = [2,3,4]


// 원래 선언, 값 빼내는 방법
let object = { name : 'kim', age : 30 } 
let first1 = object.name

// Destructing문법으로 요약하면 아래 코드임
let { name : d, age : f } = { name : 'kim', age : 30 } 

// {} 이렇게 넣을 수도 있음
var hello = 'hi';
var age = 30;
var obj = { hello, age }

// ✅ 연습 1 : {}에서 변수 빼내기
let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: {
    height,
    weight
  },
  size: [ 상의, 하의 ]
} = 신체정보;

/**
 * // 📍promise 연습문재
*/

// ✅ 연습 1
let imgLoading = new Promise((성공, 실패)=>{
  let img = document.getElementById('test');
  img.addEventListener('load', () => {
    성공();
  });
  img.addEventListener('error', () => {
    실패();
  });
});


imgLoading.then(()=>{
  console.log('성공');
}).catch(()=>{
  console.log('실패');
})

// http://codingapple1.github.io/hello.txt

// ✅ 연습 2
let btnPromise = document.getElementById('btnPromise');

async function btn() {
  let btnPromise = new Promise((성공, 실패) => {
    btnPromise.addEventListener('click', ()=> {
      성공('성공했어요')
    })
  })
  let result = await btnPromise();
  console.log(result);
}

btn();

