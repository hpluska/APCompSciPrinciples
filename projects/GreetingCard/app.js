
// var background = document.createElement("div");
// var hat = document.createElement("div");
// var head = document.createElement("div")
// var text = document.createElement("div");
// background.style.width = "98%";
// background.style.backgroundColor = "#77d7f2";//Sets the background to a shade of blue
// background.style.padding = "10px"
// document.body.append(background);

// //Creates text and appends it to the background
// text.innerHTML = "Happy Holidays!";
// text.style.color = "white"
// text.style.fontSize = "2em";
// text.style.backgroundColor = "black"
// text.style.textAlign = "center"
// text.style.fontFamily = "cursive"
// background.append(text);

// //creates the hat and appends it to the background
// hat.style.width = "0px";
// hat.style.height = "0px";
// hat.style.border = "transparent solid 25px";
// hat.style.borderBottomWidth = "100px";
// hat.style.borderBottomColor = "red"
// hat.style.position = "relative"
// hat.style.margin = "0 auto"
// hat.style.top = "5px"
// hat.style.zIndex = "1";
// background.append(hat)

// //creates a head and appends it to the background
// head.style.width = "50px"
// head.style.height = "50px";
// head.style.borderRadius = "50%";
// head.style.backgroundColor = "tan";
// head.style.position = "relative"
// head.style.margin = "0 auto"
// head.style.zIndex = "0"
// background.append(head)


var background = document.createElement("div"); 
var hat = document.createElement("div"); 
var head = document.createElement("div") 
var text = document.createElement("div"); 
background.style.width = "98%";//stretches the div but keeps it in bounds on the screen 
background.style.backgroundColor = "#77d7f2";//Sets the background to a shade of blue 
background.style.padding = "10px";//creates space between the elements and the outer edge 
document.body.append(background); 
background.append(text); 
background.append(hat); 
background.append(head);

//Creats the text
text.innerHTML = "Happy Holidays";
text.style.color = "white";
text.style.background = "black";
text.style.width = "100%";
text.style.textAlign = "center"
text.style.fontSize = "3em";
text.style.fontFamily ="cursive";

//creates the hat
hat.style.border = "transparent solid 25px";
hat.style.width = "0px";
hat.style.height = "0px";
hat.style.borderBottom = "red solid 200px"
hat.style.margin = "0 auto"
hat.style.position = "relative"
hat.style.top = "5px";

//creates the head
head.style.borderRadius = "50%";
head.style.width = "50px";
head.style.height = "50px";
head.style.margin = "0 auto";
head.style.backgroundColor = "purple"

