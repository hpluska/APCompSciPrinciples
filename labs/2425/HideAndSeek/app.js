var dim = 100;
// var clicks = 0;
var score = 0;

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
    b.addEventListener("click", check)
    document.body.append(b); 
    return b; 
}
// 
function check(e){
    //console.log(e.target.id)
    score = score + 1;
}

function makeMonster(){
     var monsterButton = document.getElementById("8");
    monsterButton.addEventListener("click", found);
}

function found(e){
    var foundButton = e.target.id;
    document.getElementById(foundButton).style.backgroundColor = "red"
    alert("GAME OVER! You found the monster in " + score + " clicks!");
}

var b0 = makeButton(dim, dim*0, dim*0, 0);
var b1 = makeButton(dim, dim*1, dim*0, 1);
var b2 = makeButton(dim, dim*2, dim*0, 2);
var b3 = makeButton(dim, dim*3, dim*0, 3);
var b4 = makeButton(dim, dim*4, dim*0, 4);
var b5 = makeButton(dim, dim*0, dim*1, 5);
var b6 = makeButton(dim, dim*1, dim*1, 6);
var b7 = makeButton(dim, dim*2, dim*1, 7);
var b8 = makeButton(dim, dim*3, dim*1, 8);
var b9 = makeButton(dim, dim*4, dim*1, 9);
makeMonster();