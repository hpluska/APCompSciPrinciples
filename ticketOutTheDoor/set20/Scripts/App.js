
var temp = document.getElementById("img1").getAttribute("src");
document.getElementById('img1').src = document.getElementById("img2").getAttribute("src");
document.getElementById("img2").src = temp;




//var someElement = document.getElementById('about');
/*
var myParagraph = document.createElement('p');    
myParagraph.innerHTML = "The text inside paragraph";   
document.body.append(myParagraph); 

myParagraph.id = "p1";

myParagraph.style.borderColor = "green";
myParagraph.style.borderWidth = "5px";
myParagraph.style.borderStyle = "dotted";

var anotherParagraph = document.createElement("p");
anotherParagraph.innerHTML = "Christmas is near!";
anotherParagraph.id = "p2";
myParagraph.append(anotherParagraph);

document.getElementById("p2").style.borderColor = "tomato";
document.getElementById("p2").style.borderStyle = "dotted";
document.getElementById("p2").style.borderWidth= "5px";

myParagraph.remove();
*/


/* 
removes the element about
*/

/*
var e = document.getElementById("about");
e.remove();
*/
/*
hides the element sport
*/
/*
var e2 = document.getElementById("sport");
e2.hidden = true;
*/


//var someImage = document.getElementById("img1");
//console.log(someImage.src);
//someImage.src = "Images/image2.png";


/*

document.getElementById("img2").src = i1;
*/


/*
Swaps images, img1 and img2 METHOD 1
*/
/*
var temp = document.getElementById("img1").getAttribute("src");
document.getElementById("img1").src = document.getElementById("img2").getAttribute("src");
document.getElementById("img2").src = temp;

/*
Swaps images, img1 and img2 METHOD 2
*/
/*
var i1 = document.getElementById("img1").getAttribute('src');//Pointer for image 1
var i2 = document.getElementById("img2").getAttribute("src");//pointer to image 2
document.getElementById("img1").src = i2;//assigns the source of img1 to i2
document.getElementById("img2").src = i1;
*/


/*
Changes the link reference
*/

//document.getElementById("link1").href = "http://youtube.com";
//document.getElementById("link1").innerHTML = "Go to You Tube"


