// document.body.style.width = "500px";
// document.body.style.height = "500px";


// document.body.addEventListener("click", changeText); 
// document.body.addEventListener("click", changeBackground); 
// function changeText(){ 
//     document.body.innerHTML = "The text has changed!"; 
// } 
// function changeBackground(){ 
//     document.body.style.backgroundColor = "pink"; 
// }



/*
Exercise 1
*/



// var myButton = document.createElement("button");
// myButton.innerHTML = "Click Me!";
// document.body.append(myButton);

// myButton.onclick = clickFunction;

// function clickFunction(){
//      myButton.innerHTML = "You clicked me!";
// }


/*
Exercise 2
*/



// var contentContainer = document.createElement("div");
// contentContainer.style.backgroundColor = "black";
// contentContainer.style.width = "200px";
// document.body.append(contentContainer);

// var content = document.createElement("div");
// content.innerHTML = "JavaScript is a programming language of the web.  You can use it to add dynamic behavior and store information."
// content.style.backgroundColor = "red";
// contentContainer.append(content);

// var readMoreButton = document.createElement("button");
// readMoreButton.innerHTML = "Read More";
// contentContainer.append(readMoreButton);

// readMoreButton.onclick = readMore

// function readMore(){
//     content.append('MORE STUFF')
// }


// readMoreButton.addEventListener("click", addMoreText);

// function addMoreText(){
//     content.append("MORE TEXT")
//     readMoreButton.removeEventListener("click", addMoreText)

// }

// readMoreButton.addEventListener("click", changeButton);

// function changeButton(){
//     readMoreButton.innerHTML = "Read less"

// }





//  function changeContent(){
//      var moreText = document.createElement("p");
//      moreText.innerHTML = "More info about JavaScript!";
//      content.append(moreText);
//      //readMoreButton.removeEventListener("click", changeContent);
//  }

//  function readLess(){
//      readMoreButton.innerHTML = "read less";
//  }


/*
Exercise 3
*/

// document.body.innerHTML = "Some text!";
// document.body.addEventListener("click", changeText);
// document.body.addEventListener("click", changeBackground);

// function changeText(){
//     document.body.innerHTML = "The text has changed!";
//     console.log("here")
// }

// function changeBackground(){
//     document.body.style.backgroundColor = "pink";
// }

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

// var contentContainer = document.createElement("div");
// contentContainer.style.backgroundColor = "black";
// contentContainer.style.width = "200px";
// document.body.append(contentContainer);

// var content = document.createElement("div");
// content.innerHTML = "JavaScript is a programming language of the web.  You can use it to add dynamic behavior and store information."
// content.style.backgroundColor = "red";
// contentContainer.append(content);

// var readMoreButton = document.createElement("button");
// readMoreButton.innerHTML = "Read More";
// contentContainer.append(readMoreButton);

// readMoreButton.addEventListener("click", addContent);
// readMoreButton.addEventListener("click", changeText);

// function addContent(){
//     var moreText = document.createElement("p");
//     moreText.innerHTML = "More info about JavaScript!";
//     content.append(moreText);
//     readMoreButton.removeEventListener('click',addContent);
// }

// function changeText(){
//     readMoreButton.innerHTML = "Read Less";
// }



  /* 
  Exercise 5
  */
 
// var width = 200;
// var height = 200;
// var moreInfo = document.createElement("div");
// moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
// moreInfo.style.width = width + "px";
// moreInfo.style.height = height + "px";
// moreInfo.style.backgroundColor = "red";
// moreInfo.style.textAlign = "center";
// moreInfo.style.padding = "10px";
// moreInfo.style.margin="10px";
// document.body.append(moreInfo);

// moreInfo.addEventListener('mouseover', changeBackgroundIn);
// moreInfo.addEventListener('mouseout', changeBackgroundOut);
// moreInfo.addEventListener('wheel',changeText);

// function changeBackgroundIn(){
//     moreInfo.style.backgroundColor = "yellow";
// }

// function changeBackgroundOut(){
//     moreInfo.style.backgroundColor = "red";
//     moreInfo.style.width = "800px";
//     moreInfo.innerHTML = "You left!"
// }

// function changeText(){
//     moreInfo.innerHTML = "Stop wheeling!";
//     moreInfo.style.borderRadius = "50%"
// }
 

// //creates a simple div
// var myDiv = document.createElement("div");
// myDiv.style.width = "500px";
// myDiv.style.height = "500px";
// myDiv.style.border = "black solid thin";
// document.body.append(myDiv);

// //registers a wheel event
// myDiv.addEventListener("wheel",changeColor);

// //when the mouse wheel is used the 
// //color of the div is changed
// function changeColor(){
//     myDiv.style.backgroundColor = "tomato";
// }


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


// var width = 200;
// var height = 200;
// var moreInfo = document.createElement("div");
// moreInfo.innerHTML = "JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.";
// moreInfo.style.width = width + "px";
// moreInfo.style.height = height + "px";
// moreInfo.style.backgroundColor = "red";
// moreInfo.style.textAlign = "center";
// moreInfo.style.padding = "10px";
// moreInfo.style.margin="10px";
// document.body.append(moreInfo);

// document.body.addEventListener('keypress', getKey);

// function getKey(e){
//     console.log(e.key);
// }



// var someElement = document.createElement("div");
// someElement.style.width = "100px";
// someElement.style.height = "100px";
// someElement.style.backgroundColor = "purple";
// someElement.style.position = "absolute";
// document.body.append(someElement);
// document.body.addEventListener('keydown',moveDown);
// document.body.addEventListener('keyup', moveUp);

// function moveDown(){    
//     someElement.style.top = "300px";
//     console.log("hello")
// }

// function moveUp(){
//     someElement.style.top = "0px";
// }






