// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) : mutable(변경될 수 있는 값)
// global scope
let globalName = 'global name';
// block scope
{
  let name = 'buhee';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name); // 아무 값도 안나옴!
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅 : 어디에 선언했는지 상관없이 항상 선언을 제일 위로 끌어 올리는 것
// has no block scope : block scope를 철저히 무시
console.log(age);
// undefined : 변수는 정의 되었지만 아직 값이 할당되지 않았을 때
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// const : Immutable(한번 할당하면 값이 절대 바뀌지 않는 아이)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// (웬만하면 값을 할당한 다음에 값이 변경되지 않는 데이터 타입을 사용해라.)
//  - security
//  - thread safety
//  - reduce human mistakes₩

// 4. Variable types (데이터 타입)
// primitive(single item): number, string, boolean, null, undefined, symbol
// object(box container) - single item들을 여러개 묶어서 한 단위로 관리할 수 O
// function / first-class function : function도 다른 데이터 타입처럼 변수에 할당이 가능

// type이 dynamic하게 결정이 됨.

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
// 백틱 기호 사용
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects : 고유한 식별자를 만들 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const buhee = { name: 'buhee', age: 25 }; // const로 지정되어 있어서 다른 object로는 변경 불가
console.log(`name: ${buhee.name} age: ${buhee.age}`);
// const로 지정되어 있어서 다른 object로는 변경 불가
// but, object 안에 있는 변수는 다른 값으로 변경 가능
buhee.age = 26;
console.log(`name: ${buhee.name} age: ${buhee.age}`);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1 number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75 string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4 number
// console.log(text.charAt(0)); // dynamic type때문에 error -> ts
