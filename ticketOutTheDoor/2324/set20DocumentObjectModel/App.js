var h1 = document.createElement("h1")
h1.innerHTML = "some content"
h1.id = "1"
document.body.append(h1)

var h2 = document.createElement("h1")
h2.innerHTML = "some more content"
h2.id = "1"
document.body.append(h2)

document.getElementById("1").innerHTML = "The changed text"