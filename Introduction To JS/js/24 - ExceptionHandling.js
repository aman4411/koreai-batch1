function convertStringToNumber(numberString){
    let number = Number.parseInt(numberString);
    if(!Number.isInteger(number)){
        throw new Error('Not a Number');
    }
    return number;
}

try{
    let num2 = convertStringToNumber('abc');
    console.log(num2);
}catch{
    console.log('Exception Occured - Cannot convert string into number');
}finally{
    console.log('Finally Block will always get executed');
}

let num1 = convertStringToNumber('123');
console.log(num1);