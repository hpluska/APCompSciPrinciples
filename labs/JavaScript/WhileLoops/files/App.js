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
var c = new Card();
var d = new Card();
var e = new Card();

/**
 * Creates a button with the word "minToFront" 
 * and appends it to the page
 * TODO:  Add an event listender to the button and call
 * the appropriate function
 */
var minToFront = document.createElement("button");
minToFront.innerHTML = "minToFront";
document.body.append(minToFront);

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
 * Displays 5 cards as buttons on the page
 */
function showCards(){
    
    var h = height;
    //Make card button
    var cardButton1 = a.makeCardButton();
    var cardButton2 = b.makeCardButton();
    var cardButton3 = c.makeCardButton();
    var cardButton4 = d.makeCardButton();
    var cardButton5 = e.makeCardButton();

    //append card button
    document.body.append(cardButton1);
    document.body.append(cardButton2);
    document.body.append(cardButton3);
    document.body.append(cardButton4);
    document.body.append(cardButton5);

    //position card button
    cardButton1.style.top = height + "px";
    cardButton1.style.left = width/2 + width*0 + "px";
    cardButton2.style.top = height + "px";
    cardButton2.style.left = width/2 + width*1 + "px";
    cardButton3.style.top = height + "px";
    cardButton3.style.left = width/2 + width*2 + "px";
    cardButton4.style.top = height + "px";
    cardButton4.style.left = width/2 + width*3 + "px";
    cardButton5.style.top = height + "px";
    cardButton5.style.left = width/2 + width*4 + "px";
}

showCards();
/**
 * minToFront moves the lowest card 
 * in the hand to the front
 * TODO:  Complete the minToFront function
 */
function minToFront(){

    var count = 0;

    while(count < 5){
        if(val2 < val1){

        }
    }
    
}

/**
 * Sorts the cards and displays the 
 * cards in ascending or descending order
 * TODO:  Complete the sort function
 */
function sort(){

    


}

;
