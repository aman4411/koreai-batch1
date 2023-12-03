//create current date
let currentDate = new Date();
console.log(currentDate);

//creating a custom Date
let newYearDate = new Date('2024-01-01');
console.log(newYearDate);

newYearDate = new Date('2024','00','01');
console.log(newYearDate);

newYearDate = new Date('2024','00','01','23','59','59');
console.log(newYearDate);

//typeof date
console.log(typeof(newYearDate));

//extracting date
console.log(newYearDate.getDate());
let previousNewYearDate = new Date(newYearDate);

//set the date
newYearDate.setDate(2);
console.log(newYearDate);

//extracting the year
console.log(newYearDate.getFullYear());

//set the year
previousNewYearDate.setFullYear(2023);
console.log(previousNewYearDate);

console.log(newYearDate.getDay());

console.log(newYearDate.getMonth());