var timer;
//delayTimer();

function delayTimer() {
  timer = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
  alert("Three seconds have elapsed.");
}

var timer2;
//repeatEverySecond();

function repeatEverySecond() {
  timer2 = setInterval(sendMessage, 1000);
}

function sendMessage() {
  var d = new Date();
  document.body.innerHTML = d.toLocaleTimeString();
}

var timeoutID;
//delayTimer();

function delayTimer() {
  timeoutID = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
  alert("Three seconds have elapsed.");
  clearAlert();
}

function clearAlert() {
  clearTimeout(timeoutID);
}

var gameTimer, gameOverTimer;
var timeLeft;
var score = 10;
var gameTime = 10;
countDown();
gameTimer();
function gameTimer(){
     timeOut = setTimeout(gameOver, gameTime*1000);
}
function countDown() {
     timeLeft = setInterval(updateTime, 1000);

}
function updateTime(){
     gameTime--;
     document.body.innerHTML = gameTime;
}

function gameOver(){
  clearInterval(timeLeft);
  clearTimeout(gameOverTimer);
}
