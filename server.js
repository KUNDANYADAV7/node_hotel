
// function add(a,b){
//   return a+b;
// }

// var add = function(a,b){
//   return a+b;
// }

// var add = (a,b) =>a+b;

/*function callback(){
  console.log('Addition is successfull');
}

var add = (a,b,callback)=>{
  var result = a + b;
  console.log('result : '+result);
  callback();
}

add(5,17,callback); */

// var result = add(5,6);
// console.log(result);

/*var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt','Hi '+user.username+' !\n'+" It's a great day."+" Thank yopu to join my company",()=>console.log('file is created'));  */

/* var notes = require('./notes');
console.log('Server is running');
//    var age = notes.age;
// var result = notes.addNumber(age,10)
// console.log(age); 

var {age,addNumber} = notes;

console.log(age);
addNumber(age,6);  */

/*  var _ = require('lodash');

const data = ['person','person',1,2,1,2,'name','age','2'];
const filter = _.uniq(data);
console.log(filter);

console.log(_.isString('Aman')); */



//JSON

const jsonString = '{"name":"Kundan Yadav","age":30,"city":"New york"}'
console.log(typeof jsonString);
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

const json = JSON.stringify(jsonObject);
console.log(json);
console.log(typeof json);
