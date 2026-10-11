
var c = document.getElementById("mycanvas");

var ctx = c.getContext("2d");


ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,280);// outter border

ctx.fillStyle = "green";
ctx.fillRect(12,12,376,276);// inner border


//------Finding the center of the rectangle-----
var centerX = c.width / 2;
var centerY = c.height / 2;
//-----------------------------------------------

ctx.beginPath();
ctx.arc(centerX,centerY,80,0,2*Math.PI,false);//(value of x axis,value of y axis,radius,starting angle,ending angle, clockwise or counterClockwise)
ctx.fillStyle = "red";
ctx.fill();
//ctx.strokeStyle = "pink";
ctx.stroke();// border of the circle
