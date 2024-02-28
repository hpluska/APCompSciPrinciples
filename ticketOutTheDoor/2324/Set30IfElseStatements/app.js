
document.body.style.backgroundColor = "black";

var dim = 50;
var wordToGuess = "APPLE";
var b0 = makeLetterBox(dim, dim*0, dim*0, 0);
var b1 = makeLetterBox(dim, dim*1, dim*0, 1);
var b2 = makeLetterBox(dim, dim*2, dim*0, 2);
var b3 = makeLetterBox(dim, dim*3, dim*0, 3);
var b4 = makeLetterBox(dim, dim*4, dim*0, 4);

function makeLetterBox(d, xPos, yPos, id){
var b = document.createElement("div");
b.style.width = d+"px";
b.style.height = d+"px";
b.style.position = "absolute";
b.style.left = xPos + "px";
b.style.top = yPos + "px";
b.style.border = "blue thin solid";
b.style.fontSize = "2em";
b.style.textAlign = "center";
b.style.paddingTop = "5px";
b.style.color = "white";
b.style.innerHTML = "";
b.id = id;
document.body.append(b);
return b;
}

b0.innerHTML = "A";
var firstLetter = b0.innerHTML;

if(firstLetter == wordToGuess.substring(0,1)){

     b0.style.backgroundColor = "GREEN";

 }else if(firstLetter == wordToGuess.substring(1, 2)||
 firstLetter == wordToGuess.substring(2,3)||
 firstLetter == wordToGuess.substring(3,4)||
 firstLetter == wordToGuess.substring(4)){

       b0.style.backgroundColor = "YELLOW";

}else{

       b0.style.backgroundColor = "GRAY";

}
