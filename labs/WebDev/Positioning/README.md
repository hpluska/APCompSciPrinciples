# Positioning

In this lab, you will use properties such as display and position to improve the layout of the landing page for a fictional design firm, Broadway Design.

The site has some style rules to begin with. You will improve the layout and positioning of the navigation menu at the top of the page and the three supporting sections (Design, Develop, Deploy) below the image.

## Your Tasks

- [ ] Locate the "Positioning" lab guide [Positioning.pdf](Positioning.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* Implement challenge 1
	* Show your completed challenge to Ms. Pluska or her designated TA to receive credit for the individual portion of this lab

### Challenge 1

- [ ] In your main website directory, create a directory called _Positioning_.  Inside this directory add the following files, 

	* [Positioning/index.html](Positioning/index.html)
	* [Positioning/style.css](Positioning/style.css)
	* [Positioning/bg.jpg](Positioning/bg.jpg)

- [ ] Complete the following

1. The .container which holds the main content is not centered.  Locate the .container class and center it. 

2.  Notice the text near the bottom is not centered.  This is because we centered the .container element, but did not center the text. Return to the .container class and align the text so it is centered. 

3.  The \<header\> currently scrolls with the rest of the document.
Set its position property so that it stays stuck to the top of the window when the document is scrolled.

4. The \<header\> has shrunk!
Change the width of the same element so that it stretches across its entire parent element.

5. List items (\<li\>) inside of the navigation section (\<nav\>) are currently displayed as a list.
Set their display property so that they can appear next to each other horizontally (but so that you still set their width in the next task).

6. Set the width of the same elements to 5em.

7. After changing the position of the \<header\> element to fixed, the contents of the entire site after it shifted upwards.  Set the position of \<main\> so that we can position it relatively.

8. The \<header\> has disappeared behind the \<main\>.  Use z-index to make the \<header\> visible.

8. Now the navigation bar looks good, but the title is cramped at the top of the page.
Offset \<main\> by 5em pixels from the top.

9. Now, fix up the supporting elements styles below the image.
Add a declaration to the .supporting .col rule set so that these elements can appear horizontally next to each other, but do not the define the height and width.

10. Inspect the .supporting .col elements—they don't seem to be flowing horizontally yet because they have no set width. Set the width of the .supporting .col elements to 10em.

11. Great work, the Broadway Design site looks much better! Make the \<footer\> element also fixed to the bottom of the page regardless of scrolling.

12. Now the footer disappeared!  Set the width of the footer so that it takes up 100% of the width of the screen.  Then, anchor it to the bottom of the page use the bottom property to anchor it to the bottom. 

13.  Uh-oh...now the .supporting .col elements are crowded by the footer.  It looks like some space needs to be create around these elements so they display properly.  Add 5em margins to both the top and bottom of the .supporting .col elements. 

