/**
 * // 📍getter/ setter  
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