// This file contains the game logic.
// All the event-listening should happen in buttons.js

// Make some variables we'll use for the game.
let buttonsToClick, currentButton, score, gameIsOver;
let scoreElement = document.querySelector("#score");
let gameOverElement = document.querySelector("#game_over");

// This function runs whenever the user clicks a button.
function clickButton(color) {
	if (buttonsToClick[currentButton] == color) {
		// The right button was clicked
		currentButton++;

		if (currentButton == buttonsToClick.length) {
			// All of the buttons were pushed correctly.
			// Add to their score.
			score++;
			scoreElement.innerText = score;

			// Wait a little bit, then start again.
			setTimeout(function() {
				currentButton = 0;
				addToList();
				showColorSequence();
			}, 800);
		}
	} else {
		// The wrong button was clicked, end the game.
		gameOver();
	}
}

// This function adds a new color to the list of colors to click.
function addToList() {
	let colors = ["red", "yellow", "green", "blue"];
	let newColor = colors[Math.floor(Math.random() * 4)];

	buttonsToClick.push(newColor);
}

// This function uses setInterval to show all the colors for the user to push.
function showColorSequence() {
	let currentButtonBeingShow = 0;

	// This interval will show a new button every 500 ms.
	let intervalID = setInterval(function() {
		// Get the current color of the button that will be shown.
		let color = buttonsToClick[currentButtonBeingShow];
		let button = document.querySelector(".simon-button." + color);

		// Make the button light up and darken again after 500 ms.
		button.classList.add("light-up");
		setTimeout(function() {
			button.classList.remove("light-up");
		}, 420);

		// Incremement so that the next color in the sequence will be shown next.
		currentButtonBeingShow++;

		// If the end of the sequence has been reached, or the game is over, stop showing more colors.
		if (currentButtonBeingShow == buttonsToClick.length || gameIsOver) {
			clearInterval(intervalID);
		}
	}, 470);
}

// This function will end the game and show the GAME OVER text.
function gameOver() {
	scoreElement.innerText = score;
	gameOverElement.style.display = "block";
	gameIsOver = true;
}

// This function starts the game up from the very beginning.
function restartGame() {
	gameOverElement.style.display = "none";
	scoreElement.innerText = "0";

	score = 0;
	buttonsToClick = [];
	currentButton = 0;
	gameIsOver = false;

	addToList();
	showColorSequence();
}

// Start the game immediately.
restartGame();
