# Timers

## Introduction
In this lab you will apply Timers to create an interactive "whack-a-mole" game

## Your Tasks

- [ ] Locate the "Timers" lab guide [Timers.pdf](Timers.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Inside your main website directory, make sure you have created the following directory, 
		- Timers
	* Inside this directory create the following files
		- Index.html
		- App.js
	* Make sure the Index.html file properly references the App.html file, then implement the challenge below
	* Show your completed challenge to Ms. Pluska to receive credit for the individual portion of this lab

### Challenge 1

- [ ] Modify your code from the previous lab to create a fully functioning "Whack-a-mole" game.  Below is a recommended workflow, but if you have a different idea for how to accomplish this task, feel free to implement your own!

	* Begin by making sure you have created 9 buttons and have assigned each button an appropriate id.  Some sample code for creating a button is below, 
	
	```
	var b1 = document.createElement("button");
	b1.id = "1";
	b1.style.width = width + "px";
	b1.style.height = height + "px";
	b1.style.position = "absolute";
	b1.style.top = topOffset + "px";
	b1.style.left = leftOffset + "px";
	b1.style.background = "none";
	document.body.append(b1);

	```
	* Write a function that generates a random number 1-9.  Inside the body of this function, set the background of the button that correspondes to the random number to your monster.  
	* Write another function that contains a _setInterval_ timer which calls the function above every second (1000ms)
	* Call the function that contains the _setInterval_ timer and see what happens!  Monsters should randomly be filling up your grid.  Modify your code to fix this problem!
	* Using javascript only, create an element on your screen to hold the time left in your game
	* Modify your functions above to get the time left in your game to display in this element (HINT: the monster is moving every second, so maybe you can update this element with the new time every second)
	* Create another function that alerts the user with the following message when the game is over, 

	```
	"Game over!  \n your final score is " + score
	```

	* Create another function that contains a _timeOut_ timer which calls the above function once the time runs out
	* Finally, get your score working!  When the monster is clicked the score should go up by 1.  When any other button is clicked, the score should go down by 1.  















