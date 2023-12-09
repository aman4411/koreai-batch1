
let isLightMode = true;
let switchMode = () => {
    let heading = document.getElementById('name');
    let button = document.getElementById('btn');
    let body = document.body;
    if(isLightMode){
        heading.style.color = "#ffffff";
        button.style.backgroundColor = "#ffffff"
        body.style.backgroundColor = "#000000"
        isLightMode = false;
        button.innerHTML = 'Switch to Light Mode';
    }else{
        heading.style.color = "#000000";
        button.style.backgroundColor = "#EFEFEF"
        body.style.backgroundColor = "#ffffff"
        isLightMode = true;
        button.innerHTML = 'Switch to Dark Mode';
    }
}