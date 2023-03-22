'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent="Correct Answer !!!";

// document.querySelector('.guess').value=33;

let secretNumber = Math.floor(Math.random()*21);
let score = 20;

let highScore=0;




document.querySelector('.again').addEventListener
('click' , function () {

    document.querySelector('body').style.backgroundColor="#222";
    score=20;
    document.querySelector('.message').textContent="Start guessing..."
    secretNumber = Math.floor(Math.random()*21);
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';
    

    document.querySelector('.score').textContent = score;
})





document.querySelector('.check').addEventListener
('click', function() {
    const guess =Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess) {
        document.querySelector('.message').textContent="NO INPUT ⛔"
    }

    else if (guess > secretNumber) {

        if(score > 1) {
        document.querySelector('.message').textContent="NUMBER TOO HIGH⬆️"
        score--;
        document.querySelector('.score').textContent=score;
        }
        else {
            document.querySelector('.message').textContent="YOU LOST❌"
            document.querySelector('.score').textContent=0;
        }
    }

    else if (guess < secretNumber) {

        if(score > 1) {
        document.querySelector('.message').textContent="NUMBER TOO LOW⬇️"
        score--;
        document.querySelector('.score').textContent=score;

        }
        else {
            document.querySelector('.message').textContent="YOU LOST❌"
            document.querySelector('.score').textContent=0;
        }
    }

    else if(guess==secretNumber) {
        document.querySelector('.message').textContent="CORRECT GUESS✅"
        document.querySelector('body').style.backgroundColor="green";
        document.querySelector('.number').textContent=secretNumber;

        if(score>highScore) {
            highScore=score;
         document.querySelector('.highscore').textContent=highScore;
        }
    }
} )