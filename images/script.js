// Charaktere und ihre Daten
const characters = [
    // ... existing characters array ...
];

let currentCharacter;
let score = 0;
let currentHintIndex = 0;
let usedCharacters = [];
let currentBlurValue = 8;
let timeLeft = 30;
let timer = null;
let totalGuesses = 0;
let correctGuesses = 0;
let hintCooldown = false;
let hintCooldownTime = 7;

// Timer-Funktionen
function startTimer() {
    if (timer) clearInterval(timer);
    timeLeft = 30;
    updateTimer();
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            showNotification('Zeit abgelaufen! Der Chatter war: ' + currentCharacter.name);
            loadCharacter(currentBlurValue);
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timer').textContent = timeLeft;
    const progress = document.getElementById('progress');
    progress.style.transform = `scaleX(${timeLeft / 30})`;
}

// Schwierigkeitsgrade definieren
const difficulties = {
    easy: { min: 0, max: 5 },
    medium: { min: 6, max: 12 },
    hard: { min: 13, max: 20 }
};

// Einstellungsmenü
document.getElementById('initialBlurRange').addEventListener('input', function(e) {
    currentBlurValue = parseInt(e.target.value);
    document.getElementById('initialBlurValue').textContent = currentBlurValue + 'px';
    document.getElementById('previewImage').style.filter = `blur(${currentBlurValue}px)`;
    updateDifficultyIndicator(currentBlurValue);
});

function updateDifficultyIndicator(blurValue) {
    const difficulties = document.querySelectorAll('.difficulty');
    difficulties.forEach(diff => diff.classList.remove('active'));
    
    if (blurValue >= 0 && blurValue <= 5) {
        document.querySelector('.difficulty.easy').classList.add('active');
    } else if (blurValue >= 6 && blurValue <= 12) {
        document.querySelector('.difficulty.medium').classList.add('active');
    } else {
        document.querySelector('.difficulty.hard').classList.add('active');
    }
}

// Initial die Schwierigkeitsanzeige setzen
updateDifficultyIndicator(8);

// Event Listener für den Start-Button
document.getElementById('startGame').addEventListener('click', function() {
    currentBlurValue = parseInt(document.getElementById('initialBlurRange').value);
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    loadCharacter(currentBlurValue);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadCharacter(blurValue) {
    if (usedCharacters.length === characters.length) {
        showGameOver();
        return;
    }

    let availableCharacters = characters.filter(char => !usedCharacters.includes(char));
    let randomIndex = Math.floor(Math.random() * availableCharacters.length);
    currentCharacter = availableCharacters[randomIndex];
    usedCharacters.push(currentCharacter);

    let extraHints = [
        `Der Name ist ${currentCharacter.name.length} Zeichen lang`,
        `Der Name beginnt mit '${currentCharacter.name[0]}'`,
        `Der Name endet mit '${currentCharacter.name[currentCharacter.name.length-1]}'`,
        currentCharacter.name.includes('_') ? "Enthält einen Unterstrich" : "Enthält keinen Unterstrich",
        /\d/.test(currentCharacter.name) ? "Enthält mindestens eine Zahl" : "Enthält keine Zahlen",
        currentCharacter.name === currentCharacter.name.toLowerCase() ? "Nur Kleinbuchstaben" : "Enthält Großbuchstaben"
    ];

    currentCharacter.allHints = [...currentCharacter.hints, ...extraHints];
    currentCharacter.allHints = shuffleArray(currentCharacter.allHints);

    const img = document.getElementById('characterImage');
    img.style.display = 'none';
    
    const tempImg = new Image();
    tempImg.onload = () => {
        img.src = currentCharacter.image;
        img.style.filter = `blur(${blurValue}px)`;
        img.style.display = 'block';
        img.style.opacity = '1';
    };
    tempImg.src = currentCharacter.image;

    document.getElementById('hint').textContent = currentCharacter.allHints[0];
    document.getElementById('guessInput').value = '';
    currentHintIndex = 0;

    startTimer();
}

function showNextHint() {
    if (hintCooldown) return;
    
    if (currentHintIndex < currentCharacter.allHints.length - 1) {
        currentHintIndex++;
        const hint = document.getElementById('hint');
        hint.textContent = currentCharacter.allHints[currentHintIndex];
        
        const hintButton = document.querySelector('.hint-button');
        hintButton.disabled = true;
        hintCooldown = true;
        
        let timeLeft = hintCooldownTime;
        document.getElementById('hintTimer').textContent = timeLeft;
        
        const cooldownInterval = setInterval(() => {
            timeLeft--;
            document.getElementById('hintTimer').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(cooldownInterval);
                hintButton.disabled = false;
                hintCooldown = false;
                document.getElementById('hintTimer').textContent = '0';
            }
        }, 1000);
    }
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.background = ['#4CAF50', '#FF9800', '#2196F3', '#F44336'][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            document.body.removeChild(confetti);
        }, 3000);
    }
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.toLowerCase().trim();
    const img = document.getElementById('characterImage');
    
    totalGuesses++;
    
    if (guess === currentCharacter.name.toLowerCase()) {
        clearInterval(timer);
        score++;
        document.getElementById('score').textContent = score;
        correctGuesses++;
        
        img.style.filter = 'blur(0px)';
        img.classList.add('success-animation');
        createConfetti();
        
        setTimeout(() => {
            img.classList.remove('success-animation');
            showNotification('Richtig! +1 Punkt');
            loadCharacter(currentBlurValue);
        }, 1500);
    } else {
        showNotification('Falsch! Versuch es noch einmal!');
    }
    
    document.getElementById('guessInput').value = '';
}

function showNotification(message) {
    const modal = document.getElementById('notificationModal');
    const messageElement = document.getElementById('notificationMessage');
    messageElement.textContent = message;
    modal.style.display = 'flex';
    document.getElementById('notificationOk').focus();
}

function closeNotification() {
    document.getElementById('notificationModal').style.display = 'none';
    document.getElementById('guessInput').focus();
}

document.getElementById('notificationOk').addEventListener('click', closeNotification);

document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('notificationModal');
    if (e.key === 'Enter' && modal.style.display === 'flex') {
        closeNotification();
    }
});

function showGameOver() {
    clearInterval(timer);
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameOverModal').style.display = 'flex';
    
    document.getElementById('finalScore').textContent = score;
    const accuracyPercentage = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracyPercentage;
    document.getElementById('totalGuesses').textContent = totalGuesses;
    
    document.getElementById('restartGame').focus();
}

function resetGame() {
    score = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('settingsModal').style.display = 'flex';
    usedCharacters = [];
    totalGuesses = 0;
    correctGuesses = 0;
}

// Event Listener für den Neustart-Button
document.getElementById('restartGame').addEventListener('click', resetGame);

document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

document.getElementById('chatterCount').textContent = characters.length;
document.getElementById('hintTimer').textContent = '0'; 