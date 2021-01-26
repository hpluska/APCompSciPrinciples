/*
Exercise 1
*/
/*var myButton = document.createElement("button");
myButton.innerHTML = "Click Me!";
document.body.append(myButton);

myButton.onclick = clickFunction;

function clickFunction(){
    myButton.innerHTML = "You clicked me!";
}
*/

/*
Exercise 2
*/
/*
var exercise2 = document.createElement("div");
exercise2.style.margin = "20px";
exercise2.style.padding = "5px";
exercise2.style.backgroundColor = "black";
exercise2.style.width = "200px";
document.body.append(exercise2);

var content = document.createElement("div");
content.innerHTML = "JavaScript is a programming language of the web.  You can use it to add dynamic behavior and store information."
content.style.backgroundColor = "red";
content.style.width = "180px";
content.style.margin = "auto";
exercise2.append(content);

var readMoreButton = document.createElement("button");
readMoreButton.style.margin = "10px";
readMoreButton.innerHTML = "Read More";
exercise2.append(readMoreButton);

readMoreButton.onclick = changeContent;

function changeContent(){
    var moreText = document.createElement("p");
    moreText.innerHTML = "More info about JavaScript!";
    content.append(moreText);
}
*/

/*
Exercise 3
*/
/*
document.body.addEventListener("click", changeText);
document.body.addEventListener("click", changeBackground);

function changeText(){
    document.body.innerHTML = "The text has changed!";
}

function changeBackground(){
    document.body.style.backgroundColor = "pink";
}
*/
/*
var exercise3 = document.createElement("div");
exercise3.style.backgroundColor = "yellow";
document.body.append(exercise3);

var multiEventContent = document.createElement("div");
multiEventContent.style.backgroundColor = "pink";
multiEventContent.style.margin = "10px";
multiEventContent.innerHTML = "JavaScript is a programming language of the web.  You can use it to add dynamic behavior and store information.";
exercise3.append(multiEventContent);

var multiEventButton = document.createElement("button");
multiEventButton.style.margin = "10px";
multiEventButton.innerHTML = "Read More";
exercise3.append(multiEventButton);

multiEventButton.addEventListener("click", addText);
multiEventButton.addEventListener("click", changeButtonText);

function addText(){
    var moreText = document.createElement("p");
    moreText.innerHTML = "More info about JavaScript!";
    multiEventContent.append(moreText);
}

function changeButtonText(){
    multiEventButton.innerHTML = "Read Less";
}
*/

/*
Exercise 4
*/
/*
var contentContainer = document.createElement("div");
contentContainer.style.backgroundColor = "black";
contentContainer.style.width = "200px";
document.body.append(contentContainer);

var content = document.createElement("div");
content.innerHTML = "JavaScript is a programming language of the web.  You can use it to add dynamic behavior and store information."
content.style.backgroundColor = "red";
contentContainer.append(content);

var readMoreButton = document.createElement("button");
readMoreButton.innerHTML = "Read More";
contentContainer.append(readMoreButton);

readMoreButton.addEventListener("click", addContent);

function addContent(){
    var moreText = document.createElement("p");
    moreText.innerHTML = "More info about JavaScript!";
    content.append(moreText);
    readMoreButton.removeEventListener('click',addContent);
}
*/

/*
var storeContainer = document.createElement("div");
document.body.append(storeContainer);
storeContainer.style.width = "140px";
storeContainer.style.border = "black solid medium";
storeContainer.style.height = "325px";

var monster = document.createElement("div");
monster.style.position = "absolute";
monster.style.top = "40px";
monster.style.width = "140px";
monster.style.height = "300px";
monster.style.backgroundImage = "url('monster.png')";
monster.style.backgroundRepeat = "no-repeat";
storeContainer.append(monster);

var lockButton = document.createElement("div");
lockButton.innerHTML = "lock";
lockButton.style.border = "black solid thin";
lockButton.style.width = "50px";
lockButton.style.float = "right";
lockButton.style.textAlign = "center";
lockButton.style.backgroundColor = "lightgrey";
storeContainer.append(lockButton);

var unlockButton = document.createElement("div");
unlockButton.innerHTML = "unlock";
unlockButton.style.border = "black solid thin";
unlockButton.style.width = "50px";
unlockButton.style.float = "left";
unlockButton.style.textAlign = "center";
unlockButton.style.backgroundColor = "lightgrey";
storeContainer.append(unlockButton);

var door = document.createElement("div");
door.style.position = "relative";
door.style.top = "20px";
door.style.width = "100%";
door.style.height = "300px";
door.style.backgroundColor = "yellow";
door.innerHTML = "";
door.style.textAlign = "center";
storeContainer.append(door);

function openDoor() {
    door.hidden = true;
}

function closeDoor(){
    door.hidden = false;
}
    
function open(){
    door.innerHTML = "OPEN";
    unlockButton.style.backgroundColor = "lightGreen";
    lockButton.style.backgroundColor = "lightGrey";
    door.addEventListener('click', openDoor);
}

function closed(){
    door.innerHTML = "CLOSED";
    //Write your code below
    unlockButton.style.backgroundColor = "lightGrey";
    lockButton.style.backgroundColor = "pink";
    closeDoor();
    door.removeEventListener('click', openDoor);
}
  
unlockButton.addEventListener('click', open);
lockButton.addEventListener('click', closed);
  */

  /* 
  Exercise 5
  */
 /*
var width = 200;
var height = 200;
var moreInfo = document.createElement("div");
moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
moreInfo.style.width = width + "px";
moreInfo.style.height = height + "px";
moreInfo.style.backgroundColor = "red";
moreInfo.style.textAlign = "center";
moreInfo.style.padding = "10px";
moreInfo.style.margin="10px";
document.body.append(moreInfo);

moreInfo.addEventListener('mouseover', changeBackgroundIn);
moreInfo.addEventListener('mouseout', changeBackgroundOut);
moreInfo.addEventListener('wheel',changeText);

function changeBackgroundIn(){
    moreInfo.style.backgroundColor = "yellow";
}

function changeBackgroundOut(){
    moreInfo.style.backgroundColor = "red";
}

function changeText(){
    moreInfo.innerHTML = "Stop wheeling!";
}
  */
