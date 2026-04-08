const icons = {
    'pedra': 'fa-solid fa-hand-back-fist',
    'papel': 'fa-solid fa-hand',
    'tesoura': 'fa-solid fa-hand-scissors',
    'question': 'fa-solid fa-question'
};

const choiceBtns = document.querySelectorAll('.choice-btn');
const battleDisplay = document.getElementById('battleDisplay');
const playerIcon = document.getElementById('playerIcon');
const computerIcon = document.getElementById('computerIcon');
const outcomeText = document.getElementById('outcomeText');

let scores = { player: 0, computer: 0, draw: 0 };
let isPlaying = false;

choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(isPlaying) return;
        playGame(btn.dataset.choice);
    });
});

function getComputerChoice() {
    const randomValue = Math.random();
    
    if (randomValue < 1/3) {
        return 'pedra';
    } else if (randomValue < 2/3) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    
    const winConditions = {
        'pedra': 'tesoura',
        'papel': 'pedra',
        'tesoura': 'papel'
    };

    return winConditions[player] === computer ? 'player' : 'computer';
}

function playGame(playerChoice) {
    isPlaying = true;
    
    battleDisplay.classList.add('show');
    battleDisplay.classList.add('animating');
    outcomeText.classList.remove('show');
    outcomeText.className = 'outcome-text';
    
    playerIcon.className = icons['pedra'];
    computerIcon.className = icons['pedra'];
    outcomeText.textContent = "Preparando...";
    outcomeText.classList.add('show');

    setTimeout(() => {
        battleDisplay.classList.remove('animating');
        
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        
        playerIcon.className = icons[playerChoice];
        computerIcon.className = icons[computerChoice];
        
        if (result === 'player') {
            outcomeText.textContent = "Você Venceu!";
            outcomeText.classList.add('win');
            scores.player++;
            document.getElementById('playerScore').textContent = scores.player;
        } else if (result === 'computer') {
            outcomeText.textContent = "Você Perdeu!";
            outcomeText.classList.add('lose');
            scores.computer++;
            document.getElementById('computerScore').textContent = scores.computer;
        } else {
            outcomeText.textContent = "Empate!";
            outcomeText.classList.add('draw');
            scores.draw++;
            document.getElementById('drawScore').textContent = scores.draw;
        }
        
        outcomeText.classList.remove('show');
        void outcomeText.offsetWidth; 
        outcomeText.classList.add('show');

        isPlaying = false;
    }, 1000);
}
