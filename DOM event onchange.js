//DOM events
/* 1. Event object
    - event type: change, submit, load, unload, open, play canplay,
                 pause, playing, progress, ended, resize, scroll, toggle etc.
    - properties: type, target, preventDefault().

// 2. MouseEvent Object
// 3. KeyboardEvent Object
// 4. FocusEvent Object
// 5. ClipboardEvent Object
// 6. DragEvent Object */

//-------------------------------------------------------------------------

//----------Change event------------
// console.clear();
// const input = document.querySelector("input[name=name]");// here I want to select a input which name is "name";<input type="text" name="name">
// input.addEventListener("change", changeHandler)


// function changeHandler(event){
//     // console.log(event);
//     // console.log(event.type);
//     //console.log(event.target);
//     console.log(event.target.className);//finding element using class-name
//     console.log(event.target.id);//finding element using id
//     console.log(event.target.value);
// }

//-------checkbox event---------------

// const programs = document.querySelectorAll("input[name=program");
// // console.log(programs);

// Array.from(programs).map((program)=>{ // converting Nodelist(in the console) into Array and the map will bring elements one by one from the array in the program
//     program.addEventListener("change", programHandler)
// })

// function programHandler(event){
//     if(event.target.checked){
//         console.log(event.target.value);// It will show which checkbox is checked
//     }
// }

//-----------Select event--------------

const department = document.querySelector("#department");
// console.log(department);
department.addEventListener("change", handleDepartment);

function handleDepartment(event){
    console.log(event.target.value);// finding the value...If cse is is selected than it will show cse , if LLB is is selected than it will show LLB
}


