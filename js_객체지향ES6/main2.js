



/**
 * ๐getter/ setter  
 * get: return์ด ์์ด์ผํจ
 * set: param์ด ์์ด์ผํจ
*/

let setPeople = {
  name : 'Kim',
  age : 30,
  set setAge(๋์ด){
    this.age = parseInt(๋์ด)
  }
}
setPeople.setAge = 40; //set ํค์๋๋ฅผ ์ถ๊ฐํ๋ฉด ์ด๋ ๊ฒ ํจ์๋ฅผ ์ฌ์ฉ๊ฐ๋ฅ

var getPeople = {
  name : 'Kim',
  age : 30,
  get nextAge(){
    return  this.age + 1  
  }
}
console.log( getPeople.nextAge ) //get ํค์๋๋ฅผ ์ถ๊ฐํ๋ฉด ์ด๋ ๊ฒ ํจ์๋ฅผ ์ฌ์ฉ๊ฐ๋ฅ

//class์์ get, set์ฌ์ฉ
class ์ฌ๋ {
  constructor(){
    this.name = 'Park';
    this.age = 20;
  }
  get nextAge(){
    return this.age + 1
  }
  set setAge(๋์ด){
    this.age = ๋์ด;
  }
}

let ์ฌ๋1 = new ์ฌ๋();

// get/set ์ฐ์ต๋ฌธ์  
// โ ์ฐ์ต 1
class Dog{
  constructor(type,color){
    this.type = type,
    this.color = color
  }
  ํ์ด๋จน๊ธฐ(){
    if( this instanceof Cat) { // a instanceof b: a๊ฐ b๋ก๋ถํฐ ์์ฑ๋ ์ค๋ธ์ ํธ์ธ์ง ์๋์ง true/false
      this.age++
    }
  }
}
// โ ์ฐ์ต 2
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
let cat = new Cat('์ฝ์', 'brown', 5)
let dog = new Dog('๋งํฐ์ฆ', 'white')


console.log(cat.agePlus);
console.log(dog.agePlus);

/**
 *  ๐Destructing
*/

// ์๋ ์ ์ธ, ๊ฐ ๋นผ๋ด๋ ๋ฐฉ๋ฒ
let array = [2,3,4]
let first = array[0]
let second = array[1]
// Destructing๋ฌธ๋ฒ์ผ๋ก ์์ฝํ๋ฉด ์๋ ์ฝ๋์
let [a,b,c] = [2,3,4]


// ์๋ ์ ์ธ, ๊ฐ ๋นผ๋ด๋ ๋ฐฉ๋ฒ
let object = { name : 'kim', age : 30 } 
let first1 = object.name

// Destructing๋ฌธ๋ฒ์ผ๋ก ์์ฝํ๋ฉด ์๋ ์ฝ๋์
let { name : d, age : f } = { name : 'kim', age : 30 } 

// {} ์ด๋ ๊ฒ ๋ฃ์ ์๋ ์์
var hello = 'hi';
var age = 30;
var obj = { hello, age }

// โ ์ฐ์ต 1 : {}์์ ๋ณ์ ๋นผ๋ด๊ธฐ
let ์ ์ฒด์ ๋ณด = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["์์ Large", "๋ฐ์ง 30์ธ์น"],
};

let {
  body: {
    height,
    weight
  },
  size: [ ์์, ํ์ ]
} = ์ ์ฒด์ ๋ณด;

/**
 * // ๐promise ์ฐ์ต๋ฌธ์ฌ
*/

// โ ์ฐ์ต 1
let imgLoading = new Promise((์ฑ๊ณต, ์คํจ)=>{
  let img = document.getElementById('test');
  img.addEventListener('load', () => {
    ์ฑ๊ณต();
  });
  img.addEventListener('error', () => {
    ์คํจ();
  });
});


imgLoading.then(()=>{
  console.log('์ฑ๊ณต');
}).catch(()=>{
  console.log('์คํจ');
})

// http://codingapple1.github.io/hello.txt

// โ ์ฐ์ต 2
let btnPromise = document.getElementById('btnPromise');

async function btn() {
  let btnPromise = new Promise((์ฑ๊ณต, ์คํจ) => {
    btnPromise.addEventListener('click', ()=> {
      ์ฑ๊ณต('์ฑ๊ณตํ์ด์')
    })
  })
  let result = await btnPromise();
  console.log(result);
}

btn();

