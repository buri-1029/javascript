// ***** 중요 *****
// Q1. make a string out of an array
// join()
{
  const fruits = ['apple', 'banana', 'orange'];
  const result1 = fruits.join();
  console.log(result1); // apple,banana,orange
  const result2 = fruits.join(':');
  console.log(result2); // apple:banana:orange
}

// Q2. make an array out of a string
// split()
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split();
  console.log(result); // ["🍎, 🥝, 🍌, 🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse()
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
// slice(start, end) : 배열에서 원하는 부분만 return
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // -> 2 ~ 4 
  console.log(result); // [3, 4, 5]
}

// splice(start, n(opt)) : 배열 자체를 수정! 
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);
  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]
}

// ==========================================
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find()
{
    // const result = students.find(function (stu){
    //     return stu.score === 90;
    // });
    const result = students.find((stu) => stu.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
// filter
{
    const result = students.filter((stu) => stu.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map()
{
    const result = students.map((stu) => stu.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some() : 하나라도 만족하면 
// every() : 모두 만족하면
{
    const result1 = students.some((stu) => stu.score < 50);
    console.log(result1);

    const result2 = students.every((stu) => stu.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
// reduce() : 배열에 있는 모든 요소들의 값을 누적하는 api
{
    // prev value : 이전의 callback 함수에서 return된 값이 전달되어져 오고
    // curr value : 배열의 item을 순차적으로 전달받는다.
    // const result = students.reduce((prev, curr) => {
    //     console.log('------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// api를 묶어서 사용 :)
{
    const result = students
        .map((stu) => stu.score)
        .filter((score) => score >= 70)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// sort()
{
    const result = students
        .map((stu) => stu.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}
