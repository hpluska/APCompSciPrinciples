# Week 3: April 19 thru April 25

## Introduction

I had the pleasure to read about some amazing projects!  Great job everyone!  If you have not yet done so, make sure you submit your brainstorm to github and complete your post for week 2 to Piazza.  

This week's lesson is going to focus on the following *Create Task* requirement, 

> Implementation of an algorithm that integrates two or more algorithms and integrates mathematical and/or logical concepts; 

We have completing several labs which demonstrate this concept.  This week, you will review some examples and then rework your own code to meet this requirement.  

## Your Tasks

- [ ] Review examples of algorithms that integrate two or more algorithms.  

    An algorithm is just a list of steps that accomplish a task.  Often times however, algorithms need to integrate other algorithms to get the job done. Consider the example below from a lab we did in class.  In this example, *countClicks* is counting each time a button is clicked.  Once the total is 2, two additional algorithms are called - *swap()* and *checkOrder()*

    ```
    function countClicks(event){
    
    clickCount++;
        if(clickCount == 1){
            button1 = event.target.id;
        }
        if(clickCount == 2 ){
            button2 = event.target.id;
            swap();//algorithm to swap the two buttons clicked
            checkOrder();//algorithm to check the order of the buttons
        }   
    }
    ```

    Now, consider another example.  In this example, the algorithm *moveMonster()* relies on the *upScore* algorithm to increment the score and the *updateTime() algorithm, which updates the game time.  

    ```
    function moveMonster() {
    document.getElementById(previousLoc).style.background = "none";
    document.getElementById(previousLoc).removeEventListener("click", upScore);
    var monsterLocation = Math.floor(Math.random()*9 + 1);
    //console.log(monsterLocation);
    previousLoc = monsterLocation;
    document.getElementById(monsterLocation).style.backgroundImage = "url('../EventHandlers/taylor.jpg')";
    document.getElementById(monsterLocation).addEventListener("click", upScore);
    updateTime();
  
    }
    ```

- [ ] Check out the algorithms you have written.  How might you repurpose your code to ensure it includes two additional algorithms?   

- [ ] Your task this week is to write and share one *algorithm* that you wrote to Piazza.  The algorithm you share must integrate two or more algorithms and utilize mathematical and/or logical concepts.   You must also explain how your algorithm works.   



