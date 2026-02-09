// finding the elements

const form = document.querySelector("form");
const name = form.querySelector("div #name");
const enail = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener('submit', formHandler);

function formHandler(event){
    event.preventDefault(); // screen will not automatically refresh after pressing submit
   


    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    };
    console.log(userInfo); // It wiil the information that the user submited

    //this will clear the screen after click on the submit button
    name.value = "";
    email.value = "";
    password.value = ""; 
}

