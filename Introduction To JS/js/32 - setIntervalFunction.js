//problem statement is - I have to print current time after every 1 second in js
let printCurrentTime = () => {
    let seconds = new Date().getSeconds();
    console.log(seconds);
    if(seconds == 59){
        clearInterval(id);
    }
}
let id = setInterval(printCurrentTime , 1000)


