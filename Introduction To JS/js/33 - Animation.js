function animateCar(){
    let car = document.getElementById('car');
    let id = null;
    let position = 0;
    id = setInterval(() => {
        position++;
        car.style.left = position + 'px';
        if(position == 1000){
            clearInterval(id);
        }
    }, 0.5)
}