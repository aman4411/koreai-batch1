var person = 'aman'    // older way - we should avoid this
let person1 = 'rahul'; // new way
const person2 = 'rajat'; // to declare some constants

// var can be redeclared but let cannot 
var person = 'aman mehta';
// let person1 = 'rahul sharma';   -- will throw error


// var is always global scoped and let is block scoped 

{
    var age = 20;  //global scope
    console.log(age);
}

console.log(age);

{
    let newAge = 30;  //block scope
    console.log(newAge);
}

// console.log(newAge); //cannot access block scope here


console.log(person2);
person2 = 'new name';  //will throw error
console.log(person2);