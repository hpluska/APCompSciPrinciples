
//var someElement = document.getElementById('about');


/*
Creates a paragraph, assigns the innerHTML and appends it to the page
*/


var myParagraph = document.createElement("p");
myParagraph.innerHTML = "This is some text in my paragraph";
myParagraph.id = "p1";
document.body.append(myParagraph);

myParagraph.style.borderColor = "green";
myParagraph.style.borderStyle = "dotted";

var anotherParagraph = document.createElement('p');   
anotherParagraph.innerHTML = "The text inside another paragraph";  
anotherParagraph.id = "p2";
myParagraph.append(anotherParagraph);
//document.getElementById('p1').append(anotherParagraph);

anotherParagraph.style.borderColor = "tomato";
anotherParagraph.style.borderStyle = "dotted";






/* 
removes the element about
*/
var e = document.getElementById("about");
e.remove();

/*
hides the element sport
*/
var e2 = document.getElementById("sport");
e2.hidden = true;


//var someImage = document.getElementById("img1");
//console.log(someImage.src);
//someImage.src = "Images/image2.png";


var i1 = document.getElementById("img1").getAttribute('src');//Pointer for image 1
console.log(i1);
var i2 = document.getElementById("img2").getAttribute("src");//pointer to image 2
document.getElementById("img1").src = i2;//assigns the source of img1 to i2
document.getElementById("img2").src = i1;


/*

document.getElementById("img2").src = i1;
*/


/*
Swaps images, img1 and img2
*/

//var temp = document.getElementById("img1").getAttribute("src");
//console.log(temp);

//document.getElementById("img1").src = document.getElementById("img2").getAttribute("src");
//document.getElementById("img2").src = temp;

/*
Changes the link reference
*/

document.getElementById("link1").href = "http://youtube.com";
document.getElementById("link1").innerHTML = "Go to You Tube"


