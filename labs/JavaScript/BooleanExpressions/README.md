# Boolean Expressions

## Introduction
In this lab you will apply boolean operators to create an addition game

## Your Tasks

- [ ] Locate the "Boolean Expressions" lab guide [BooleanExpressions.pdf](BooleanExpressions.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Inside your main website directory, make sure you have created the following directory, 
		- Booleans
	* Inside this directory create the following files
		- Index.html
		- App.js
	* Make sure the Index.html file properly references the App.html file, then implement the challenge below
	* Show your completed challenge to Ms. Pluska to receive credit for the individual portion of this lab

### Challenge 1

- [ ] For this lab you will implement the addition game you brainstormed in the lab guide.  Below is a recommended workflow, but if you have a different idea for how to accomplish this task, feel free to implement your own!

	* Begin by writing a function called makeRandomNum that creates a random number from 0 (inclusive) to 9 (inclusive).  This function should return a random number. 

	* Now make 7 buttons.  The id of each button should be assigned to the random number created above.  The innerHTML should also be assigned to this number.  See the code below as an example. 
	
	```
	var b1 = document.createElement("button");
	b1.id = makeRandomNum();
	b1.style.width = width + "px";
	b1.style.height = height + "px";
	b1.style.position = "absolute";
	b1.style.top = topOffset + "px";
	b1.style.left = leftOffset + "px";
	b1.innerHTML = b1.id;
	document.body.append(b1);

	```
	* Write another function that generates and returns another random number from 5 (inclusive) to 20 (inclusive).
	* Create an html element to hold the "The numbers must add to = " box.  Assing the value of the random number generated above to the innerHTML of this element. 
	* Create a function that 
		- adds the values of the buttons when they are clicked.  
		- assigns the innerHTML of the "total = " element.  
		- changes the innerHTML of the button to "" when it is clicked. 
		- assigns the innerHTML of the true/false field
	* Each of your buttons will now need an event listener.  Each time the button is clicked, the function above should be called. 
	* Create a function 
		- that updates the id's and innerHTML of each button to a new random number
		- updates the innerHTML of "The numbers must add to = " box with a new random number
		- updates the innerHTML of the true/false field to false
	* Create a deal button.  Each time the deal button is clicked, call the function above. 
	* Finally, fine tune your game to make it work!  You will be adding to this game in our next lab!















