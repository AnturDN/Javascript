
// // callback and higher order function

// function square(x){
//     console.log(`square of ${x} : ${x * x}`);
// }
// //square(5);
// // const y = square;
// // y(5);

// function higherOrderFunction (num, callback){
//     callback(num)
// }
// higherOrderFunction(6, square);






// synchronous programing

const taskOne = (callback) => {
    console.log("Task1");
    callback();
}


// ------------Asynchronous--------------

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("Task2. Data loading");
        callback();
    },2000);

};
//---------------------------------------

const taskThree = (callback) => {
    console.log("Task3");
    callback();
}
const taskFour = (callback) => {
    console.log("Task4");
    callback();
}
const taskFive = () => {
    console.log("Task5");
}

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});

// Example of asynchonous programming---------------------------
// console.log("hi");
// document.querySelector("button").addEventListener('click', ()=>{
//     console.log("Button is clicked")
// });
// console.log("bye");

