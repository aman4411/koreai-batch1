//1. getElementById() - returns unique element

let myName = document.getElementById('h1');
console.log(myName.innerHTML);

//2. getElementsByTagName() - returns an array of elements
let h2Tags = document.getElementsByTagName('h2');
console.log(h2Tags);

for(heading of h2Tags){
    console.log(heading.innerHTML);
}

//3. getElementsByClassName() - returns an array of elements
let paraClassElements = document.getElementsByClassName('para');
console.log(paraClassElements);
for(paragraph of paraClassElements){
    console.log(paragraph.innerHTML)
}