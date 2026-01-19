
var gameDiv = document.createElement("div");
gameDiv.style.width = "300px";
gameDiv.style.height = "600px";
gameDiv.style.backgroundColor = "violet";
var gameTitle = document.createElement("H1");
var gameText = document.createTextNode("Ball Bounce");
gameTitle.style.textAlign = "center";
gameTitle.append(gameText);
gameDiv.append(gameTitle);
document.body.append(gameDiv);
var gameDirections = document.createElement("p");
gameDirections.innerHTML = "Let's dribble the ball using any key on the keyboard. Hold a key down to lift the ball, then release a key to drop the ball."
gameDirections.style.textAlign = "center";
gameDiv.append(gameDirections);

var ball = document.createElement("div");
ball.style.position = "absolute";
ball.style.borderRadius = "50%";
ball.style.width = "50px";
ball.style.height = "50px";
ball.style.top = "570px";
ball.style.left = "125px";
ball.style.backgroundColor = "yellow";
gameDiv.append(ball);

// document.body.addEventListener("keydown", ballUp);
// document.body.addEventListener("keyup", ballDown);

// function ballUp(e){
//     console.log(e.key)
//     ball.style.top = 270 + "px"
// }
// function ballDown(){
//     ball.style.top = 570 + "px"
// }



