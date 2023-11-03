// var i = document.createElement("img");
// i.src = "cat.webp";
// i.alt = "cat butt"
// document.body.append(i);
// i.setAttribute("width", "300px");
// i.setAttribute("height", "200px");

var someElement = document.createElement("div");
someElement.innerHTML = "My Element!"
someElement.id = "e1";
document.body.append(someElement);

var e = document.getElementById("e1");
e.hidden = false;


