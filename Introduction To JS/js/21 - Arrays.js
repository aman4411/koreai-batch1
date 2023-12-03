//creating an array
let names = ['aman','prateek','pranshu'];   //preferred way
console.log(names);

names = new Array('aman','prateek','pranshu');
console.log(names);

//what is type of array
console.log(typeof(names));

//how to access item in an array
let firstValue = names[0];   //first item
let secondValue = names[1];  //second item
let thirdValue = names[2];   //third item

console.log(secondValue);

//what will happen if we access item greater than it's length
let item = names[4];
console.log(item);

//calculating the length of an array
let length = names.length;
console.log(length);

//converting an array into string
let stringArray = names.toString();
console.log(stringArray);
console.log(typeof(stringArray));

let joinedString = names.join('|');
console.log(joinedString);

//extract subarray
let slicedArray = names.slice(0,2);
console.log(slicedArray);

//adding value in array in end
names.push('kartik');
console.log(names);

//remove value from array from end
names.pop();
console.log(names);

//adding value in array in start
names.unshift('kartik');
console.log(names);

//remove value from the start
names.shift();
console.log(names);

//sort your array
names.sort();
console.log(names);

let numbersArray = [4,2,6,9,1,7];
numbersArray.sort();
console.log(numbersArray);


//reverse an array
numbersArray.reverse();
console.log(numbersArray);