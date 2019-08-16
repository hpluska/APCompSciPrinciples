# Personal Innovations

## Introduction
Welcome to Computer Science Principles! This lesson is about getting excited about the course and connecting your own personal interests to computer science. For this activity, you will make a “rapid” prototype of an innovative idea and share it with the class.

## Your Tasks

- [ ] Locate the CardSearchAndSort lab guide [CardSearchAndSort.pdf](CardSearchAndSort.pdf)

- [ ] Complete the group portion of the lab as instructed

- [ ] Complete the individual portion of the lab

	* If you have not finished the CardCounter lab, you must do this before continuing with this lab
	* Locate your CardCounter project folder, then locate the CardCounter class. 
	* Implement the following methods in the CardCounter class

- locateCard

In the CardCounter class write a method called locateCard.  The locateCard method should search the dealtCardsArray for a Card.  If the Card is found, the index of the card in the dealtCardsArray is returned, otherwise the method will return -1.   The locateCard method should have the following signature, 

```
public int locateCard(Card[] cArr, Card c);

```

- minToFront

In the CardCounter class write a method called minToFront.  The minToFront method should locate the card with the lowest value in the dealtCardsArray then move it to the front of the array. It should return the new dealtCardsArray. The minToFront method should have the following signature,
 
```
public Card[] minToFront(Card[] cArr);

```

- cardSort

In the CardCounter class write a method called cardSort.  The cardSort method should accept an unordered array of cards, then return the sorted array.  The cardSort method should have the following signature, 

```
public Card[] cardSort(Card[] cArr);

```

