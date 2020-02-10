/**
 * Defines the width and height
 * which will be used to position the buttons
 */
var width = Card.width;
var height = Card.height;

/**
 * Creates a new random card from 
 * a standard 52 card deck
 * TODO: Create two more cards called "b" and "c"
 */
var a = new Card();
var b = new Card();

/**
 * Creates a button with the word "swap" 
 * and appends it to the page
 * TODO:  Add an event listender to the button and call
 * the appropriate function
 */
var swapButton = document.createElement("button");
swapButton.innerHTML = "swap";
document.body.append(swapButton);

/**
 * Creates a button with the word "sort" 
 * and appends it to the page
 * TODO:  Add an event listender to the button and call
 * the appropriate function
 */
var sortButton = document.createElement("button");
sortButton.innerHTML = "sort";
sortButton.style.position = "absolute";
sortButton.style.left = width*2 + "px";
document.body.append(sortButton);

/**
 * Displays two cards as buttons on the page
 * TODO:  Get card "b" to appear next to card "a"
 */
function showTwoCards(){
    
    var h = height;
    //Make card button
    var cardButton1 = a.makeCardButton();
   var cardButton2 = b.makeCardButton();

    //append card button
    document.body.append(cardButton1);
    document.body.append(cardButton2);

    //position card button
    cardButton1.style.top = height + "px";
    cardButton1.style.left = width/2 + width*0 + "px";
}

/**
 * Displays three cards as buttons on the page.
 * TODO:  Get cards "a", "b", and "c" to appear when this
 * function is called
 */
function showThreeCards(){
    

}

/**
 * Swaps cards a and b and displays the result 
 * TODO:  Complete the swap function
 */
function swap(){
    
    //Calls to display the swapped cards
    showTwoCards();
    showThreeCards();
}

/**
 * Sorts the cards and displays the result 
 * TODO:  Complete the sort function
 */
function sort(){

    //Calls to display the sorted cards
    showTwoCards();
    showThreeCards();

}

//Calls to display the cards
showTwoCards();
showThreeCards();
