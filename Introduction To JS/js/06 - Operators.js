// 1. Assignment Operators 
// =, +=, -=, *=, /=, %=, **=
let name = 'aman';
console.log(name);

let num1 = 2;
num1 += 1;    //num1 = num1 + 1
console.log(num1);

let num2 = 2;
num2 -= 1;  //num2 = num2 - 1
console.log(num2);

// 2. Arithmetic Operator 
let num3 = 4;
let num4 = 5;
console.log(num3 + num4);
console.log(num3 - num4);
console.log(num3 * num4);
console.log(num3 / num4);
console.log(num3 % num4);

// Increment / Decrement Operators - 
// 1. Pre Increment   ++variableName
// 2. Post Increment  variableName++

let newNumber = ++num3;  //increase first and then assign
console.log('NewNumber : ' + newNumber); 

newNumber = num3++; //first assign the value and then increase
console.log('NewNumber : ' + newNumber);  
console.log('Num3 : ' + num3);

let firstName = 'aman';
let lastName = ' mehta';
console.log(firstName + lastName)

// 3. Comparison Operator
let num5 = 6;  //number
let num6 = '6'; //string
console.log(num5 < num6);
console.log(num5 > num6);
console.log(num5 <= num6);
console.log(num5 >= num6);
console.log(num5 == num6);   //compares only value
console.log(num5 === num6);  //compares value and type
console.log(num5 != num6);
console.log(num5 !== num6);

// 4. Logical Operator 

// i) And 
// condition1 AND condition2 - if both are true then true else false
let password = '12345';
let confirmPassword = '123456';
console.log(password == confirmPassword && password.length >=6);

// ii) OR - if any condition is true - then true
console.log(password == confirmPassword || password.length >=6);

// iii) NOT - if true then false 
console.log(!(password == confirmPassword))


// 5. Turnary Operator 

let age = 22;
let married = age > 24 ? 'Married' : 'Unmarried';
console.log(married);