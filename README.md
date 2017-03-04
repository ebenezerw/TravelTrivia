# Travel Trivia

# User Stories

As Marco Polo, I want to be able to test my knowledge of the world. I want to see a question and select from a list of answers. After selecting my answer, I want to be able to submit and find out if it was right or wrong. If my selected answer is wrong, I want to know the correct answer. At the end of the game, I want to see my final score. I also want the option to be able to play again.


# Technologies Used

I built the app using a combination of HTML, CSS and jQuery. In the JS file, I created a variable for the questions and answers. I also used a loop to append the questions and answer to separate divs. Initially, I wanted to add each answer choice to its own div for a cleaner look but I couldn't figure out how to do that. I ended up placing the answer choices in the same div and using radio buttons for the selection. 

I also used a jQuery plug in to add some cool pop up notifications instead of the browser default. It was really cool working with the plug in for the very first time. The pop ups alerts the user when they select the correct or incorrect answer. I also added the text of the correct answer to the pop when the user selects the incorrect answer. I added a delay for the 'end of game' pop up so that it didnt run in to the pop up for the last question. 

I created a function to remove the submit button and replace it with a 'reset' button at the end of the game.

# Unresolved Issues

I think I was able to resolve all of the issues I had but there were some features I did not get to add. I wanted to add a score board or an alert at the end showing the total score. I also wanted to change the display pictures based on the question being asked. 
