// Function : Input x -> Output f(x)
// - fundamental building block in the program : 기본적인 빌딩 블록
// - subprogram can be used multiple times     : 여러번 재사용이 가능
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello(); // 함수 호출

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// Js -> Ts 배우기

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const buhee = { name: 'buhee' };
changeName(buhee);
console.log(buhee); // 'buhee' -> 'coder'로 변경

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // 매개변수가 하나여도, default 값 추가 해놓으면

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // ... -> 배열 형태로 전달
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable (전역)
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable (지역)
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good : 더 맞는 경우를 리턴하는 것이 좋다.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression --> 이부분 다시
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function =>
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 7, 3));
console.log(calculate('substract', 5, 2));
console.log(calculate('multiply', 4, 6));
