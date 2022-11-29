

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

drawSquare(200, 0, 0);
drawSquare(100, 50, 50);
drawSquare(25, 100, 100);


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
