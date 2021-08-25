var leftOffset = 10;
var topOffset = 150;
var score = 10;
var width = 180;
var height = 200;
var inputHeight = 50;
var topRow, middleRow, numInput;
var buttonValue = 0;
var numBase = 0;
var baseSet = false;

var title = document.createElement("h1");
title.innerHTML = "Welcome to the FlippyDo!";
title.style.left = leftOffset+"px";
document.body.append(title);

var baseButton = document.createElement("button");
baseButton.innerHTML = "Enter a number base";
document.body.append(baseButton);
baseButton.addEventListener("click", setBase);

var base = document.createElement("input");
document.body.append(base);

function setBase(event){
    if(base.value==""){
        alert("Enter a base value");
    }else if(baseSet == true){
        alert("refresh the page play again");
    }else{
        numBase = base.value;
        baseSet = true;
        makeTopRow(numBase);
        makeMiddleRow(numBase);
        makeBottomRow(numBase);
        makeInputs();
        showInstructions();
    }
}

function makeTopRow(b){
//Creates the top row
    for(var i = 0; i<8; i++){
        topRow = document.createElement("button");
        topRow.id = "top"+i;
        document.body.append(topRow);
        var topRowButton = document.getElementById("top"+i);
        topRowButton.style.width = width + "px";
        topRowButton.style.height = height + "px";
        topRowButton.style.position = "absolute";
        topRowButton.style.top = topOffset + "px";
        topRowButton.style.left = leftOffset + "px";
        topRowButton.style.backgroundColor = "#E8C9FA";
        topRowButton.style.fontSize = "xx-large";
        leftOffset += width;
        var result = 7 - i;
        topRowButton.innerHTML = b+"<sup>"+result+"</sup>";
    }
leftOffset = 10;
}


function makeMiddleRow(b){

//Creates the middle row
for(var i = 0; i<8; i++){
    middleRow = document.createElement("button");
    middleRow.id = "middle"+i;
    document.body.append(middleRow);
    var middleRowButton = document.getElementById("middle"+i);
    middleRowButton.style.width = width + "px";
    middleRowButton.style.height = height + "px";
    middleRowButton.style.position = "absolute";
    middleRowButton.style.top = topOffset+height+ "px";
    middleRowButton.style.left = leftOffset + "px";
    middleRowButton.style.backgroundColor = "#DAF7A6";
    middleRowButton.style.fontSize = "xx-large";
    leftOffset += width;
    middleRowButton.innerHTML = Math.pow(b,(7-i));
}

leftOffset = 10;
}

function makeBottomRow(b){
//Creates the bottom row
    for(var i = 0; i<8; i++){
        bottomRow = document.createElement("button");
        bottomRow.id = "bottom"+i;
        document.body.append(bottomRow);
        var bottomRowButton = document.getElementById("bottom"+i);
        bottomRowButton.style.width = width + "px";
        bottomRowButton.style.height = height + "px";
        bottomRowButton.style.position = "absolute";
        bottomRowButton.style.top = topOffset+height*2+ "px";
        bottomRowButton.style.left = leftOffset + "px";
        bottomRowButton.style.backgroundColor = "yellow";
        bottomRowButton.style.fontSize = "xx-large";
        leftOffset += width;
        bottomRow.addEventListener("click", changeText);
        bottomRowButton.innerHTML = buttonValue;

    }
    leftOffset = 10;
}

function makeInputs(){

    for(var i = 0; i < 8; i++){

        numInput = document.createElement("input");
        numInput.id = "input" + i;
        document.body.append(numInput);
        numInput.style.width = width + "px";
        numInput.style.height = inputHeight + "px";
        numInput.style.position = "absolute";
        numInput.style.fontSize = "xx-large";
        numInput.style.backgroundColor="gray";
        numInput.style.top = topOffset+height*3+ "px";
        numInput.style.left = leftOffset + "px";
        numInput.style.textAlign = "center";
        leftOffset += width;
    }
leftOffset = 10;

}

function showInstructions(){
    instructions = document.createElement("div");
    document.body.append(instructions);
    instructions.style.width = width*8 + "px";
    //numInput.style.height = inputHeight + "px";
    instructions.style.position = "absolute";
    instructions.style.fontSize = "xx-large";
    //instructions.style.backgroundColor="gray";
    instructions.style.top = topOffset+height*3 + inputHeight+ "px";
    instructions.style.left = leftOffset + "px";
    instructions.innerHTML = "Click on the yellow buttons to enter a value in a given base.";
    instructions.innerHTML += " Then, multiple the value of the yellow button by the value ";
    instructions.innerHTML += " of the green button above it.  Enter this value in the ";
    instructions.innerHTML += " gray text box.";
    instructions.innerHTML += " The sum of the values in the gray text boxes is the corresponding value in base 10."

}

function changeText(event){
    var currentValue = Number(event.target.innerHTML);
    if(currentValue < base.value-1){
        currentValue++;
        event.target.innerHTML = currentValue;
    }else{
        event.target.innerHTML = 0;

    }
    
}
