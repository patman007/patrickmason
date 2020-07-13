// creates clock canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,200,0,0);
grd.addColorStop(0,"darkblue");
grd.addColorStop(1,"lightblue");

// Create gradient for face of clock
var faceGrd = ctx.createLinearGradient(0,-200,0,0); // crearLinearGradient(x, y, x1, y1)
faceGrd.addColorStop(1,"darkblue");
faceGrd.addColorStop(0,"lightblue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,400,400);

var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.80;


function analogClock() { //function called when page loads
    var newClock = setInterval(drawClock, 1000);  //calls drawClock function every 1 second
}

// draws clock
function drawClock() {
    drawFace(ctx, radius);
    drawTime(ctx, radius);
    
}

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = faceGrd; // fills the inner clock face
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(1, 'darkblue'); //inner edge of outside arc of clock
    grad.addColorStop(.9, 'blue'); //inner edge of outside arc of clock
    grad.addColorStop(0.10, 'lightgray'); // middle of outside arc of clock
    grad.addColorStop(0, 'lightblue'); // outer edge of outside arc of clock
    ctx.strokeStyle = grad; // defines the radial gradient as the stroke style to use for outer edge of clock
    ctx.lineWidth = radius*0.125; //defines width of "border" of outer edge of clock
    ctx.stroke(); // draws the outer edge of clock

    // *** draw a center of clock if needed
    // ctx.beginPath();
    // ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    // ctx.fillStyle = '#333';
    // ctx.fill();
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hourColor();
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minuteColor();
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    secondColor();
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.85, radius*0.02,);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "square"; // options for .lineCap="butt|round|square";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function secondColor() {
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.strokeStyle = "red";
    
}

function minuteColor() {
    ctx.strokeStyle = "green";
}

function hourColor() {
    ctx.strokeStyle = "black";
}
