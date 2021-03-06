'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'buri',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"buri","color":"white","size":null,"birthDate":"2021-03-06T17:23:21.250Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
// {"name":"buri","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'buhee' : value;
});
// key: , value: [object Object]
// key: name, value: buri
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-03-06T17:23:21.250Z
// key: jump, value: function () {
//    console.log(`${this.name} can jump!`);
//  }

console.log(json);
// {"name":"buhee","color":"white","size":null,"birthDate":"2021-03-06T17:23:21.250Z"}



// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());