
var houses = [];
houses[3] = "Wilma";
houses[6] = "Barney";
houses[2] = "Homer";

console.log(houses[4]);

console.log(houses);

/*
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
sort();
console.log(houses);
console.log(alphabetized());
*/
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//the last index is 9
// function doSomething(j){

//     while(j != nums.length){//length is 10
//         console.log(nums[j]);
//         j+=2;   
//     }
// }

// doSomething(2);

