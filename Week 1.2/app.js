// Q1
let str = 'peter pipper picked a part of pickled pepper';

const capStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capStr);


function reverseChar(str){
   return str.split(" ").reverse().join(" ");

}
 console.log(reverseChar(str));



function Palindrome(num){
  return num.split(" ").reverse().join(" ");
}
console.log(Palindrome("racecar"))
console.log(Palindrome("john wick"))


const wordCount = (str) =>{
  return str.split(" ").length;
}
console.log(wordCount(str))


// Q2
let countNum = [1,2,3,4,5,6,7,8,9,10];

function double(countNum) {
  return countNum.map(num => num * 2);
}
console.log(double(countNum));  
  

function filterEven(countNum) {
  return countNum.filter(num => typeof num === 'number' && num % 2 !== 0);
}

console.log(filterEven(countNum));

function average(countNum){
  if (countNum.length === 0) return 0; 
  const sumOfNumbers = countNum.reduce((acc, num) => acc + num, 0);
  return sumOfNumbers / countNum.length;
}

console.log(average(countNum))
// Q3

const person = {
  firstName: "John",
  lastName: "Doe",
};


function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

console.log(fullName(person));  

function isAdult(person) {
  return person.age >= 18;
}

const person1 = { name: "John", age: 20 };
const person2 = { name: "Jane", age: 16 };

console.log(isAdult(person1));  // true
console.log(isAdult(person2));  // false

function filterByAge(people, minAge) {
  return people.filter(person => person.age >= minAge);
}
const people = [
  { name: "John", age: 20 },
  { name: "Jane", age: 16 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
];

console.log(filterByAge(people, 18));  // Returns people with age >= 18

