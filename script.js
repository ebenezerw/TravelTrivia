//list of questions and answers

var questions = [{
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "How tall is the Empire State Building?",
    answers: ["1399 Feet", "1454 Feet", "1776 Feet"],
    rightAnswer: 1,
    rightAnswerText: "1454 Feet"
}, {
    question: "What is the busiest train station in the world?",
    answers: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, China"],
    rightAnswer: 0,
    rightAnswerText: "placeholder"
}, {
    question: "What is the longest river?",
    answers: ["Nile", "Amazon", "Mississippi"],
    rightAnswer: 0,
    rightAnswerText: "placeholder"
}, {
    question: "What is the busiest tube station in the London?",
    answers: ["Waterloo", "Baker Street", "Kings Cross"],
    rightAnswer: 0,
    rightAnswerText: "placeholder"
}, {
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}, {
    question: "What is the official language of China?",
    answers: ["Mandarian", "Cantonese", "English"],
    rightAnswer: 0,
    rightAnswerText: "Mandarian"
}];



var currentQuestion = 0;



function displayCurrentQuestion() {

    console.log("In display current Question");

    var questionText = questions[currentQuestion].question;
    var questionArea = $(document).find(".question");
    var choiceList = $(document).find(".answer");
    var numOfAnswers = questions[currentQuestion].answers.length;

    
    $(questionArea).text(questionText);
    $(choiceList).find(".answer").remove();
 

    var choice;
    for (i = 0; i < numOfAnswers; i++) {
        choice = questions[currentQuestion].answers[i];
    $('<div class="answer"><input type="radio" value=' + i + ' name="radio" />' + choice + '</div>').appendTo(choiceList);
    }
};


//displays the first question and answer choices once the page is loaded
$(document).ready(function() {
	displayCurrentQuestion();
     $('.resetButton').css("display", "none");

    // On clicking submit, display the next question

    $(this).find(".submitButton").on("click", function () {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {

                //this adds error next in the question area if no answer is selected
                $(document).find(".question").append("<br>" + " " + "Please select an answer!").css("text-align", "center");
    
            } else {
                
                //dispalys "success" pop up if the correct answer is selected and moves to the next set of answers
                $(document).find(".question");
                if (value == questions[currentQuestion].rightAnswer) {               

                    notif({
                        msg: "Correct!",
                        type: "success",
                        position: "center",
                        timeout: 3000
                    });


            } else {
                
                //displays "error" popup with the text of the correct answer if wrong answer is selected. moves on to next set of answers
                $(document).find(".question");
                if (value != questions[currentQuestion].rightAnswer) {

                    notif({
                        msg: "Wrong! Correct answer is" + " " + questions[currentQuestion].rightAnswerText,
                        type: "error",
                        position: "center",
                        timeout: 3000
                    })

                }

            }

                currentQuestion++;

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();

                    
            //displays 'gameover' alert at the end of the game. hides submit button and displays reset button
            } else  {
                    
                //delayed function at the end of the game to remove the     
                setTimeout (function(){
                    $(".resetButton").css("display", "block");
                    $(".submitButton").css("display", "none");
                    notif({
                        msg: "Game Over! Click the Reset button at the bottom to play again.",
                        type: "info",
                        position: "right",
                        autohide: 0

                        })

                    }, 4000);

                }
            } 
            
        
    });

});

//assigns the reload function to the reset button

$(".resetButton").on("click", function () {
    location.reload();
})




//code I had at the begging to change the css properties of the answer on click or mouseover. leaving here for now since i might try to add that in the future



 //        $("#answer").on("click", function (e) {
	// $("#answer").css("background", "orange")	
	// $('#answer:not(#' + this.id + ')').css("background-color", "gray");
	// // e.stopPropagation();

 //    })


// this changes the background of the answer when you hover over it

// $(".answer").on("click", function (a) {
// 	$("#answer").css("color", "#6bcfe3");
// 	$('#answer:not(#' + this.id + ')').css("color", "black");
// 	a.stopPropagation();
// })


// This changes the background color of the selected answer to orange

// $("#answer").on("click", function (e) {
// 	$("#answer").css("background", "orange")
// 	$('#answer:not(#' + this.id + ')').css("background-color", "gray");
// 	// e.stopPropagation();
// })





