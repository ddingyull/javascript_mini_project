/** 
 * ๐for ๋ฐ๋ณต๋ฌธ
 * - ์ฝ๋ ์ฌ๋ฌ๋ฒ ์คํํ  ๋ ์ฌ์ฉ
 * - array, object ์๋ฃ ๊บผ๋ผ ๋ ์ฌ์ฉ
 * 
 * 1) ๊ธฐ๋ณธ for : 
 * 2) forEach() : array
 * 3) for ( in ) : object
 *  - enumerableํ ๊ฒ๋ง ๋ฐ๋ณต(์์ ์๋)
 *  - ์จ๊ฒจ์ ธ์๋ ๋ฐ์ดํฐ๋ฅผ ๋นผ๋ด๊ณ  ์ถ์ ๋ 
      Object.getOwnPropertyDescriptor(object1, 'name');
    - ๋ถ๋ชจ์ prototype๋ ๋ฐ๋ณต
      if(๋ฐฐ์ด.hasOwnProperty(key)){} : ์ง์ง ๋ฐฐ์ด์ด ๊ฐ์ง๊ณ  ์๋ ๊ฒ์ ๋ฐฐ์ถํ๋ ๋ฉ์๋(๋ถ๋ชจ๊บผ๋ ์๋์ค๊ฒ)
    - object ์๋ฃํ์๋ง ์ฌ์ฉ (๋ฐฐ์ด์ forEach)

 * 4) for ( of) : iterable
    - array, ๋ฌธ์, arguments, NodeList, map, set ์๋ฃํ์ ์ฌ์ฉ (iteravleํ ์๋ฃํ)

*/

const { set } = require('express/lib/application');

let object1 = { name : 'kim', age : 20 }


for (let key in object1) {
  console.log(object1[key]);
}

/**
 * ๐symbol : object์ ๋น๋ฐ์ค๋ฐ key๊ฐ, ์ฃผ์๊ฐ์๋๋..! 
 * 1. ์ค๋ช์ด ๊ฐ๋๋ผ๋ ๊ฐ์ symbol์๋
*/

// weight๊ฐ์ ์จ๊ธฐ๊ณ  ์ถ์ ๋
let weight = Symbol('secretW');
let height = Symbol('secretH');

let person = { name : 'kim', [height] : 50 };
person.weight = 100;
person[weight] = 200;

console.log(person); //{name: 'kim', weight: 100, Symbol(secret): 100}

// one != two ์ค๋ช์ด ๊ฐ์๋ ๊ฐ์ ์ฌ๋ณผ์ ์๋๋ค
let one = Symbol('์ค๋ช1')
let two = Symbol('์ค๋ช2')

// ์ ์ญ์ฌ๋ณผ ๋ง๋๋ ๋ฒ for
let ์ ์ญ์ฌ๋ณผ = Symbol.for('์ค๋ช1');

/**
 * ๐map
 * map : 
 *  - key : ์๋๋ ๋ฌธ์๋ง ๊ฐ๋ฅํ์ง๋ง {}, [] ๋ชจ๋  ์๋ฃํ ๊ฐ๋ฅ
 *  - value ํํ
 *  - ์๋ฃ๊ฐ์ ์ฐ๊ด์ฑ์ ํํํ๊ธฐ ์ํด ์ฌ์ฉ
*/

// let man = new Map();
// map์๋ฃํ ๋ง๋๋ ๋ฒ
man.set('name', 'kim') 
man.set('age', '20') //Map(2) {'name' => 'kim', 'age' => '20'}

// map์๋ฃ ์ถ๋ ฅํ๋ ๋ฒ
man.get('age')

//map์๋ฃ ๋ฃ๋ํ๋ ๋ฒ
let man = new Map([
  [[1,2,3], 'kim'],
  [age, 20]
])

// map์๋ฃ ์ญ์ ํ๋ ๋ฒ
man.delete('age')

// map์๋ฃ ๋ชจ๋ ํ์ธํ๋ ๋ฒ
man.size

// for of ๋ฐ๋ณต๋ฌธ
for (let key of man.keys()) {
  console.log(key);
}

/**
 * ๐set
 * set : 
 *  - ์ค๋ณต ํ์ฉ X
*/

// set ์ค๋ณต์ ํ์ฉํ์ง์์
let ์ถ์๋ถ = ['john', 'tom', 'andy', 'tom']

let ์ถ์๋ถ2 = new Set(['john', 'tom', 'andy', 'tom']) 

// setํ๋ฉด {}์์ ๋ค์ด๊ฐ๊ธฐ ๋๋ฌธ์ ๋ฒ๊ฒจ์ค์ผ []๋ก ๋จ 
์ถ์๋ถ = [...์ถ์๋ถ2]

//set์๋ฃ ๋ฃ๋ํ๋ ๋ฒ
์ถ์๋ถ2.add('sally');

//set์๋ฃ ์ญ์ ํ๋ ๋ฒ
์ถ์๋ถ2.delete('sally');

//set์๋ฃ ๋ชจ๋ ํ์ธํ๋ ๋ฒ
์ถ์๋ถ2.has('sally');

//set์๋ฃ ๋ชจ๋ ํ์ธํ๋ ๋ฒ
์ถ์๋ถ2.size

//set ๋ฐ๋ณต๋ฌธ ๋๋ฆฌ๊ธฐ


/**
 * ๐ customElements.define(); : ์น ์ปจํฌ๋ํธ์, ์น๋ธ๋ผ์ฐ์ ๊ฐ ์ด๋ฏธ ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ฅ
*/

class ํด๋์ค์ด๋ฆ extends HTMLElement {
  // ๋ฐฉ๋ฒ1
  connectedCallback() {
    let name = this.getAttribute('name');
    this.innerHTML = `<input>${name}์ธํ์ด์์</input>`
  }
  static get observedAttributes() {
    return ['name']
  }
  attributeChangeCallback(){
    console.log(
      this.getAttribute('name')
    );
  }
  // ๋ฐฉ๋ฒ2 : html์์ฑ ์๋๊ฐ ์ข ๋ ๋น ๋ฆ
  // let ๋ณ์ = document.createElement('input');
  // this.appendChild(๋ณ์)
}
customElements.define('์ปจํฌ๋ํธ ์ด๋ฆ', ํด๋์ค);

// ์ ์๋ฃ ํ html์ <์ปจํฌ๋ํธ์ด๋ฆ name="๋น๋ฒ"></์ปจํฌ๋ํธ์ด๋ฆ> ๋ฃ์ด์ฃผ๋ฉด ๋

/**
 * ๐ shoadow DOM
*/

/**
 * ๐ ?.
*/

let user = {
  name : 'kim',
  // age : {value : 20}
}

user.age.value;
user.age?.value; //user.age๊ฐ ์์ผ๋ฉด name์ ๋ถ๋ฌ์ค๊ธฐ
// . 2r๊ฐ ์ด์์ผ ๋ ? ๋ฌธ๋ฒ ์ฌ์ฉ ๊ฐ๋ฅ

undefined ?? '์ ๊น๋ง์' //์ค๋ฅธ์ชฝ์ด undefined์ผ ๋ ์ผ์ชฝ์ ๋ณด์ฌ์ฃผ๊ธฐ