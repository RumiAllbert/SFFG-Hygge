
// var data;
let front = true;

// var fun = [
// 	"Do you think you will get married one day?", 
// 	"If you could set one rule that all generation Z have to follow, what would it be?",
//  	"If you could have one superpower what would it be?"]
// var life = [
// 	"What is one of your biggest regrets?", 
// 	"What is your favorite movie?",
// 	"Is 20 too young to get married?"]
// var cultivation = [
// 	"If you were to name one of your biggest attachments, what would it be?",
// 	"Is there anything you truly don’t understand in ZFL and always wanted to ask?",
// 	"Are there any habits you know you need to give up, but you consciously continue doing?"
// ]
var data = [
  {
    "text": "\
    <strong>Fun:</strong> Talk about one of your embarrassing memories<br><br>\
    <strong>Life:</strong> If you had enough money to retire tomorrow, what would you do for the rest of your life?<br><br>\
    <strong>Cultivation:</strong> How did you obtain the Fa?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Two truths, one fib … go!<br><br>\
    <strong>Life:</strong> Is there any talent or tradition that is passed down in your family?<br><br>\
    <strong>Cultivation:</strong> “Cultivate with the heart you once had”, when you think of this, what does that heart look like in your case?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you could have one superpower what would it be?<br><br>\
    <strong>Life:</strong> Name one thing that most people don't know about you.<br><br>\
    <strong>Cultivation:</strong> Can you think of a time when you felt a strong motivation/desire to become more diligent in cultivation?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Who here would not make a good President. If you can’t choose, why would you or wouldn’t you make a good President?<br><br>\
    <strong>Life:</strong> Is 20 too young to get married?<br><br>\
    <strong>Cultivation:</strong> If you were to name one of your biggest attachments, what would it be?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you could set one rule that all generation Z have to follow, what would it be?<br><br>\
    <strong>Life:</strong> If you had a time machine, would you rather travel to the future or to the past?<br><br>\
    <strong>Cultivation:</strong> Have you ever had any life-threatening experiences such as the ones noted in ZFL?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Is there anyone in your life that you would rather have never met?<br><br>\
    <strong>Life:</strong> If you could go back and relive one day of your life, what day would it be?<br><br>\
    <strong>Cultivation:</strong> What do you think is the hardest attachment for YP’s and why?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What do you hate the most in this world besides slow texters?<br><br>\
    <strong>Life:</strong> What is the most meaningful gift you've ever received?<br><br>\
    <strong>Cultivation:</strong> Whenever you are not diligent, what do you do to get back on track? Is there anything that helps you regain your diligence?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Do you think you will get married one day?<br><br>\
    <strong>Life:</strong> If money wasn’t a problem, what job would you like to do?<br><br>\
    <strong>Cultivation:</strong> Is there anything you truly don’t understand in ZFL and always wanted to ask?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Would you film a reality TV show with someone that you dislike for a million dollars?<br><br>\
    <strong>Life:</strong> What does a “perfect” day look like to you?<br><br>\
    <strong>Cultivation:</strong> When was the last time you questioned something you read in Dafa and what do you think of that topic now?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What’s one thing that everyone likes, but you dislike?<br><br>\
    <strong>Life:</strong> What life lesson did you learn the hard way?<br><br>\
    <strong>Cultivation:</strong> Have you ever questioned your belief in Dafa and how do you view your faith in Dafa now?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What’s one thing that everyone dislikes, but you like?<br><br>\
    <strong>Life:</strong> What are you most grateful for?<br><br>\
    <strong>Cultivation:</strong> If you were born/grew up with Dafa, was there a specific time in which you decided to cultivate?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What “old person” habits do you have?<br><br>\
    <strong>Life:</strong> What makes you proud?<br><br>\
    <strong>Cultivation:</strong> If your parents stopped cultivating, what would your response be? Would you still cultivate?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you could shop for free at one store for the rest of your life, what store would that be?<br><br>\
    <strong>Life:</strong> Do you have any recurring dreams? What do you think they mean?<br><br>\
    <strong>Cultivation:</strong> When are the times that you display the utmost “ren”?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What is the strangest thing you’ve ever purchased?<br><br>\
    <strong>Life:</strong> What is your biggest fear?<br><br>\
    <strong>Cultivation:</strong> If you got a job offer from an ordinary company and a Dafa project, how would you react?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you were stranded on a desert island, what 3 things would you bring with you?<br><br>\
    <strong>Life:</strong> What is your favorite movie?<br><br>\
    <strong>Cultivation:</strong> Describe a time when you did something truly kind for another person?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Do you bite or lick your ice cream?<br><br>\
    <strong>Life:</strong> Can guys and girls truly be just friends?<br><br>\
    <strong>Cultivation:</strong> What do you consider to be the most critical attachment in other practitioners?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What is the most relaxing sound?<br><br>\
    <strong>Life:</strong> How do you connect with those who are different to you?<br><br>\
    <strong>Cultivation:</strong> Have you ever intervened in a conflict between practitioners? How did it go?"
  },
  {
    "text": "\
    <strong>Fun:</strong> What’s the most adventurous thing you have ever done?<br><br>\
    <strong>Life:</strong> What makes you the angriest?<br><br>\
    <strong>Cultivation:</strong> What’s the biggest difference between YPs and veteran practitioners?"
  },
  {
    "text": "\
    <strong>Fun:</strong> Which holiday has the best food?<br><br>\
    <strong>Life:</strong> What is one of your biggest regrets?<br><br>\
    <strong>Cultivation:</strong> When was the last time your attachment to qing was tested?"
  },

]

// Getting the front and the back texts
const texts = document.querySelectorAll(".text");

// Getting the body
const body = document.getElementById("body");

// Getting the buttons
const button = document.querySelectorAll(".new-question");

const blockFront = document.querySelector(".block_front");
const blockBack = document.querySelector(".block_back");

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];


// An arrow function used to get a question randomly
const displayQuestion = () =>{

	// Generates a random number between 0
	// and the length of the dataset
	let index = Math.floor(Math.random()*data.length);

	// Stores the question present at the randomly generated index
	let questions = data[index].text;

	if(front){
		// Changing the front if back-side is displayed
		textFront.innerHTML = questions;
		textBack.innerHTML = null;
		blockFront.hidden = false
		blockBack.hidden = true
	}else{
		// Changing the back if front-side is displayed
		textBack.innerHTML = questions;
		textFront.innerHTML = null;
		blockFront.hidden = true
		blockBack.hidden = false
	}
	front = !front;
}

displayQuestion()

// fetch("/questions.json")
// 	.then(function(response) {
// 		return response.json();
// 	}) // Getting the raw JSON data
// 	.then(function(data) {

// 		// Storing the questions internally upon
// 		// successful completion of request
// 		this.data = data;
// 		console.log(data);

// 		// Displaying the quote When the Webpage loads
// 		displayQuestion()
// });


// Adding an onclick listener for the button
function newQuestion(){

	// Rotating the Quote Box
	blockBack.classList.toggle('rotateB');
	blockFront.classList.toggle('rotateF');

	// Displaying a new question when the webpage loads
	displayQuestion();
}
