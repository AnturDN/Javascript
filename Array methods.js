
// find(callback, value) return the value of the first element that pass certain condition

let numbers = [5,55,14,5,78]

const eventNumber = (value)=>{
    if(value%2==0)
    return value;
}

let firstEvenNumber = numbers.find(eventNumber); // finding the first even number
console.log(firstEvenNumber)




// findIndex (callback, value) return the index of the first element that pass certain condition


let number = [5,55,14,5,78]

const eventnumber = (value)=>{
    if(value%2==0)
    return value;
}

let firstEvennumber = number.find(eventnumber); // finding the first even number and it's index number
let firstEvennumberIndex = number.findIndex(eventnumber);
console.log(firstEvennumber)
console.log(firstEvennumberIndex) 

//--------------same thing using object----------------------------

const students = [
    {
        id : 101,
        gpa : 3.5
    },
    {
        id : 102,
        gpa : 2.5
    },
    {
        id : 103,
        gpa : 4.5
    }
]
console.log(students.find(x => x.gpa > 4));
