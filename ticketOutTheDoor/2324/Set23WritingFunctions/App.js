function drawSquare(dim, x, y, c){
    var square = document.createElement("div"); 
    var dimensions = dim; 
    var xPos = x; 
    var yPos = y; 
    square.style.width = dimensions + "px"; 
    square.style.height = dimensions + "px"; 
    square.style.border = "thick solid #0000FF"; 
    square.style.borderColor = c;
    square.style.position = "absolute"; 
    square.style.left = xPos + "px"; 
    square.style.top = yPos + "px"; 
    document.body.append(square); 
    return square;
}
// // var s = drawSquare(400, 0, 0, "red")
// // s.innerHTML = "HELLO"
// square = drawSquare(200, 0, 0)

// square.innerHTML = "HELLO!"


// var list = "";
// function makeList(){
//     var item = prompt("add an item"); 
//      list = list + item + ","; 
// }

// function displayList(){
//     var shoppingList = document.createElement("p");
//     shoppingList.innerHTML = list;
//     document.body.append(shoppingList);
// }

// makeList();
// makeList();
// makeList();
// makeList();
// makeList();
// displayList();


function drawTriangle(w, x, y, lb, rb, tb, bb) {

    var triangle = document.createElement("div");
    var width = w
    var xPos = x
    var yPos = y
    triangle.style.borderWidth = width + "px";
    triangle.style.borderStyle = "solid";
    triangle.style.borderColor = "black";
    triangle.style.borderLeftColor = lb
    triangle.style.borderRightColor = rb;
    triangle.style.borderTopColor = tb;
    triangle.style.borderBottomColor = bb
    triangle.style.position = "absolute";
    triangle.style.left = xPos + "px";
    triangle.style.top = yPos + "px";
    document.body.append(triangle);
    return triangle

}

var t = drawTriangle(200, 0, 0, "blue", "red", "green", "yellow")






















// function drawTriangle(w, x, y, left, right, top, bottom) {
//     var triangle = document.createElement("div");
//     var width = w;
//     var xPos = x;
//     var yPos = y;
//     triangle.style.borderWidth = width + "px";
//     triangle.style.borderStyle = "solid";
//     triangle.style.borderColor = "black";
//     triangle.style.borderLeftColor = left;
//     triangle.style.borderRightColor = right;
//     triangle.style.borderTopColor = top;
//     triangle.style.borderBottomColor = bottom;
//     triangle.style.position = "absolute";
//     triangle.style.left = xPos + "px";
//     triangle.style.top = yPos + "px";
//     document.body.append(triangle);
//     return triangle;
// }

// var t = drawTriangle(200, 10, 10, "transparent", "transparent", "green", "transparent")
// t.innerHTML = "HELLO!"

// function drawCircle(size, x, y, c){
//     var circle = document.createElement("div");
//     circle.style.borderRadius = "50%";
//     circle.style.backgroundColor = c;
//     circle.style.width = size + "px";
//     circle.style.height = size + "px";
//     circle.style.position = "absolute";
//     circle.style.left = x + "px";
//     circle.style.top = y + "px";
//     document.body.append(circle)
// }
// drawCircle(100, 0, 0, "pink")














// function drawSquare(dimensions, xPos, yPos) {
//     var square = document.createElement("div");
//     square.style.width = dimensions + "px";
//     square.style.height = dimensions + "px";
//     square.style.border = "thick solid #0000FF";
//     square.style.position = "absolute";
//     square.style.left = xPos + "px";
//     square.style.top = yPos + "px";
//     document.body.append(square);
//     return square;
// }

// var s = drawSquare(100, 0, 0);
// s.innerHTML = "Hello!";
// s.style.backgroundColor= "Pink";

// var list = "";

// function makeList(){
//     var item = prompt("add an item"); 
//     list = list + item + ",";
// }

// function displayList(){
//     var d = document.createElement("div");
//     d.innerHTML = list;
//     document.body.append(d);
// }

// makeList();
// makeList();
// makeList();
// makeList();
// makeList();
// displayList();
























// function getReminder(){

//     var msg = "Water the plants";
//     var msg2 = "another msg";
//     return msg + msg2;

// }


// var finalMsg = getReminder();

// console.log(finalMsg);








/*


var globalArea = rectangleArea(10, 5);
console.log(globalArea);
console.log(area);

function rectangleArea(width, height){
    var area = width * height;
    return area;
    
}


*/






/*

var a = 0;

for(var i = 0; i < 10; i++){
    var d = drawSquare(200, i*10+100, 100);
    a += 36;
    d.style.transform = "rotate(" + a +"deg)";
}


//drawSquare(400, 0, 0);
//drawSquare(300, 50, 50);
//drawSquare(200, 100, 100);

*/


//var globalSquare;

// drawSquare(200, 0, 0);
// drawSquare(100, 50, 50);
// drawSquare(25, 100, 100);


// function drawSquare(d, x, y){
//     var square = document.createElement("div");
//     var dimensions = d;
//     var xPos = x; 
//     var yPos = y;
//     square.style.width = dimensions + "px";
//     square.style.height = dimensions + "px";
//     square.style.border = "thick solid #0000FF";
//     square.style.position = "absolute";
//     square.style.left = xPos + "px";
//     square.style.top = yPos + "px";
//     document.body.append(square);

// }

//globalSquare = drawSquare(400, 0, 0);
//globalSquare.innerHTML = "Here is some text";


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
