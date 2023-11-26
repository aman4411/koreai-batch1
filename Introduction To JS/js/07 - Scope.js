let person = 'aman';  //global scope

{
    //block starts here
    console.log(person)
}//block ends here

console.log(person);


{
    let person2 = 'rahul';  //block scope
    console.log(person2);  //able to access
}

console.log(person2);  // not able to access outside the block