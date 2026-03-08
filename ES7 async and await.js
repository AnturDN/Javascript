
// Creating Promise-----

console.log("Welcome");

const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Task 1 is completed');
    });
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Task 2 is completed');
    });
}

const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        reject('Task 3 is not completed');
        
    });
}

const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Task 4 is completed');
    });
}
//----------------------------------------------------------

// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res)=> console.log(res))
// .then(taskFour)
// .then((res)=> console.log(res))

async function callAllTask(){
try{  //---For error handling we are using try and catch-----

    const t1 = await taskOne();
    console.log(t1);
    
    const t2 = await taskTwo();
    console.log(t2);
    
    const t3 = await taskThree();
    console.log(t3);
    
    const t4 = await taskFour();
    console.log(t4);
}catch(e){
    console.log(e);
    }
};
callAllTask();
console.log("Bye");

//-------Same thing using Arrow function----------

// const callAllTask = async () => {
//     const t1 = await taskOne();
//     console.log(t1);

//     const t2 = await taskTwo();
//     console.log(t2);

//     const t3 = await taskThree();
//     console.log(t3);

//     const t4 = await taskFour();
//     console.log(t4);
// }
// callAllTask();


