
// Popup boxes - alert, confirm, prompt
    
//-----------Confirm---------------

// function deletSomething(){
//     let value = confirm("Do you want to delet?");
//     if(value){
//         console.log("deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
    
// }
// deletSomething();

//update a function

function welcomeMessege(){

    var h1 = document.createElement('h1');
    let text;

   var name = prompt("Enter your name: ");
   if(name == null || name == ''){
        text = "no name found";
   }
   else{
    text = name;
   }
   
   var textNode = document.createTextNode(text);
   h1.appendChild(textNode); // adding textNote with h1
   document.body.appendChild(h1); // adding h1 with body

}
welcomeMessege();

