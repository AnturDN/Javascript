


// import { setText, text } from "./myModule.js";
// console.log(text);
// setText("Good bye from ES6");
// console.log(text);

// we can also import things by changing their name

// import {setText as message} from './methods.js';\
// console.log(message);


//----------------Creating Class-----------------------


// class student {
//     constructor(id, name){
//         this.id = id;
//         this.name= name;
//     }

// }

// let s1 = new student(101, "Antur")
// // console.log(s1.id)
// // console.log(s1.name)
// console.log(s1)


//----------------Set and Get---------------------------


class student {
    constructor(id, name){
        this.id = id;
        this.name= name;
    }

    set studentName(name){
        this.name = name;
    }
    get studentInfo(){
        return this.id + " " + this.name;
    }

}

let s1 = new student(101, "Antur")
// console.log(s1.id)
// console.log(s1.name)
console.log(s1)
s1.studentName = "Antur Deb Nath";
console.log(s1.name); // for set
console.log(s1.studentInfo); // for get


