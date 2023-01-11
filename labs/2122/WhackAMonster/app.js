var dim = 100; 
var score = 0;
var currentLoc; 
var b0 = makeButton(dim, dim*0, dim*0, 0); 
var b1 = makeButton(dim, dim*1, dim*0, 1); 
var b2 = makeButton(dim, dim*2, dim*0, 2); 
var b3 = makeButton(dim, dim*3, dim*0, 3); 
var b4 = makeButton(dim, dim*0, dim*1, 4); 
var b5 = makeButton(dim, dim*1, dim*1, 5); 
var b6 = makeButton(dim, dim*2, dim*1, 6); 
var b7 = makeButton(dim, dim*3, dim*1, 7);
var b8 = makeButton(dim, dim*0, dim*2, 8); 
var b9 = makeButton(dim, dim*1, dim*2, 9); 
var b10 = makeButton(dim, dim*2, dim*2, 10); 
var b11 = makeButton(dim, dim*3, dim*2, 11); 
var b12 = makeButton(dim, dim*0, dim*3, 12); 
var b13 = makeButton(dim, dim*1, dim*3, 13); 
var b14 = makeButton(dim, dim*2, dim*3, 14); 
var b15 = makeButton(dim, dim*3, dim*3, 15);

moveTimer = setInterval(moveMonster, 1000);

function makeButton(d, xPos, yPos, id){ 
    var b = document.createElement("button"); 
    b.style.border = "black solid thin"; 
    b.style.width = d+"px"; 
    b.style.height = d+"px"; 
    b.style.backgroundColor = "lime"; 
    b.style.position = "absolute"; 
    b.style.left = xPos+"px"; 
    b.style.top = yPos+"px"; 
    b.id = id; 
    b.addEventListener("click", miss); 
    document.body.append(b); 
    return b; 
} 

function miss(){
    score--;
}


function moveMonster(){ 
    currentLoc = Math.floor(Math.random()*16);
    document.getElementById(currentLoc).style.backgroundColor = "red";
}

