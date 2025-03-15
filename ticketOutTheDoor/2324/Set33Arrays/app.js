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
var shoppingList = [];

var getInput = document.createElement("input");
document.body.append(getInput);


var showButton = document.createElement("button");
showButton.style.width = "100px";
showButton.style.height = "25px";
showButton.innerHTML = "Add item";
document.body.append(showButton);

showButton.addEventListener("click", getValue);

function getValue(){
    var userInput = getInput.value;
    shoppingList.push(userInput);
    console.log(shoppingList)
    getInput.value = "";

 
}

// var houses = ["Bugs", "Marvin"];
// houses.splice(2, 0, "Kyle", "Stan");
// console.log(houses);

var nums = [];
nums.push(1);
nums.push(2);
nums.push(3);
nums.push(5);

nums.pop();
console.log(nums);