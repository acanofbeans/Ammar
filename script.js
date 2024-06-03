document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultText = document.getElementById('resultText');
    const playerScoreText = document.getElementById('playerScore');
    const computerScoreText = document.getElementById('computerScore');

    let playerScore = 0;
    let computerScore = 0;

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.id;
            const computerChoice = getComputerChoice();
            const winner = getWinner(playerChoice, computerChoice);
            showResult(winner, computerChoice);
            updateScore(winner);
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return 'draw';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'player';
        }
        return 'computer';
    }

    function showResult(winner, computerChoice) {
        if (winner === 'draw') {
            resultText.textContent = `It's a draw! Computer chose ${computerChoice}.`;
        } else if (winner === 'player') {
            resultText.textContent = `You win! Computer chose ${computerChoice}.`;
        } else {
            resultText.textContent = `You lose! Computer chose ${computerChoice}.`;
        }
    }

    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
            playerScoreText.textContent = playerScore;
        } else if (winner === 'computer') {
            computerScore++;
            computerScoreText.textContent = computerScore;
        }
    }
});
