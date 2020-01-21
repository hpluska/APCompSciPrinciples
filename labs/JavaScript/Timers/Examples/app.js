var score = 10;
var gameTime = 10;
var timeOut;
var time;

gameTimer();
countDown();

function gameOver(){
    alert("Game over! Your score is " + score);
    clearInterval(time);
    clearTimeout(timeOut);
}

function gameTimer(){
    timeOut = setTimeout(gameOver, gameTime*1000);
}

function countDown() {
  time = setInterval(updateTime, 1000);
}


function updateTime() {
  gameTime--;
  document.body.innerHTML = "Time remaining: " + gameTime;
}