var i = document.createElement("img");
document.body.append(i);
i.src = "cat.webp"
i.setAttribute("width", "200px");

var h = document.createElement("a");
h.href = "http://google.com";
h.innerHTML = "click on me"
h.target = "_BLANK"
document.body.append(h)
