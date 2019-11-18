var d = document.body; 

console.log(d);

var h = document.head;
console.log(h);
var p = d.firstElementChild;
console.log("first element child: " + p);
var l = document.links;
console.log("links: " + l);
var c = d.children;
console.log(c);



var sports = document.getElementById("sports");
console.log("sports children: " + sports.childNodes);


var p2 = document.getElementById("pet");
//p2.innerHTML = "Gecko";
//document.getElementById("time2").innerHTML = "3 years";

var about = document.getElementById("about");
//console.log(about);
//about.style.backgroundColor = "blue";
//about.style.margin="20px";
//about.style.border="thick dashed yellow";

var s = document.getElementById("sports").firstElementChild;
console.log(s);

document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.style.border="2em dashed yellow";
document.getElementById("sports").style.textAlign = "right";
