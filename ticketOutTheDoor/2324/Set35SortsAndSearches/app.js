var arr = [5, 10, 2, 1, 12];

function minToFront(front){
    var min = arr[front];
    var minIndex = front;

    for(var i = front + 1; i < arr.length; i++){
        if(arr[i] < min){
            console.log(arr[i]);
            console.log("Found min!");// Line 9
            min = arr[i];
            minIndex = i;
        }
    }
    

    var temp = arr[minIndex];
    arr[minIndex] = arr[front];
    arr[front] = temp;
    

return arr;
}

function selectionSort(){
    for(var i = 0; i < arr.length; i++){
        minToFront(i);
    }
}

selectionSort();


function linearSearch(arr, target){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}