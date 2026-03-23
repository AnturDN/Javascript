for(var i = 0; i < 3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);


        
    });
}

//----------keypress listerer--------
document.addEventListener("keypress",function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
});
//---------------------------------------


function audioPlay(text){
    switch(text){
        case "A":
            var audio = new Audio("1.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("2.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("3.mp3");
            audio.play();
            break;      
    }
}
function playAnimation(text){
    var myText = "." + text;
    var selectedButton = document.querySelector(myText);
    selectedButton.classList.add("animtn");

    setTimeout (function(){
        selectedButton.classList.remove("animtn");

    }, 1000); // the animation will remove after 1 second
}

