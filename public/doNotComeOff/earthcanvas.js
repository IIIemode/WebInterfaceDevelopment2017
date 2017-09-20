var r, x, xx=0, k, i, j, canvas, context, a=20, b=5, _width=1000;
var c=2*_width/(a+b); // c=50
window.onload = function(){
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");
  setTimeout("drawFrame()", 20);
}
function Rectangle(x, y, dx, dy, color) {this.x = x;this.y = y;this.dx = dx;this.dy = dy;this.color = color;}
function initRectangles() {
  rectangles = [];
  for (i = 0, j = 0; i < c; i++) {
    for (l = b, k = 1 ; l < _width; l = l + (a+b)) {
      rectangles.push(new Rectangle(j, l, a, a, get_random_color()));
      k++;
    }
    j += (a+b);  
  }
  return rectangles;
}
function get_random_color() {return "#"+((1<<24)*Math.random()|0).toString(16);}
initRectangles();
function drawFrame() {    
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < rectangles.length; i++) {
  var rectangle = rectangles[i];
  context.beginPath();
  context.fillStyle = rectangle.color;
  context.shadowColor = "black"; context.shadowOffsetY = -3; context.shadowOffsetX = 3; 
  context.fillRect(rectangle.x, rectangle.y, rectangle.dx, rectangle.dy);
  rectangle.x += 1;
  if (rectangle.x == ((2*_width)-a)) {rectangle.x = -a;}
  } 
  for (i = 1; i < (k+1)/2; i++) {
    r = _width/2;
    x = 2*(2*Math.sqrt(r*r-(r-(a+b)*i)*(r-(a+b)*i)))/(a+b);
  }
  setTimeout("drawFrame()", 20);
}