/*
//creates a simple div
var myDiv = document.createElement("div");
myDiv.style.width = "500px";
myDiv.style.height = "500px";
myDiv.style.border = "black solid thin";
document.body.append(myDiv);

//registers a wheel event
myDiv.addEventListener("wheel",changeColor);

//when the mouse wheel is used the 
//color of the div is changed
function changeColor(){
    myDiv.style.backgroundColor = "tomato";
}
*/

/*
var width = 200;
var height = 200;
var moreInfo = document.createElement("div");
moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
moreInfo.style.width = width + "px";
moreInfo.style.height = height + "px";
moreInfo.style.backgroundColor = "red";
moreInfo.style.textAlign = "center";
moreInfo.style.padding = "10px";
moreInfo.style.margin="10px";
document.body.append(moreInfo);

moreInfo.addEventListener("wheel", changeColor)
moreInfo.addEventListener("mouseover", changeSize);
moreInfo.addEventListener("mouseout", changeText);

function changeColor(){
    moreInfo.style.backgroundColor = "violet";
}

function changeSize(){
    moreInfo.style.width = "300px";
    moreInfo.style.height = "300px";
}

function changeText(){
    moreInfo.innerHTML = "NEW TEXT!";
}
*/

/*
Example 6
*/

/*
var width = 200;
var height = 200;
var moreInfo = document.createElement("div");
moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
moreInfo.style.width = width + "px";
moreInfo.style.height = height + "px";
moreInfo.style.backgroundColor = "red";
moreInfo.style.textAlign = "center";
moreInfo.style.padding = "10px";
moreInfo.style.margin="10px";
document.body.append(moreInfo);

document.body.addEventListener('keypress', getKey);

function getKey(e){
    console.log(e.key);
}
*/

/*
var someElement = document.createElement("div");
someElement.style.width = "100px";
someElement.style.height = "100px";
someElement.style.backgroundColor = "purple";
someElement.style.position = "absolute";
document.body.append(someElement);
document.body.addEventListener('keydown',moveDown);
document.body.addEventListener('keyup', moveUp);

function moveDown(){    
    someElement.style.top = "300px";
    console.log("hello")
}

function moveUp(){
    someElement.style.top = "0px";
}
*/


/*
var gameDiv = document.createElement("div");
gameDiv.style.width = "300px";
gameDiv.style.height = "600px";
gameDiv.style.backgroundColor = "violet";
var gameTitle = document.createElement("H1");
var gameText = document.createTextNode("Ball Bounce");
gameTitle.style.textAlign = "center";
gameTitle.append(gameText);
gameDiv.append(gameTitle);
document.body.append(gameDiv);
var gameDirections = document.createElement("p");
gameDirections.innerHTML = "Let's dribble the ball using any key on the keyboard. Hold a key down to lift the ball, then release a key to drop the ball."
gameDirections.style.textAlign = "center";
gameDiv.append(gameDirections);

var ball = document.createElement("div");
ball.style.position = "absolute";
ball.style.borderRadius = "50%";
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.top = "570px";
ball.style.left = "125px";
ball.style.backgroundColor = "yellow";
gameDiv.append(ball);

document.body.addEventListener("keydown", ballUp);
document.body.addEventListener("keyup", ballDown);

function ballUp(){
    ball.style.top = "270px";
}
function ballDown(){
    ball.style.top = "570px";
}
*/


