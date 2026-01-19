time = prompt("Enter the time as an integer")
timeToStart = 5 
var gameTimer;
var countDown = setInterval(updateTime, 1000); 

var b = document.createElement("button");
b.innerHTML = "Click Me!"
b.style.width = "150px"
b.style.height = "50px"
b.style.backgroundColor = "red"
document.body.append(b)

var results = document.createElement("div");
results.style.width = "150px"
results.style.height = "20px"
results.style.fontSize = "2em"
results.style.textAlign = "center"
document.body.append(results)


var count = 0;

function updateTime(){
    timeToStart--;
    results.innerHTML = "Starting in " + timeToStart

    if(timeToStart == 0){
        results.innerHTML = "GO!"
        b.addEventListener("click", countClicks);
        gameTimer = setTimeout(gameOver, time*1000);
        clearInterval(countDown)
    }
}

function countClicks(){
    count++;
    results.innerHTML = count + " clicks!"
}

function gameOver(){
    alert("You clicked " + count + " times in " + time + " seconds")
    b.removeEventListener("click", countClicks)
}