document.body.style.backgroundColor = "black";

var wordToGuess = "BINGO";
var letterCount = 0;

var dim = 50;
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

var b0 = makeLetterBox(dim, dim*0, dim*0, 0);
var b1 = makeLetterBox(dim, dim*1, dim*0, 1);
var b2 = makeLetterBox(dim, dim*2, dim*0, 2);
var b3 = makeLetterBox(dim, dim*3, dim*0, 3);
var b4 = makeLetterBox(dim, dim*4, dim*0, 4);
b0.innerHTML = "I";
letterCount++;
b1.innerHTML = "D";
letterCount++;
b2.innerHTML = "A";
letterCount++;
b3.innerHTML = "H";
letterCount++;
b4.innerHTML = "O";
letterCount++;

var enter = document.createElement("button");
enter.innerHTML = "ENTER";
enter.style.position = "absolute";
enter.style.top = "60px";
enter.addEventListener("click", checkWord);
document.body.append(enter);

function checkWord(){

    for(i = letterCount - 5; i < letterCount; i++){
        var letter = document.getElementById(i);
        if(wordToGuess.includes(letter.innerHTML)){
            if(wordToGuess.substring(i, i+1) == letter.innerHTML){
                letter.style.backgroundColor = "green";
            }else{
                letter.style.backgroundColor = "yellow";
            }
        }else{
            letter.style.backgroundColor = "gray";
        }
    }
}
