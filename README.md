# Assignment-5
1// qustion:  What is the difference between var, let, and const?
Answer : এগুলো JavaScript এ variable declare করার জন্য ব্যবহার হয়।
var

পুরানো পদ্ধতি

value change করা যায়

scope problem হতে পারে
var name = "Khadija";
name = "Sara";
let

modern JavaScript

value change করা যায়
let age = 20;
age = 21;

const

value change করা যায় না
const country = "Bangladesh";

 keyword   value change 
 -------   ------------ 
 var       yes          
 let       yes          
 const     no           


2// qustion : What is the spread operator (...) ?
Answer : Spread operator array বা object copy বা merge করতে ব্যবহার হয়।
Example:

const numbers = [1,2,3];

const newNumbers = [...numbers,4,5];

console.log(newNumbers);
output : [1,2,3,4,5]

3// qustion: Difference between map(), filter(), forEach()
answer :  map()

array এর সব element পরিবর্তন করে নতুন array তৈরি করে

const numbers = [1,2,3];

const result = numbers.map(n => n * 2);

console.log(result);

Output

[2,4,6]

filter()

condition অনুযায়ী element select করে

const numbers = [1,2,3,4];

const result = numbers.filter(n => n > 2);

console.log(result);

Output

[3,4]

forEach()

শুধু loop করে, নতুন array তৈরি করে না

const numbers = [1,2,3];

numbers.forEach(n => {
console.log(n);
});

4// qustion : What is an arrow function?
Answer : Arrow function হলো short way function লেখার জন্য।

Normal function

function add(a,b){
return a + b;
}

Arrow function

const add = (a,b) => {
return a + b;
};

আর ছোট করে

const add = (a,b) => a + b;

5// Qustion : What are template literals?
Answer : Template literals দিয়ে string এর ভিতরে variable ব্যবহার করা যায়।

এটা লিখতে হয় backtick ( ) দিয়ে।

Example

const name = "Khadija";

console.log(`My name is ${name}`);

Output

My name is Khadija

