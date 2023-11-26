// 1. If Condition 
// 2. If Else 
// 3. If else if 
// 4. Nested if else 


// if 
let person = 'aman mehta';
if(person.length == 4){
    console.log('Name is of 4 characters');
}

// if else 
if(person.length == 4){
    console.log('Name is of 4 characters');
}else{
    console.log('Name is not equal to 4 characters');
}


// if else if 
let marks = 105;
let grade;
if(marks > 90){
    grade = 'A+';
}else if(marks > 80 && marks <=90){
    grade = 'A';
}else if(marks > 70 && marks <=80){
    grade = 'B+';
}else if(marks > 60 && marks <= 70){
    grade = 'B';
}else if(marks > 50 && marks <=60){
    grade = 'C+';
}else if(marks > 40 && marks <= 50){
    grade = 'C';
}else {
    grade = 'D';
}
console.log(grade)



