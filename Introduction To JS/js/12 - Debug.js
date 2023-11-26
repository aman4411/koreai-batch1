let marks = 55;
debugger;
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