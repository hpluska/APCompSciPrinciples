
/**
 * Required variables. 
 * DO NOT EDIT
 */
var width = Card.width;
var height = Card.height;
var topOffset = 0;
var leftOffset = 0;
var dealt=[];
var suits=[];
var values = [];
var total = 0;
var shuffle = document.createElement("button");
var minToFront = document.createElement("button");
var deal = document.createElement("button");
var sortButton = document.createElement("button");
var cardHolder = document.createElement("div");
var dealInput = document.createElement("input");
var newDeck = new DeckOfCards();
var cardArray = newDeck.getCards();
makeDOMElements();

/**
 * TODO:  complete the sumDealt function
 * the sumDealt function sums the values of
 * all the cards in the dealt hand and returns the
 * total
 */
function sumDealt(){

    return total;
}

/**
 * TODO:  Complete the countSuits function
 * which counts the number of hearts, spades, clubs, 
 * and diamonds.  The function returns an array 
 * called suits where,
 * index 0 represents the total number of hearts, 
 * index 1 represents the total number of spades
 * index 2 represents the total number of clubs
 * index 3 represents the total number of diamonds
 */
function countSuits(){
    return suits;
}

/**
 * TODO:  Complete the countValues function
 * which counts the number of cards with a value of 1
 * 2, 3, etc. The function returns an array 
 * called values where,
 * index 1 represents the total number of cards with a value of 1 
 * index 2 represents the total number of cards with a value of 2
 * index 3 represents the total number of cards with a value of 3
 * etc.
 */
function countValues(){
    return values;
}

/**
 * TODO:  complete the minCardToFront function
 * which brings the minimum card in the dealt
 * hand to the front of the deck AND displays the 
 * new hand in the correct order
 */
function minCardToFront(){

    showDeal();
}



/**
 * TODO (EXTRA CREDIT):  complete the sortCards function
 * which sorts a dealt hand of cards AND displays
 * the new hand in the correct order.
 */
function sortCards(){

    showDeal();
}


/**
 * DO NOT EDIT ANYTHING BELOW
 */

/**
 * Shuffels the deck of cards
 * DO NOT EDIT
 */
function shuffleCards(){

    for(var n = 0; n < cardArray.length;n++){
    var num1 = Math.floor(Math.random()*52);
    var num2 = Math.floor(Math.random()*52);
    swapCards(num1, num2);
    }
}

/**
 * Swaps two cards in the deck of cards
 * @param {first card} c1 
 * @param {second card} c2 
 * DO NOT EDIT
 */
function swapCards(c1, c2){
    var temp = cardArray[c1];
    cardArray[c1] = cardArray[c2];
    cardArray[c2] = temp;
}

/**
 * Deals a NEW set of cards of a specified size
 * to the screen.  The previous set is completely overwritten
 * DO NOT EDIT
 */
function dealCards(d){
    cardHolder.innerHTML = "";
    dealt = [];
    leftOffset = 0;
    topOffset = 0;
    d = Number(dealInput.value);
    
    for(var c = 0; c < d; c++){
        
        var temp = cardArray[c].makeCardButton();
        dealt.push(cardArray[c]);

        cardHolder.append(temp);
        temp.style.left = width*leftOffset;
        temp.style.top = height+height*topOffset;
        leftOffset++;
        if(leftOffset == 13){
            topOffset++;
            leftOffset = 0;
        }

    }

    console.log("The total is " + sumDealt());
    console.log("The number of each suit is " + countSuits());
    console.log("The number of each card value is " + countValues());
    
} 

/**
 * Displays the current dealt hand
 * of cards
 * DO NOT EDIT
 */
function showDeal(){

    cardHolder.innerHTML = "";
    leftOffset = 0;
    topOffset = 0;
    
    for(var c = 0; c < dealt.length; c++){
        var temp = dealt[c].makeCardButton();
        cardHolder.append(temp);
        temp.style.left = width*leftOffset;
        temp.style.top = height+height*topOffset;
        leftOffset++;
        if(leftOffset == 13){
            topOffset++;
            leftOffset = 0;
        }

    }
}


/**
 * Positions the necessary DOM elements
 * on the page 
 * DO NOT EDIT
 */

function makeDOMElements(){

    shuffle.innerHTML = "shuffle";
    shuffle.style.margin = "3px";
    document.body.append(shuffle);
    shuffle.addEventListener("click", shuffleCards);

    minToFront.innerHTML = "min to front";
    minToFront.style.margin = "3px";
    document.body.append(minToFront);
    minToFront.addEventListener("click", minCardToFront);

    sortButton.innerHTML = "sort";
    sortButton.style.margin = "3px";
    document.body.append(sortButton);
    sortButton.addEventListener("click", sortCards);

    deal.innerHTML = "deal";
    deal.style.margin = "3px";
    document.body.append(deal);
    deal.addEventListener("click", dealCards);

    dealInput.placeholder = "enter dealSize";
    document.body.append(dealInput);

    document.body.append(cardHolder);
    cardHolder.style.position = "absolute";
    cardHolder.top = height;
    cardHolder.left = width;
}











