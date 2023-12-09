let validateForm = (event) => {
    event.preventDefault(); //prevents the form to be submitted
    //apply some validations using js

    let form = document.forms[0];
    let name = form.name;
    let email = form.email;
    let phone = form.phone;
    let error = document.getElementById('error');
    debugger;
    if (name == undefined || name.value.length == 0){
        error.innerHTML = 'Please enter your name*';
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    if (email == undefined || email.value.length == 0){
        error.innerHTML = 'Please enter your email*';
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    if (phone == undefined || phone.value.length == 0){
        error.innerHTML = 'Please enter your phone*';
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    let phoneNumber = Number.parseInt(phone.value);
    if(!Number.isInteger(phoneNumber)){
        error.innerHTML = 'Please enter a valid phone*';
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }
}