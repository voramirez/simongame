// The frequencies to play for each button.
const FREQUENCIES = {
	RED: 330,
	YELLOW: 262,
	GREEN: 392,
	BLUE: 196
};


function playAudio(color) {
	let audioElement = document.querySelector("#" + color + "Audio");
	audioElement.play();
}



// Add "click" listeners to each function.
let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
	if (!gameIsOver) {
		playAudio("green");
		clickButton("green");
	}
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
	if (!gameIsOver) {
		playAudio("red");
		clickButton("red");
	}
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
	if (!gameIsOver) {
		playAudio("yellow");
		clickButton("yellow");
	}
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
	if (!gameIsOver) {
		playAudio("yellow");
		clickButton("blue");
	}
});



// Make buttons light up when clicked and go back to normal after
function buttonClicked() {
	if (!gameIsOver) {
		this.classList.add("light-up");
	}
}

function buttonReleased() {
	if (!gameIsOver) {
		this.classList.remove("light-up");
	}
}

// Iterate over all four buttons and add event listeners to each one.
let allButtons = document.querySelectorAll(".simon-button");
for (let i = 0; i < allButtons.length; i++) {
	allButtons[i].addEventListener("mousedown", buttonClicked);
	allButtons[i].addEventListener("mouseup", buttonReleased);
	allButtons[i].addEventListener("mouseout", buttonReleased);
}



// Make Restart game button actually restart the game
document.querySelector("#game_over button").addEventListener("click", restartGame);
