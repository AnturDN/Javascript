
// Object literals -> It will return object



function studentInfo(name,age){
    return{
        name,
        age
    }
}
console.log("Antur Deb Nath", 23);

//---------concise methode-------------
// using ES6 we can also use space in the object name, like => `object name(){}`

let message = {
    body(){  // creating function in the object
        return `Hi, I am object function`
    }
}
console.log(message.body());

