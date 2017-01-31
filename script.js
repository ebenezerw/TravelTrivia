
//list of questions


var questions = [{
    question: "What is the official language of China?",
    choices: ["Mandarian", "Cantonese", "English"],
    correctAnswer: 0,
    correctAnswerText: "Mandarian"
}, {
    question: "How tall is the Empire State Building?",
    choices: ["1399 Feet", "1454 Feet", "1776 Feet"],
    correctAnswer: 1,
    correctAnswerText: "1454 Feet"
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, China"],
    correctAnswer: 0
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross"],
    correctAnswer: 0
}];



var currentQuestion = 0;
var correctAnswers = 0;




function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".question");
    var choiceList = $(document).find(".answer");
    var numChoices = questions[currentQuestion].choices.length;

    
    $(questionClass).text(question);
    $(choiceList).find(".answer").remove();
 

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
 $('<div class="answer"><input type="radio" value=' + i + ' name="radio" />' + choice + '</div>').appendTo(choiceList);
    }
};






$(document).ready(function() {
	displayCurrentQuestion();

    // On clicking submit, display the next question
    $(this).find(".submitButton").on("click", function () {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".submitButton").text("Please select an answer");
    
            } else {
                
                $(document).find(".question");
                if (value == questions[currentQuestion].correctAnswer) {               
                    // alert("Great Job!");

                    notif({
                        msg: "Correct!",
                        type: "success",
                        position: "center",
                        timeout: 3000
                    });

                    correctAnswers++;

            } else {
                $(document).find(".question");
                if (value != questions[currentQuestion].correctAnswer){

                    notif({
                        msg: "Wrong! Correct answer is" + " " + questions[currentQuestion].correctAnswerText,
                        type: "error",
                        position: "center",
                        timeout: 5000
                    })


                    // alert("Wrong! Correct answer is" + " " + questions[currentQuestion].correctAnswerText);
                    // console.log(questions[currentQuestion].correctAnswer);
                    correctAnswers++
                }

            }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else  {
                    alert("Game Over");
                    location.reload();
                }
            } 
            
        
    });

});


// notif({

// msg: "<b>Success:</b> In 5 seconds i'll be gone",

// type: "success"

// });

// }








































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





