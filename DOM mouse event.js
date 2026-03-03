
//------Mouse event-------------
// 1. onclick
// 2. ondblclick
// 3. onmousedup
// 4. onmouseenter
// 5. onmouseleave
// 6. onmousemove
// 7. onmouseover

// Mouse event don't work with this element :-
//<html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, ,<bdo>


console.clear();
const div = document.querySelector('div');

div.addEventListener('click', function(){
    console.log("clicked");                // onclick
});


// div.addEventListener('dblclick', function(){
//     console.log("double clicked");                // ondoubleclick
// });

// div.addEventListener('mousedown', function(){
//     console.log("mouse down is occured");                // onmousedown
// });

// div.addEventListener('mouseup', function(){
//     console.log("mouse up is occured");                // onmousdeup
// });

// div.addEventListener('mouseenter', function(){
//     console.log("mouseenter is occured");                // onouseenter
// });

// div.addEventListener('mouseleave', function(){
//     console.log("mouseleave is occured");                // onouseleave
// });

// div.addEventListener('mouseover', function(){
//     console.log("mouseover is occured");                // onmouseover
// });

// div.addEventListener('mousemove', function(event){
//     //console.log("mousemove is occured");                // onmousemove
//     console.log("clientX = "+event.clientX + ", clientY = "+ event.clientY); // clientX = x axis, clientY = y axis.....
//    // console.log("offsetX = "+event.offsetX + ", offsetY = "+ event.offsetY); // it will show the values according to the display
// });



