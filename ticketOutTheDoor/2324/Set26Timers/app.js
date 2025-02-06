// var gameTimer; 
// var timeLeft; 
// var score = 10; 
// var gameTime = 15; 
// gameTimer();
// countDown();

// function gameTimer(){ 
//   gameTimer = setTimeout(gameOver, gameTime*1000); //creates the countdown
// } 

// function countDown() { 
//   timeLeft = setInterval(updateTime, 1000); 
// } 

// function updateTime(){ 
//   gameTime--; 
//   score += 1;

//   document.body.innerHTML = "time left " + gameTime + " your score is " + score;
// }

// function gameOver(){

//   alert("Game over!  Your score is " + score);
//   clearTimeout(gameTimer);
//   clearInterval(timeLeft);
// }

/*var num = 1234;
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
*/





// var timer;
// delayTimer();

// function delayTimer() {
//   timer = setTimeout(delayedFunction, 3000);
// }

// function delayedFunction() {
//   alert("Three seconds have elapsed.");
// }




// var timer2;

// function repeatEverySecond() {
//   timer2 = setInterval(sendMessage, 1000);
// }

// function sendMessage() {
//   var d = new Date();
//   document.body.innerHTML = d.toLocaleTimeString();
// }

// repeatEverySecond();


// var timeoutID;
// //delayTimer();

// function delayTimer() {
//   timeoutID = setTimeout(delayedFunction, 3000);
// }

// function delayedFunction() {
//   alert("Three seconds have elapsed.");
//   clearAlert();
// }

// function clearAlert() {
//   clearTimeout(timeoutID);
// }

var timeOut, timeLeft;
var score = 10;
var gameTime = 11;


gameTimer();
countDown();

function gameTimer(){
    timeOut = setTimeout(gameOver, gameTime*1000);//after 10 seconds
}

function countDown() {
     timeLeft = setInterval(updateTime, 1000);

}
function updateTime(){
     gameTime--;
     document.body.innerHTML = (gameTime - 1);
}


function gameOver(){

    clearInterval(timeLeft);
    clearTimeout(timeOut);
    alert("Game over")
}


