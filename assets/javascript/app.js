// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    alert("Let's get R-E-A-D-Y👾!!!");

    //display
    $("#ques").text(questions);

    //======VARIABLES========

    var questions = [
        {
            question: 'What is the capital of the Philippines?',
            answers: [
                { answer: 'A. Manila', value: true },
                { answer: 'B. Cebu', value: false },
                { answer: 'C. Luzon', value: false },
                { answer: 'D. Metro Manila', value: false }
            ]
        },
        {
            question: 'How many states are there in the United States of America?',
            answers: [
                { answer: 'A. 51', value: false },
                { answer: 'B. 48', value: true },
                { answer: 'C. 50', value: false },
                { answer: 'D. None', value: false }
            ]
        }]

    var time = 30;
    var score = 0;
    var incorrect = 0;
    var total = 10;

    //=============MAIN PROCESS===================

    //Only one answer is allowed per question



    //display timer



    $("button").click(function () {
        resetGame();
    });

    //=============FUNCTIONS===================



    //End Game - End Timer

    //Reset Game
    function resetGame() {
        alert("Game ends. Resetting💻");
        //setting back to original value

        var questions = [
            {
                question: 'What is the capital of the Philippines?',
                answers: [
                    { answer: 'A. Manila', value: true },
                    { answer: 'B. Cebu', value: false },
                    { answer: 'C. Luzon', value: false },
                    { answer: 'D. Metro Manila', value: false }
                ]
            },
            {
                question: 'How many states are there in the United States of America?',
                answers: [
                    { answer: 'A. 51', value: false },
                    { answer: 'B. 48', value: true },
                    { answer: 'C. 50', value: false },
                    { answer: 'D. None', value: false }
                ]
            }]

        var time = 30;
        var correct = 0;
        var incorrect = 0;
        var total = 10;

        //display
        $("#time").text(time);
        $("#cor").text(correct);
        $("#inc").text(incorrect);
        $("#numQ").text(total);
        alert("Get Ready again🤖!!!");
    };


    //Check Wins - score

    //Check Wronng Answers -- -- reveal answers


    //Reveal all answers





});