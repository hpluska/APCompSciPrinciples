//Creates the container to hold the 
//"My Favorite Things" app
//DO NOT EDIT
var container = document.createElement("div");
container.style.border = "solid";
container.style.borderColor = "black";
container.style.width = "25%";
container.style.height = "435px";
container.style.borderRadius = "10px";
container.style.padding = "5px";
container.style.backgroundColor = "DarkBlue";
document.body.append(container);

//Creates the title, "My Favorite Things"
//DO NOT EDIT
var title = document.createElement("h2")
title.innerHTML = "My Favorite Things";
title.style.color = "white";
title.style.cssFloat = "left";
title.style.margin = "2px";
container.append(title);

//Creates the item count element
//The innerHTML of this needs to be updated
//as the user scrolls through the items
var locationCount = document.createElement("h2");
locationCount.innerHTML = "0 of 0";
locationCount.style.color = "white";
locationCount.style.margin = "2px";
locationCount.style.cssFloat = "right";
container.append(locationCount);


//Creates the container to hold the items
//in your list.  Each time an item is added
//it should be appended to the listContainer
var listContainer = document.createElement("div");
listContainer.style.border = "solid";
listContainer.style.borderColor = "grey";
listContainer.style.backgroundColor = "LightGrey";
listContainer.style.position = "relative";
listContainer.style.height = "80%";
listContainer.style.top = "30px";
listContainer.style.textAlign = "left";
container.append(listContainer);

//Creates an input field for the user
//to input their items
var listInput = document.createElement("input");
listInput.placeholder = "add an item";
listInput.style.position = "relative";
listInput.style.cssFloat = "left";
listInput.style.top = "32px";
listInput.style.width = "80%";
container.append(listInput);

//Creates a button that adds the item
//to the list when clicked
var addButton = document.createElement("button");
addButton.innerHTML = "add item";
addButton.style.position = "relative";
addButton.style.cssFloat = "right";
addButton.style.top = "32px";
addButton.style.width = "20%";
container.append(addButton);

//Creates the previous button.  When the previous button
//is clicked the previous item in the list will 
//be highlighted on the screen
var previousButton = document.createElement("button");
previousButton.id = "previous";
previousButton.innerHTML = "previous";
previousButton.style.position = "relative";
previousButton.style.cssFloat = "left";
previousButton.style.top = "32px";
previousButton.style.width = "50%";
container.append(previousButton);

//Creates the next button.  When the next button
//is clicked the next item in the list will 
//be highlighted on the screen
var nextButton = document.createElement("button");
nextButton.id = "next";
nextButton.innerHTML = "next";
nextButton.style.position = "relative";
nextButton.style.cssFloat = "right";
nextButton.style.top = "32px";
nextButton.style.width = "50%";
container.append(nextButton);










