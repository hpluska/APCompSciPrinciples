var cols = 0, rows = 0, gridSize = 6, pattern = "";

function northEast(){
    while(rows <= gridSize){
        while(cols <= gridSize){
            if(cols >= rows){
                pattern += "*";
            }else{
                pattern += " ";
            }
        cols++;
    }
    pattern += "\n";
    cols = 0;
    rows++;
    }
console.log(pattern);
}//end function 

function southEast(){
    while(rows <= gridSize){
        while(cols <= gridSize){
            if(cols >= gridSize - rows){
                pattern += "*";
            }else{
                pattern += " ";
            }
        cols++;
    }
    pattern += "\n";
    cols = 0;
    rows++;
    }
console.log(pattern);
}//end function 

function southWest(){
    while(rows <= gridSize){
        while(cols <= rows){
            pattern += "*";
            cols++;
        }
    pattern += "\n";
    cols = 0;
    rows++;
    }
console.log(pattern);
}

function northWest(){
    while(rows <= gridSize){
        while(cols <= gridSize-rows){
            pattern += "*";
            cols++;
        }
    pattern += "\n";
    cols = 0;
    rows++;
    }
console.log(pattern);
}


//southWest();
//northEast();
//northWest();
southEast();





//console.log(coinFlipSim(30));

/*
var die1 = -1;
while(die1 != 2 && die1 != 3){
    die1 = Math.floor(Math.random() * 5 + 1);
    console.log("Die 1 = " + die1);
}
console.log("done");

*/


/*
function coinFlipSim(streak){
    var count = 0;
    var flips = 0;
    while(count < streak){
        if(Math.random() < .5){
            count++;
        }else{
            count = 0;
        }
    flips++;
    }
    return flips;
}
*/




