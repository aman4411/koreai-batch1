// syntax of forOfLoop is like this - 
// for(let item of object){
//     //code here
// }

let numbers = [12,3,5,6,8,94,24,45];
for(let number of numbers){
    const evenOrOdd = number % 2 == 0 ? 'even' : 'odd';
    console.log(number + ' - ' + evenOrOdd);
}

