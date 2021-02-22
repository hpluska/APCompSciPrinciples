var num = 1234;
var numLength = Math.floor(Math.log10(num)+1);//The number of digits in num
var count = 0;

timer = setInterval(show, 1000);
timerEnd = setTimeout(end, numLength*1000);

function show(){
  count++;
  var d = Math.pow(10, count);
  console.log(num%d); 
}

function end(){
  clearInterval(timer);
}




/*

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
*/