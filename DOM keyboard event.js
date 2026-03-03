// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. Keypress ( may not supported by some browsers)
// 3. KeyUp
// some preperties - key, keyCode, code, shiftKey, ctlkey, repeat

const textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function(event){
    if(event.repeat){
        alert("Do not repeat");// if we press and hold the any key then it will display alert 
    }
});

// textarea.addEventListener('keypress', function(){
//     console.log("keypress")
// });

textarea.addEventListener('keyup', function(event){
    //-----------keycode--------------

    //console.log(event.keyCode); //ascii code of the pressed value

    //-----------Code-----------------

    //console.log(event.code);// kind of simillar with (event.key)

    //------------Key-------------------------

    // console.log(event.key); // it will display the key which is pressed
    
    //--------------ShiftKey------------------

   // console.log(event.shiftKey);// if we press another after pressing shift then it will show true

    // if(event.shiftKey){
    //     console.log("shift+" + event.key); // it will print which keys are pressed with shift

    // }




});




