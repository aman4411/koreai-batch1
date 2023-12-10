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

    if(name.value.length < 3 || name.value.length > 20){
        error.innerHTML = 'Name can be of 3-20 characters*';
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

    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!emailRegex.test(email.value)){
        error.innerHTML = 'Please enter a valid email*';
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

    let phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if(!phoneNumberRegex.test(phone.value)){
        error.innerHTML = 'Please enter a valid phone number*';
        error.style.display = 'block';
        error.style.color = 'red';
        return;
    }

    error.style.display = 'none';
    alert('Your form has been submitted')
}