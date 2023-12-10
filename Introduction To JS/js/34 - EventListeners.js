let handleClick = () => {
    document.getElementById('div1').innerHTML = 'Clicked'
}

let div2 = document.getElementById('div2');
div2.addEventListener("click", ()=> {
    document.getElementById('div2').innerHTML = 'Clicked'
})

let div3 = document.getElementById('div3');
div3.addEventListener("mouseover", () => {
    div3.style.backgroundColor = 'red';
})
div3.addEventListener("mouseout",() => {
    div3.style.backgroundColor = "yellow";
})

let input1 = document.getElementById('input1');
input1.addEventListener("keypress", ()=>{
    input1.style.backgroundColor = 'yellow';
})
input1.addEventListener("keyup", ()=>{
    input1.style.backgroundColor = 'white';
})

