
var photos = ["img.jpeg","img 2.jpeg","img 3.jpeg"];
var imgTag = document.querySelector("img");


var count = 0;// index number

function next(){
    count++;
    if(count >= photos.length){
        count = 0;  // if count is greater than photos lenght then the counting will start from 0;
        imgTag.src = photos[count];
    }
    else {
        imgTag.src = photos[count];
    }
}  

function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else {
        imgTag.src = photos[count];
    }
}

