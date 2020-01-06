
var myButton = document.createElement("button");
myButton.innerHTML = "Click Me!";
document.body.append(myButton);

myButton.onclick = function() {
  myButton.innerHTML = "You clicked me!";
}

var width = 200;
var height = 200;
var info = document.createElement("div");
info.innerHTML = "JavaScript is the programming language of the web. You can use it to add dynamic behavior and store information.";
info.style.width = "200px";
info.style.backgroundColor = "red";
info.style.textAlign = "center";
info.style.padding = "10px";
info.style.margin = "10px";
document.body.append(info);


var readMore = document.createElement("button");
readMore.innerHTML = "Read More";
document.body.append(readMore);


var moreInfo = document.createElement("div");
moreInfo.id = "more-info";
moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
moreInfo.style.width = width + "px";
moreInfo.style.height = height + "px";
moreInfo.style.backgroundColor = "red";
moreInfo.style.textAlign = "center";
moreInfo.style.padding = "10px";
moreInfo.style.margin="10px";
moreInfo.style.display = "none";

document.body.append(moreInfo);

//readMore.onclick = function() {
 //   moreInfo.style.display = "block";
 // }

 var showInfo = function(){ 
     moreInfo.style.display = "block";
 }

 var showLess = function(){ 

    readMore.innerHTML = "Show less";
 }

 var grow = function(){
    height = height + 1;
    width = width + 1;
    moreInfo.style.width = width + "px";
    moreInfo.style.height = height + "px";
 }

 readMore.addEventListener('click', showInfo);
 readMore.addEventListener('click', showLess);
 document.addEventListener('wheel', grow);

 //Makes an object go up and down
var box = document.createElement("div");
box.style.width = "50px";
box.style.height = "50px";
box.style.borderWidth = "medium";
box.style.borderColor = "green";
box.style.borderStyle = "dotted";
box.style.position = "absolute";
box.style.bottom = "50px";
document.body.append(box);

 var up = function(event){
    box.style.bottom = "200px";
    console.log(event.which);
 }

 var down = function(){
    box.style.bottom = "50px";

 }
 document.addEventListener("keydown", up);
 document.addEventListener("keyup", down)
//locates keys
 document.addEventListener("keydown", function(event) {
    console.log(event.which);
  });

box.addEventListener("mousedown", function(event){
	if(event.which == 3){
		box.style.backgroundColor = "tomato";
	}
});
