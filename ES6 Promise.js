
// How to creat a promise -> pending, resolve, reject

// const promise1 = new Promise((resolve, reject)=>{
    
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("completed promise 1")
//     }
//     else{
//         reject("not completed promise 1")
//     }

// });

// promise1
// .then(res =>{
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });

//----------another promise------------

// const promise2 = new Promise((resolve,reject)=> {
//     resolve("Completed promise 2")
// });
// promise2.then((resolve)=> console.log(resolve));

// we can call many promise at a time

// Promise.all([promise1,promise2])
// .then((resolve)=> console.log(resolve))

//--------------Promise race-------------------------------------------

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("completed promise 1")
    },2000)
});


const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("completed promise 2")
    },1000)
});

Promise.race([promise3,promise4]).then((res) => console.log(res));




