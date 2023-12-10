let randomNumber = Math.floor(Math.random()*100)
let message = document.getElementById('message');
let chances = 10;

function check(){
    if(chances == 0){
        message.innerHTML = "You are out of your chances. Play Again!!!"
        return;
    }
    let input = document.getElementById('input');
    let number = input.value;
    if(number == randomNumber){
        message.innerHTML = "Congratulations !!!! You WON"
    }else if(number < randomNumber){
        message.innerHTML = "You have guessed a slightly smaller number";
    }else{
        message.innerHTML = "You have guessed a slightly bigger number";
    }
    message.style.display = "block"
    chances--;
    document.getElementById('chanceMessage').innerHTML = chances + " Chances Left";
}