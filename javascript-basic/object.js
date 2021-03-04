'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const buhee = { name: 'buhee', age: 26 };
print(buhee); // buhee
// 26

// with JavaScript magic (dynamically typed language)
// can add properties later
buhee.hasJob = true;
console.log(buhee.hasJob); // true

// can delete properties later
delete buhee.hasJob;
console.log(buhee.hasJob); // undefined

// -> 동적으로 코딩하면 유지보수하기에는 :(

// 2. Computed properties (계산된) ***
// key should be always string!!
console.log(buhee.name); // buhee
console.log(buhee['name']); // buhee
buhee['hasJob'] = true; // (== buhee.hasJob = true;)
console.log(buhee.hasJob);

// .(dot) : 코딩하는 그 순간 key에 해당하는 값을 받아오고 싶을때 사용
// Computed properties : 정확하게 어떤 key가 필요할지 모를때, 즉 runtime에서 결정될 때

function printValue(obj, key) {
  console.log(obj[key]);
  // console.log(obj.key); -> undefined
}
printValue(buhee, 'name');
printValue(buhee, 'age');

// 3. Property value shorthand ***
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('buhee', 26); // 값만 전달
console.log(person4);

// 4. Constructor Function ***
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당 object 안에 key가 있는지 없는지 확인
console.log('name' in buhee); // true
console.log('age' in buhee); // true
console.log('random' in buhee); // false
console.log(buhee.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in buhee) {
  console.log(key); // name age hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value); // 1 2 4 5
}

// 7. Fun cloning (복제)
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'buhee', age: '26' };
const user2 = user;
user2.name = 'coder';
console.log(user); // { name: 'coder', age: '26' };

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

// other way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
// 뒤에 나오는 아이일수록 동일한 property가 있다면 값을 계속 덮어씌어주기 때문!
