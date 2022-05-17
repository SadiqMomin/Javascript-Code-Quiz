# Javascript-Code-Quiz

## Summary
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Objective
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Preview:
![Application Preview](demo.gif)

## Deployed Link:
[Code Quiz App](https://sadiqmomin.github.io/Javascript-Code-Quiz/)

```
git clone git@github.com:SadiqMomin/Javascript-Code-Quiz.git
```

## Learning Points:
* This app was a practice in writing the backend code only and then integrating it with provided front end code (index.html, notes.html, and custom jQuery)
* Practice setting up an Express server and in particular learning the importance of using the express.static() function to ensure proper delivery of local js/css files used by html files being delivered via .sendFile();