function playGame(userChoice) {
    const userChoiceElement = document.getElementById("user-choice");
    const computerChoiceElement = document.getElementById("computer-choice");
    const resultElement = document.getElementById("result");

    // Display user's choice
    userChoiceElement.textContent = `You chose: ${userChoice}`;

    // Generate a random choice for the computer
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;

    // Determine the game result
    let result;
    if (userChoice === computerChoice) {
        result = "It's a draw!";
        resultElement.className = "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        resultElement.className = "win";
    } else {
        result = "Computer wins!";
        resultElement.className = "lose";
    }

    // Display the result
    resultElement.textContent = result;

    // Show the reset button
    document.querySelector(".reset").style.display = "block";
}

function resetGame() {
    // Clear the displayed choices and result
    document.getElementById("user-choice").textContent = "You chose: ";
    document.getElementById("computer-choice").textContent = "Computer chose: ";
    document.getElementById("result").textContent = "";
    document.querySelector(".reset").style.display = "none";
}
