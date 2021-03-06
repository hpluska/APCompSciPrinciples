# Event Handlers

## Introduction
In this lab you will learn how to create interactivity on a website by assigning a function to respond to a specific event firing, or triggering. 

## Your Tasks

- [ ] Locate the "Event Handlers" lab guide [EventHandlers.pdf](EventHandlers.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Inside your main website directory, make sure you have created the following directory, 
		- EventHandlers
	* Inside this directory create the following files
		- Index.html
		- App.js
	* Make sure the Index.html file properly references the App.html file, then implement the challenges below
	* Show your completed challenge to Ms. Pluska to receive credit for the individual portion of this lab

### Challenge 1

- [ ] Create a grid of 9 buttons like that shown in the [image](buttonGrid.jpg)
	* Begin be declaring and initializing two variables which will represent the width and the height of your buttons
	* Using javascript only, create 9 buttons and have them display as a grid on the page.  The width, height, and position of each button should be defined in terms of the width and height variables above.  

### Challenge 2

- [ ] Make the buttons turn red when clicked
	* Create a function that accepts an event as a parameter.  In the body of this function make the target associated with this event turn red, 

		```
		event.target.style.backgroundColor = "red";
		```

	* Create a click event listener for each button.  Each time a button is clicked, the function above should be called

### Challenge 3

- [ ] Make a monster appear when one of the buttons is clicked
	* Create another function that accepts an event as a parameter.  In the body of this function make the background of the target associated with this event change to a monster.  

		```
		event.target.style.backgroundImage = "url('path to your image')";

		```
	* Create a click event listener for one of your buttons.  Each time the button is clicked, the function above should be called and the background of the button should change to the monster

### Challenge 4

- [ ] Implement scoring

	* Declare a new variable called score an initialize this to 10
	* Using javascript only, create a new element on your page that will hold the score (a div or p element for example)
	* Make the score variable you declared appear on the screen.  See the code below for an example.  In the example below, the element you created above has been assigned to the variable _scoreHolder_  

	```
	scoreHolder.innerHTML = "Score = " + score;
	```

	* Create a new function that deducts one from the score _and_ updates the innerHTML of the element above

	```
	score = score - 1;
	```

	* Call this function wherever you want the score to be updated
	













