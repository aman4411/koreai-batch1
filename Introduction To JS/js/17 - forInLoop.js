// syntax of for in loop is like - 

// for(let variable in object){
// }


let numbers = [12,3,5,6,8,94,24,45];

for(let index in numbers){
    const value = numbers[index];
    const evenOrOdd = value % 2 == 0 ? 'even' : 'odd';
    console.log(value + ' - ' + evenOrOdd);
}



