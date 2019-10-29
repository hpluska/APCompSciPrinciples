# Selectors

## Introduction
In this lab you will apply CSS selectors to style pages

## Your Tasks

- [ ] Locate the "Selectors" lab guide [Selectors.pdf](Selectors.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Implement challenge 1
	* Show your completed challenge to Ms. Pluska or her designated TA to receive credit for the individual portion of this lab

### Challenge 1

- [ ] In your main website directory, create a directory called _Selectors_.  Inside this directory add the following files, 

	* [Selectors/Index.html](Selectors/Index.html)
	* [Selectors/Styles.css](Selectors/Styles.css)
	* [Selectors/salad.jpg](Selectors/salad.jpg)

- [ ] Complete the following

1.  Take a look at the site's structure in Index.html.

	- Start by making the image at the top of the page a little smaller. Navigate to style.css and write a CSS selector for the img tag.  Within its curly braces, write: height: 150px;
	- Try experimenting with the 150 number and observing the results.

2.  The font size of the recipe description should be larger. 

	- Locate the <h1></h1> tag at the top of the page and add a class attribute called _description_ to this tag
	- In Styles.css, write a CSS selector for the .description class. Within its curly braces, add the following CSS: font-size: 3em;

3. Next, let’s style the cooking time. 

	- Locate the <p></p> tags that enclose _Total time: 45 minutes_. To this tag add an id attribute called _cook-time_.

	- Navigate to Styles.css and add a _cook-time_ id selector. Inside of its curly braces, write: font-weight: bold;

4. Now, let’s change the bullet points of the ingredient list to squares instead of circles. 

	- Start be a writing a class attribute in the <ul> tag called _ingredients_.
	- Navigate to Styles.css and add an  _ingredients_ selector.  Inside of its curly braces, write: list-style-type: square;  (HINT, <li></li> is a nested element)

5. Next let’s make the time for each preparation step appear gray. 

	- Locate each time preparation step, <p>Time: 40 minutes</p>, <p>Time: 4 minutes</p>, <p>Time: 1 minute</p>.  To each of these add a class attribute called _time_

	- In Styles.css, add the _time_ selector.  Then, inside of this selector’s curly braces, write: color: gray;

6. At the bottom of the page, there’s a link to the full recipe. Let’s make the link a different color. 

	- Locate the following links, 
```
<a href="http://www.myrecipes.com/recipe/kale-caesar-salad-chicken" target="_blank">here</a> 
```
```
<a href="youRecipe.html" target="_blank"> here </a>
```
	- Add an _external-link_ selector to each _a_ tag.
	- Navigate to Styles.css and write a selector for the _external-link_ class.  Then, add this code inside of the selector’s curly braces: color: SeaGreen;

7. Let’s make the font Helvetica instead of the default Times New Roman. 

	- Instead of writing multiple selectors to apply the font-family property to all elements on the page, in the Styles.css file write a selector that applies a font-family attribute to all text at once. This can be done using the _body_ tag
	- Then, add this code inside of the body selector’s curly braces:
 font-family: Helvetica;

8. Now, let's change the background color.  

	- Navigate to [https://www.google.com/search?q=hex+color+picker&oq=hex+color&aqs=chrome.0.0j69i57j0l4.10176j0j1&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=hex+color+picker&oq=hex+color&aqs=chrome.0.0j69i57j0l4.10176j0j1&sourceid=chrome&ie=UTF-8)
	- Select a color, then note the HEX value (For example, #e6e9f2).  
	- Return to the body selector you wrote previously. Add this to the body selector's curly braces:  background-color:#e6e9f2;

9. Finally, let's add a "fancy font".  

	- At the top of the page there is text that reads "Check out my fancy font".  Add an id attribute called _fancyFont_ to the <h1 class = "description">Kale Caesar Quinoa Salad with Roasted Chicken</h1> tag.  
	- Delete the line <p id="fancyFont">Check out my fancy font</p>

10. Create 2 new web pages pages in the same web directory.  Write two new recipes.  

	- Each recipe should have the same format as the one you just created.   
	- Each recipe should include a picture

11. In the header section of each page, link the style sheet you just created.






