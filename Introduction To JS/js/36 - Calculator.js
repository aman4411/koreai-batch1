let appendValue = (value) => {
    let inputScreen = document.getElementById('inputScreen');
    let inputValue = inputScreen.value;
    if(inputValue == 0 || inputValue == "NaN"){
        inputScreen.value = value;
    }else{
        inputValue += value;
        inputScreen.value = inputValue;
    }
}

let calculate = () => {
    let inputScreen = document.getElementById('inputScreen');
    let inputValue = inputScreen.value;
    let result;
    try{
        result = eval(inputValue);
    }catch(Exception){
        result = NaN
    }
    inputScreen.value = result;
}