
var storeContainer = document.createElement("div");
document.body.append(storeContainer);
storeContainer.style.width = "140px";
storeContainer.style.border = "black solid medium";
storeContainer.style.height = "325px";

var monster = document.createElement("div");
monster.style.position = "absolute";
monster.style.top = "40px";
monster.style.width = "140px";
monster.style.height = "300px";
monster.style.backgroundImage = "url('monster.png')";
monster.style.backgroundRepeat = "no-repeat";
storeContainer.append(monster);

var lockButton = document.createElement("div");
lockButton.innerHTML = "lock";
lockButton.style.border = "black solid thin";
lockButton.style.width = "50px";
lockButton.style.float = "right";
lockButton.style.textAlign = "center";
lockButton.style.backgroundColor = "lightgrey";
storeContainer.append(lockButton);

var unlockButton = document.createElement("div");
unlockButton.innerHTML = "unlock";
unlockButton.style.border = "black solid thin";
unlockButton.style.width = "50px";
unlockButton.style.float = "left";
unlockButton.style.textAlign = "center";
unlockButton.style.backgroundColor = "lightgrey";
storeContainer.append(unlockButton);

var door = document.createElement("div");
door.style.position = "relative";
door.style.top = "20px";
door.style.width = "100%";
door.style.height = "300px";
door.style.backgroundColor = "yellow";
door.innerHTML = "";
door.style.textAlign = "center";
storeContainer.append(door);

function openDoor() {
    door.hidden = true;
}

function closeDoor(){
    door.hidden = false;
}
    
function open(){
    door.innerHTML = "OPEN";
    unlockButton.style.backgroundColor = "lightGreen";
    lockButton.style.backgroundColor = "lightGrey";
    door.addEventListener('click', openDoor);
}

function closed(){
    door.innerHTML = "CLOSED";
    //Write your code below
    unlockButton.style.backgroundColor = "lightGrey";
    lockButton.style.backgroundColor = "pink";
    closeDoor();
    door.removeEventListener('click', openDoor);
}
  
unlockButton.addEventListener('click', open);
lockButton.addEventListener('click', closed);
monster.addEventListener("click", closeDoor);
  
