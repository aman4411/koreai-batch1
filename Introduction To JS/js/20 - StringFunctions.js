let person = 'Aman Mehta';

//get the length of string
let stringLength = person.length;
console.log(stringLength);

//extract a substring
// i) splice  method 
let firstName = person.slice(0,4);
console.log(firstName);

// ii) substring method
firstName = person.substring(0,4);
console.log(firstName);

// iii) substr method 
firstName = person.substr(0,4);
console.log(firstName);

//replace occurence in a string
let exampleString = 'I visited Delhi yesterday. There was very much traffic in Delhi.'
let replacedString = exampleString.replace('Delhi','Noida');
console.log(replacedString);

//replace all occurences
replacedString = exampleString.replaceAll('Delhi','Noida');
console.log(replacedString);

//making lowercase
let lowerCaseString = exampleString.toLowerCase();
console.log(lowerCaseString);

//making uppercase
let upperCaseString = exampleString.toUpperCase();
console.log(upperCaseString);

//trimming a string
let inputString = '  Aman Mehta   ';
console.log(inputString);
let trimmedString = inputString.trim();
console.log(trimmedString);

trimmedString = inputString.trimStart();
console.log(trimmedString);

trimmedString = inputString.trimEnd();
console.log(trimmedString);

//padding
let rollNumber = '253';
let paddedRollNumber = rollNumber.padStart(6,'0');
console.log(paddedRollNumber);

let anotherRollNumber = '2654342';
let paddedRollNumber1 = anotherRollNumber.padStart(6,'0');
console.log(paddedRollNumber1);

// extract character at specific index
let company = 'Perfect Elearning';
console.log(company.charAt(3));

//splitting a string into array
let names = "Aman,Saloni,Pooja,Rahul,Rajat";
console.log(names + ' ' + typeof(names));
let nameArray = names.split(',');
console.log(nameArray);

let numbersString = "10.23.23.12.54.23";
let numberArray = numbersString.split(".");
console.log(numberArray);
