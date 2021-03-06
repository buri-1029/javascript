'use strict';
// JavaScript === dynamically typed language
// -> 다양한 종류의 데이터 타입을 담을 수 있지만, 좋은 방법이 아니에요!!

// Array🎉
// Array's keyPoint = index

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); // ["🍎", "🍌"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // [2 - 1] = [1] 마지막 데이터 접근
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach ***
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑"]

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits); // ["🍎", "🍌"]

// unshift: add an item to the benigging
// 앞에서부터 데이터 삽입
fruits.unshift('🍓', '🍋');
console.log(fruits); // ["🍓", "🍋", "🍎", "🍌"]

// shift: remove an item from the benigging
// 앞에서부터 데이터 삭제
fruits.shift();
fruits.shift();
console.log(fruits); // ["🍎", "🍌"]

// note!! *** shift, unshift are slower than pop, push

// splice: remove an item by index position(
// 지정된 위치 데이터 삭제 splic(시작위치, 지우고 싶은 개수(opt))
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1, 1);
console.log(fruits); // ["🍎", "🍓", "🍑", "🍋"]
fruits.splice(1, 1, '🍏', '🍉');
// fruits.splice(1, 0, '🍏', '🍉'); 지우지 않고 추가할 수 O
console.log(fruits); // ["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); // 합치기
console.log(newFruits); // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍐", "🥥"]

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits); // ["🍎", "🍏", "🍉", "🍑", "🍋"]
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🥥')); // -1

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🥥')); // false

// lastIndexOf
fruits.push('🍎'); // 똑같은 사과 추가하였을때
console.log(fruits); // ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits.indexOf('🍎')); // 0 : 제일 첫번째로 해당하는 값을 만나면
console.log(fruits.lastIndexOf('🍎')); // 5 : 제일 마지막으로 해당하는 값을 만나면
