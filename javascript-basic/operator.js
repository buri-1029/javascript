// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 3

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 전위 증가연산자
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3 3
const postIncrement = counter++; // 후위 증가연산자
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3 4
const preDecrement = --counter; // 전위 증감연산자
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3 3
const postDecrement = counter--; // 후위 증감연산자
// preDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3 2

// 4. Assignment operators (할당)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators (비교)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// 효율적인 코드 작성:  심플한 -> 복잡한 operation 일수록 뒤에서 check

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not) : 값을 반대로
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion : 값만 보기
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion : 타입까지 ***
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const buhee1 = { name: 'buhee' }; // 1, 2에는 각각 다른 reference가 들어있고,
const buhee2 = { name: 'buhee' }; // 그 다른 reference는 서로 다른 object를 가지고 있음
const buhee3 = buhee1; // 3은 1의 reference가 할당되었음
console.log(buhee1 == buhee2); // false
console.log(buhee1 === buhee2); // false
console.log(buhee1 === buhee3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'null';
if (name === 'buhee') {
  console.log('Welcome, Buhee!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
} // result: unknown

// 9. Ternary operator: ? - 삼항연산자
// condition ? value1 : value2;
console.log(name === 'buhee' ? 'yes' : 'no'); // no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
} // result: love you!

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); // while 3 > 2 > 1
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블록을 먼저 실행하고 조건이 맞는지 확인
do {
  console.log(`do while: ${i}`); // do while 0
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`); // for 3 > 2 > 1
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`); // inline for 3 > 1
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue; // continue: 현재 step 넘어가고 다음 step으로
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 5 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 5) {
    break; // break: loop를 끝내는 것
  }
  console.log(`q2. ${i}`);
}
