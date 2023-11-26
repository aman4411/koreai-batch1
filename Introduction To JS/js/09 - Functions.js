// 1. Function without any parameters 
function printHelloWorld(){
    console.log('Hello');
    console.log('World');
}

printHelloWorld();

// 2. Function with single parameter 
function printHelloName(name){
    console.log('Hello ' + name);
}

printHelloName('aman');
printHelloName('rahul');

// 3. Function with multiple parameters

function sum(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}

sum(1,2);
sum(3,5);
sum(176327,28528732);

// 4. Functions with some return value 

function subtract(num1, num2){
    let subtraction = num1 - num2;
    return subtraction;
}

let result = subtract(5, 3);
console.log(result);

// 5. Arrow Function 
let multiplication = (num1, num2) => {
    console.log(num1*num2);
}

multiplication(4,5);

let division = (num1,num2) => console.log(num1/num2);
division(10,2);

let printName = name => console.log(name);
printName('aman');


