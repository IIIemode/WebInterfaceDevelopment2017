//"use strict";

var mb, a, b, R, e, x, y, i, di = 5, j, n, size = 32;

window.onload = function(){
	ctx = document.getElementById("mycanvas").getContext("2d");
	x = event.pageX;
	y = event.pageY;


	for (var a = 0.5; a < 450; a += 10) {
		ctx.moveTo(a, 0);
		ctx.lineTo(a, 450);
	}
	for (var b = 0.5; b < 450; b += 10) {
		ctx.moveTo(0, b);
		ctx.lineTo(450, b);
	}

ctx.strokeStyle = "#eee";
ctx.stroke();
}

function mouseDown(){
		x = event.pageX;
    y = event.pageY;
		ctx.moveTo(x, y); 
		//console.log(x, y);
}

function mouseMove(){
		x = event.pageX;
    y = event.pageY;
    if (mouseDown()) {
		ctx.beginPath();
		ctx.lineWidth = 5;       
		ctx.strokeStyle = "red";
		//ctx.fillRect(x, y, 5, 5);
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.fill();
		console.log(x, y);
	}
}




