

var myArea = rectangleArea(10, 5);
console.log(myArea);//prints 50
function rectangleArea(width, height){
    var area = width * height;
    return area;
}











drawSquare(200, 0, 0);
drawSquare(200/2, 50, 50);
drawSquare(200/4, 75, 75);

function drawSquare(d, x, y){
    var square = document.createElement("div");
    var dimensions = d;
    var xPos = x; 
    var yPos = y;
    square.style.width = dimensions + "px";
    square.style.height = dimensions + "px";
    square.style.border = "thick solid #0000FF";
    square.style.position = "absolute";
    square.style.left = xPos + "px";
    square.style.top = yPos + "px";
    document.body.append(square);
}



/*
var rectWidth = 10;
var rectHeight = 6

calculateArea(rectWidth, rectHeight);
calculateArea(rectWidth*2, rectHeight*2);
calculateArea(rectWidth/2, rectHeight/2);

function calculateArea(width, height){
    console.log(width*height);
}
*/
