//creating object
let person = {
    firstName: 'Aman',
    lastName: 'Mehta',
    height: 5.8,
    isMarried: false,
    Gender: 'Male',
    fullName: function getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

//print an object
console.log(person);
console.log(typeof(person));

//accessing values in object
console.log(person.firstName);
console.log(person['lastName']);
console.log(person.fullName());