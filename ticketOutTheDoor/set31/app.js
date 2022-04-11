/*var groceryList = [] ;
groceryList.push("apples");
groceryList.push("carrots");
groceryList.push("coffee");

var temp = groceryList[0];//assigns apples to temp
groceryList[0] = groceryList[1];//assigns carrots to position 0
groceryList[1] = temp;//assigns apples to position 1

console.log(groceryList);
*/
/*
houses = [] ;
houses[0] = "Bart", houses[1] = "Kyle", houses[2] = "Bugs", houses[3] = "Marvin";
console.log(houses);
houses.splice(2, 1);
console.log(houses);
houses.splice(1, 0, "Bugs");
console.log(houses);

var houses = ["Bart", "Kyle", "Marvin"];
var houses = ["Bart", "Homer", "Kyle", "Marvin"];
console.log(houses.length);

console.log(houses[houses.length-1]); //prints Marvin
*/

var getInput = document.createElement("input");
document.body.append(getInput);

var showButton = document.createElement("button");
showButton.style.width = "100px";
showButton.style.height = "25px";
showButton.innerHTML = "SHOW";
document.body.append(showButton);

showButton.addEventListener("click", getValue);

function getValue(){
    var userInput = getInput.value;
}