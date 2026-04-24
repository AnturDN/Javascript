// FocusEvent Object

// 1. onblur
// 2. onfocus
// 3. onfocusIn
// 4. onfocusOut

// FocusEvent doesn't wort on this elements : -
// <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>


const input = document.querySelector('input');
input.addEventListener('blur', function(){
    //console.log("blur is occured");
//     input.style.backgroundColor = 'transparent';// after pressing out of the input it will go back to its original form
//     input.style.padding = "0" ;
    console.log(event.target.value);// after giving the value to the input and then if we press out of the input box it will show the value to the console
    
});
// input.addEventListener('focus', function(){
    // console.log("focus is occured");
//     input.style.backgroundColor = 'orange';// after pressing the input it will change color
//     input.style.padding = "2rem" ;
// });
// input.addEventListener('focusin', function(){
//     console.log("focusin is occured");
// });
// input.addEventListener('focusout', function(){
//     console.log("focusout is occured");
// });


//---------------------------------------------------------------------------------------------------------------------------------------

// const input = document.querySelector('input');
// input.addEventListener('blur', function(){
//     //console.log("blur is occured");
//     input.style.backgroundColor = 'transparent';// after pressing out of the input it will go back to its original form
//     input.style.padding = "0" ;
// });
// input.addEventListener('focus', function(){
//     // console.log("focus is occured");
//     input.style.backgroundColor = 'orange';// after pressing the input it will change color
//     input.style.padding = "2rem" ;
// });


