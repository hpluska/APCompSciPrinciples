# The Math Operations

## Introduction
In this lab you will apply math operations to solve problems. You will also apply the random() method to make your application less predictable and more interesting 

## Your Tasks

- [ ] Locate the "MathOperations" lab guide [MathOperations.pdf](MathOperations.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Inside your main website directory, make sure you have created the following directory, 
		- MathOperations
	* Inside this directory create the following files
		- Index.html
		- App.js
	* Make sure the Index.html file properly references the App.html file, then implement the challenges below
	* Show your completed challenge to Ms. Pluska to receive credit for the individual portion of this lab

### Challenge 1

- [ ] Write code that could be used to prompt a user for a number, then print the reverse of the number to the screen.  Your code should work for any number with 4 digits. 

HINT!  When you prompt a user for a number, the variable is returned as a String variable type.  To use the input as a number, you must _cast_ the value to a number.  Consider the example below, 

	```
	var userInput = prompt("Give me a four digit number");
	var num = Number(userInput);
	alert("Your number is " + num);
	```

### Challenge 2

- [ ] Write a random number generator.  Your generator should prompt the user for two numbers.  The first number should be negative.  The second number should be greater than the absolute value of the first number.  The numbers will represent the range.  Once the input is received your program should generate two random integers within the range specified, where the lowest number is inclusive but the highest number is not.  Consider the example below, 

	```
	Type a negative number: -5
	Type a postive number that is greater than 5: 50
	You got a -4 and a 36
	```

### Challenge 3

- [ ] Consider the program your wrote previously.  Write a random number generator, such that each time the page is refreshed and random number between 1 and 9 (both 1 and 9 are inclusive) is generated.  Use this number to randomly make the monster appear at a random location on your grid.













