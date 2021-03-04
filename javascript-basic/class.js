'use strict';
// Object-oriendted programming
// class
//  - template(틀) / declare once / no data in
// object
//  - instance of a class / created many times / data in
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const buhee = new Person('buhee', 26);
console.log(buhee.name);
console.log(buhee.age);
buhee.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
    // this.age = value; -> call stack
  }
}

// age를 실수로 -1 >> 객체지향적인 개념으로 봤을때 말이 안됨!!
// 그래서 방어적인 자세로 만들 수 있도록 해주는 것이 getter와 setter
const user1 = new User('Kim', 'Buhee', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
class Article {
  // 이 'static'은 object마다 할당되어지는 것이 아니라
  // class 자체에 붙어있는 것!!
  // -> object에 상관없이 공통적으로 class에서 사용하는 거라면 유용
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance (상속 & 다형성)
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding : 필요한 함수만 재정의
  draw() {
    super.draw(); // 주석처리하면 재정의한 함수만,
    console.log('🔺');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color! 🔺
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle: color: red

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);
