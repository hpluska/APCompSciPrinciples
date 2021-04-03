var houses = [];
houses[0] = "Marvin";
houses[1] = "Kyle";
houses[2] = "Bugs";
houses[3] = "Bart";

function swap(a, b){
    var temp = houses[a];
    houses[a] = houses[b];
    houses[b] = temp;
}

function minToFront(j){
    var minIndex = j;
    var min = houses[j];
    for(var i = j; i < houses.length; i++){
        if(houses[i] < min){
            minIndex = i;
            min = houses[i];
        }
    }
    swap(j, minIndex);
}

function sort(){
    for(var j = 0; j < houses.length; j++){
        minToFront(j);
    }
}

function alphabetized(){

    for(var i = 1; i < houses.length-1; i++){
        if(houses[i+1] < houses[i] ){
            return false;
        }
    }
    return true;
}

console.log(houses);
//sort();
console.log(houses);
console.log(alphabetized());

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doSomething(j){

    while(j != nums.length){
        console.log(nums[j]);
        j+=2;   
    }
}

