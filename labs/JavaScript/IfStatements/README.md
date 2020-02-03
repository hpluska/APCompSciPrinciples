# _if_ Statements

## Introduction
In this lab you will apply _if_ statements to create a sorting game

## Your Tasks

- [ ] Locate the "_if_ Statements" lab guide [IfStatements.pdf](IfStatements.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Inside your main website directory, make sure you have created the following directory, 
		- IfStatements
	* Inside this directory create the following files
		- Index.html
		- App.js
	* Make sure the Index.html file properly references the App.html file, then implement the challenge below
	* Show your completed challenge to Ms. Pluska to receive credit for the individual portion of this lab

### Challenge 1

- [ ] For this lab you will implement a sorting game.  

	* Your game must have 7 buttons.  Each button will have the same value for all plays.  That is, button 1 = 6, button 2 = 2, button 3 = 4, button 4 = 1, button 5 = 7, button 6 = 5, button 7 = 3.  The code below is an example of how to create the first button.  
	
	```
	var b1 = document.createElement("button");
	b1.id = 6;
	b1.style.width = width + "px";
	b1.style.height = height + "px";
	b1.style.position = "absolute";
	b1.style.top = topOffset + "px";
	b1.style.left = leftOffset + "px";
	b1.innerHTML = b1.id;
	document.body.append(b1);

	```
	* You will need to write a function that knows when the user has selected two buttons. In your "brainstorm", explain and/or provide code for how you plan to do this. 
	* Once two boxes are selected, you will need another function that swaps the buttons.  You can either swap the values of the buttons or their physical location on the screen - this is up to you!  In your brainstorm, explain your plan and/or provide code for swapping the buttons. 
	* Another function which checks whether the buttons are in the correct location is also needed.  Explain and/or provide code for how you will do this. 
	* Finally, you will need a function that updates the time on the screen, along with an interval timer that calls this function. Below is an example of how to create a timer which calls updateTime every second.  

	```
	var time = setInterval(updateTime, 1000);

	```
	* Once the buttons are sorted, you must clear your timer, 

	```
	clearInterval(time);
	```

### Extra Credit

- [ ] Modify your game so that the numbers that appear on each button is different for every round!  You might need to increase the range of values to ensure that each button gets assigned a different number.  Your game should work as above.   












