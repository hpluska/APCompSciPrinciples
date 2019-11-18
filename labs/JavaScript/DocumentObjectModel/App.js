var d = document.body; 
var h = document.head;
console.log(h);
var p = d.firstElementChild;
console.log(p);
var l = document.links;
console.log(l);
var c = d.children;
console.log(c);

document.getElementById("sport").innerHTML = "Softball";
var c2 = document.getElementsByClassName("time");
c2[0].innerHTML = "3 years";
c2[1].innerHTML = "5 years";
c2[2].innerHTML = "1 year";

var p2 = document.getElementById("pet");
p2.innerHTML = "Gecko";
//document.getElementById("time2").innerHTML = "3 years";

var about = document.getElementById("about");
console.log(about);
about.style.backgroundColor = "blue";
