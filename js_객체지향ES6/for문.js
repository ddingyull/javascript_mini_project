/** 
 * 📍for 반복문
 * - 코드 여러번 실행할 때 사용
 * - array, object 자료 꺼낼 때 사용
 * 
 * 1) 기본 for : 
 * 2) forEach() : array
 * 3) for ( in ) : object
 *  - enumerable한 것만 반복(셀수 있는)
 *  - 숨겨져있는 데이터를 빼내고 싶을 때 
      Object.getOwnPropertyDescriptor(object1, 'name');
    - 부모의 prototype도 반복
      if(배열.hasOwnProperty(key)){} : 진짜 배열이 가지고 있는 것을 배출하는 메소드(부모꺼는 안나오게)
    - object 자료형에만 사용 (배열은 forEach)

 * 4) for ( of) : iterable
    - array, 문자, arguments, NodeList, map, set 자료형에 사용 (iteravle한 자료형)

*/

const { set } = require('express/lib/application');

let object1 = { name : 'kim', age : 20 }


for (let key in object1) {
  console.log(object1[key]);
}

/**
 * 📍symbol : object의 비밀스런 key값, 주석같은느낌..! 
 * 1. 설명이 같더라도 같은 symbol아님
*/

// weight값은 숨기고 싶을 때
let weight = Symbol('secretW');
let height = Symbol('secretH');

let person = { name : 'kim', [height] : 50 };
person.weight = 100;
person[weight] = 200;

console.log(person); //{name: 'kim', weight: 100, Symbol(secret): 100}

// one != two 설명이 같아도 같은 심볼은 아니다
let one = Symbol('설명1')
let two = Symbol('설명2')

// 전역심볼 만드는 법 for
let 전역심볼 = Symbol.for('설명1');

/**
 * 📍map
 * map : 
 *  - key : 원래는 문자만 가능했지만 {}, [] 모든 자료형 가능
 *  - value 형태
 *  - 자료간의 연관성을 표현하기 위해 사용
*/

// let man = new Map();
// map자료형 만드는 법
man.set('name', 'kim') 
man.set('age', '20') //Map(2) {'name' => 'kim', 'age' => '20'}

// map자료 출력하는 법
man.get('age')

//map자료 넣는하는 법
let man = new Map([
  [[1,2,3], 'kim'],
  [age, 20]
])

// map자료 삭제하는 법
man.delete('age')

// map자료 모두 확인하는 법
man.size

// for of 반복문
for (let key of man.keys()) {
  console.log(key);
}

/**
 * 📍set
 * set : 
 *  - 중복 허용 X
*/

// set 중복을 허용하지않음
let 출석부 = ['john', 'tom', 'andy', 'tom']

let 출석부2 = new Set(['john', 'tom', 'andy', 'tom']) 

// set하면 {}안에 들어가기 때문에 벗겨줘야 []로 됨 
출석부 = [...출석부2]

//set자료 넣는하는 법
출석부2.add('sally');

//set자료 삭제하는 법
출석부2.delete('sally');

//set자료 모두 확인하는 법
출석부2.has('sally');

//set자료 모두 확인하는 법
출석부2.size

//set 반복문 돌리기


/**
 * 📍 customElements.define(); : 웹 컨포넌트임, 웹브라우저가 이미 가지고 있는 기능
*/

class 클래스이름 extends HTMLElement {
  // 방법1
  connectedCallback() {
    let name = this.getAttribute('name');
    this.innerHTML = `<input>${name}인풋이에요</input>`
  }
  static get observedAttributes() {
    return ['name']
  }
  attributeChangeCallback(){
    console.log(
      this.getAttribute('name')
    );
  }
  // 방법2 : html생성 속도가 좀 더 빠름
  // let 변수 = document.createElement('input');
  // this.appendChild(변수)
}
customElements.define('컨포넌트 이름', 클래스);

// 위 완료 후 html에 <컨포넌트이름 name="비번"></컨포넌트이름> 넣어주면 끝