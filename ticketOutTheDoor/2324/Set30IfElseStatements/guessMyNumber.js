// var num = Math.floor(Math.random() * 100 + 1);
var num = 50;
var guess = prompt("guess my number (1 - 100)");
guess = Number(guess);
console.log("num = " + num);
var result = "";

if(guess > num){
    result += "Too big,";
    if(guess <= num + 5){
        result += "hot"
    }else if(guess <= num + 10){
        result += "warm";
    }else{
        result += "cold";
    }
}else if(guess < num){
    result += "Too small,";
    if(guess >= num - 5){
        result += "hot";
    }else if(guess >= num - 10){
        result += "warm";
    }else{
        result += "cold";
    }
}else{
    result += "You guessed it!";
}

console.log(result);