
var getInput = document.createElement("input");
document.body.append(getInput);

var showButton = document.createElement("button");
showButton.style.width = 50 + "px";
showButton.innerHTML = "Show";
document.body.append(showButton);
showButton.addEventListener("click", showContents);

function showContents(){
  console.log(getInput.value);
}

