
// JS Timing event methods
// setTimeOut(), setInterval()


//----------------------setTimeOut---------------------------------


// setTimeout(()=>{  // Anonymous function

//     console.log('hi');

// }, 2000); // 2 second

// setTimeout(display, 2000);
// function display(){
//     console.log("display function");
// };

//-------------------------------------------------------------

// const saveButton = document.querySelector('.save-button');
// const message = document.querySelector('.message');

// saveButton.addEventListener('click', saveUser);
// function saveUser(){
//     message.textContent = "user registration successful";

//     setTimeout(()=>{
//         message.textContent = '';
//     },2000);
// };


//-------------------------setInterval----------------------


const saveButton = document.querySelector('.save-button');
const message = document.querySelector('.message');

saveButton.addEventListener("click", displayCount);
function displayCount(){
    let count = 1;
    message.textContent = count;
    setInterval(()=>{
        count++;
        message.textContent = count;
    },2000);
};

