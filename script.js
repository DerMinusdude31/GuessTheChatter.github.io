// Charaktere und ihre Daten
const characters = [
    {
        name: "feelsdankman_daniel",
        image: "images/feelsdankman_daniel.png",
        hints: ["Chatter", "Hat zwei Badges links", "Spielt gerne Valorant"]
    },
    {
        name: "riooolu",
        image: "images/riooolu.png",
        hints: ["Benannt nach einem Pokemon", "Streamer", "Mit coolem Style"]
    },
    {
        name: "Raphibey",
        image: "images/Raphibey.png",
        hints: ["Spitzname", "Chatter",]
    },
    {
        name: "6FEAT9_",
        image: "images/6FEAT9_.png",
        hints: ["Mit anderem Chatter Zusammen", "69", "wenn 2 musiker einen song zusammen rausbringen"]
    },
    {
        name: "leon_w1109",
        image: "images/leon_w1109.png",
        hints: [ "Hat einen Unterstrich im Namen", "Der Name endet mit Zahlen"]
    },
    {
        name: "Nifler_",
        image: "images/Nifler_.png",
        hints: ["", "Der Name endet mit einem Unterstrich", "Erinnert an ein magisches Wesen"]
    },
    {
        name: "vGregor",
        image: "images/vGregor.png",
        hints: ["Ein Twitch Streamer", "Beginnt mit einem kleinen v", "Ein Kleiner Zwerg"]
    },
    {
        name: "malteeeeeeee",
        image: "images/malteeeeeeee.png",
        hints: ["Ein langer Name", "Enthält viele gleiche Buchstaben", "Ein bekannter Vorname"]
    },
    {
        name: "jeansophiee",
        image: "images/jeansophiee.png",
        hints: ["Ein weiblicher Name", "Enthält doppelte Buchstaben am Ende", "Besteht aus zwei Namen"]
    },
    {
        name: "Pixel1102",
        image: "images/Pixel1102.png",
        hints: ["Hat Zahlen im Namen", "Beginnt mit P", "Bezieht sich auf Grafik"]
    },
    {
        name: "2coyi",
        image: "images/2coyi.png",
        hints: ["Beginnt mit einer Zahl", "Kurzer Name", "Fünf Zeichen lang"]
    },
    {
        name: "tizian1110",
        image: "images/tizian1110.png",
        hints: ["Ein Vorname mit Zahlen", "Vier Zahlen am Ende", "Beginnt mit t"]
    },
    {
        name: "fabianfabiho",
        image: "images/fabianfabiho.png",
        hints: ["Ein männlicher Name", "Name kommt zweimal vor", "Endet mit 'ho'"]
    },
    {
        name: "knuddeli",
        image: "images/knuddeli.png",
        hints: ["Ein niedlicher Name", "Bezieht sich aufs Kuscheln", "Endet mit i"]
    },
    {
        name: "sven_664",
        image: "images/sven_664.png",
        hints: ["Anwalt", "Hat einen Unterstrich", "Endet mit Zahlen"]
    },
    {
        name: "FroggyYoko",
        image: "images/FroggyYoko.png",
        hints: ["Hat etwas mit einem Frosch zu tun", "Zweiteiliger Name", "Japanischer Einfluss"]
    },
    {
        name: "Muha4433_",
        image: "images/Muha4433_.png",
        hints: ["Endet mit einem Unterstrich", "Hat vier Zahlen", "Beginnt mit Mu"]
    },
    {
        name: "mym0nst3r",
        image: "images/mym0nst3r.png",
        hints: ["Enthält Zahlen statt Buchstaben", "Bezieht sich auf ein Wesen", "Beginnt mit 'my'"]
    },
    {
        name: "Susgeebot",
        image: "images/Susgeebot.png",
        hints: ["Enthält 'sus'", "Ist ein Bot", "Dreiteiliger Name"]
    },
    {
        name: "chattingpepe",
        image: "images/chattingpepe.png",
        hints: ["Ein bekanntes Meme", "Hat mit Chatten zu tun", "Enthält einen Frosch"]
    },
    {
        name: "xselimw_",
        image: "images/xselimw_.png",
        hints: ["Beginnt mit x", "Endet mit Unterstrich", "Name in der Mitte"]
    },
    {
        name: "Milky600",
        image: "images/Milky600.png",
        hints: ["Hat mit Milch zu tun", "Dreistellige Zahl", "englisches Wort"]
    },
    {
        name: "itssssss_kim",
        image: "images/itssssss_kim.png",
        hints: ["Viele 's' in Folge", "Enthält einen Unterstrich", "Kurzer Name am Ende"]
    },
    {
        name: "DerMaulwurf54",
        image: "images/DerMaulwurf54.png",
        hints: ["Ein Tier im Namen", "Beginnt mit 'Der'", "Endet mit Zahlen"]
    },
    {
        name: "freddihd23",
        image: "images/freddihd23.png",
        hints: ["Ein Spitzname", "HD im Namen", "Endet mit Zahlen"]
    },
    {
        name: "zAlpakaTV",
        image: "images/zAlpakaTV.png",
        hints: ["Ein Tier im Namen", "Beginnt mit z", "Endet mit TV"]
    },
    {
        name: "bystefan2",
        image: "images/bystefan2.png",
        hints: ["Beginnt mit 'by'", "Ein männlicher Name", "Endet mit einer Zahl"]
    },
    {
        name: "Quertixxttv",
        image: "images/Quertixxttv.png",
        hints: ["Streamer mit doppeltem x", "Hat 'ttv' im Namen", "Beginnt mit Q"]
    },
    {
        name: "KerrysFrag",
        image: "images/KerrysFrag.png",
        hints: ["Ein zusammengesetzter Name", "Fett", "Schalkefan", "Brainrotted"]
    },
    {
        name: "m1kareal",
        image: "images/m1kareal.png",
        hints: ["Hat eine Zahl statt i", "Enthält 'real' am Ende", "Kurzer Name"]
    },
    {
        name: "BattlePig78",
        image: "images/BattlePig78.png",
        hints: ["Ein kämpfendes Tier", "Endet mit Zahlen",]
    },
    {
        name: "STIMMUNGSCHAOS__",
        image: "images/STIMMUNGSCHAOS__.png",
        hints: ["Codet mit Chatgpt", "Zwei Unterstriche am Ende", "Beschreibt Unordnung"]
    },
    {
        name: "baer_lolmy",
        image: "images/baer_lolmy.png",
        hints: ["Luxemburger", "Hat einen Unterstrich", "Beginnt mit einem Tier"]
    },
    {
        name: "KasimirBrett",
        image: "images/KasimirBrett.png",
        hints: ["Ein Vorname", "Hugo Chatter", "Endet mit 'Brett'"]
    },
    {
        name: "SP0F0H",
        image: "images/SP0F0H.png",
        hints: ["Enthält Nullen", "Zuschauerstimmung", "Kurzer Name"]
    },
    {
        name: "bynoahhh",
        image: "images/bynoahhh.png",
        hints: ["Beginnt mit 'by'", "Ein Vorname in der Mitte", "Drei gleiche Buchstaben am Ende"]
    },
    {
        name: "VoinTTV",
        image: "images/VoinTTV.png",
        hints: ["Endet mit TTV", "Kurzer Name", "Beginnt mit V"]
    },
    {
        name: "huytastic",
        image: "images/huytastic.png",
        hints: ["Endet mit 'tastic'", "Dreistelliger Anfang", "Kreative Wortschöpfung"]
    },
    {
        name: "letsandrin14e",
        image: "images/letsandrin14e.png",
        hints: ["Beginnt mit 'lets'", "Hat Zahlen und Buchstaben am Ende", "Ein Name in der Mitte"]
    },
    {
        name: "Die_Ente3",
        image: "images/Die_Ente3.png",
        hints: ["Ein Wasservogel", "Hat einen Unterstrich", "Endet mit einer Zahl"]
    },
    {
        name: "Mylifeislul",
        image: "images/Mylifeislul.png",
        hints: ["Ein englischer Satz", "Enthält 'lul'", "Vier Wörter ohne Leerzeichen"]
    },
    {
        name: "dxlfien",
        image: "images/dxlfien.png",
        hints: ["Hat ein x statt eines Vokals", "Beginnt mit d", "Sieben Buchstaben"]
    },
    {
        name: "F4biFPS_",
        image: "images/F4biFPS_.png",
        hints: ["Hat eine 4 statt A", "Enthält 'FPS'", "Endet mit Unterstrich"]
    },
    {
        name: "teereox",
        image: "images/teereox.png",
        hints: ["Beginnt mit 'tee'", "Enthält 'reo'", "Endet mit x"]
    },
    {
        name: "Kanyuji",
        image: "images/Kanyuji.png",
        hints: ["Japanisch klingender Name", "Beginnt mit K", "Sieben Buchstaben"]
    },
    {
        name: "Doublefli",
        image: "images/Doublefli.png",
        hints: ["Beginnt mit 'Double'", "Englisch-deutscher Mix", "Kurzes Wortende"]
    },
    {
        name: "vibewithcassy",
        image: "images/vibewithcassy.png",
        hints: ["Enthält 'vibe'", "Ein weiblicher Name am Ende", "Drei Wörter zusammen"]
    },
    {
        name: "teamvlg",
        image: "images/teamvlg.png",
        hints: ["Beginnt mit 'team'", "Drei Buchstaben am Ende", "Abkürzung"]
    },
    {
        name: "S4NTII",
        image: "images/S4NTII.png",
        hints: ["Hat eine 4 statt A", "Doppeltes I am Ende", "Beginnt mit S"]
    },
    {
        name: "schnizelwolke",
        image: "images/schnizelwolke.png",
        hints: ["Ein deutsches Essen", "Zusammengesetztes Wort", "Fehler in der Schreibweise"]
    },
    {
        name: "TTVEstatiC",
        image: "images/TTVEstatiC.png",
        hints: ["Hat TTV am Anfang", "Enthält ein großes C am Ende", "Name bezieht sich auf etwas Statisches"]
    },
    {
        name: "xIchLebeNoch",
        image: "images/xIchLebeNoch.png",
        hints: ["Beginnt mit x", "Eine positive Aussage", "Besteht aus drei Wörtern"]
    },
    {
        name: "nevada4phoenix",
        image: "images/nevada4phoenix.png",
        hints: ["Schweizer", "Hat eine 4 in der Mitte", "Endet mit einem mythischen Vogel"]
    },
    {
        name: "BierwurstDose",
        image: "images/BierwurstDose.png",
        hints: ["Ein deutsches Lebensmittel", "Zweiteiliger Name", "Endet mit einem Behälter"]
    },
    {
        name: "Raandy187",
        image: "images/Raandy187.png",
        hints: ["Doppeltes a im Namen", "Ein Vorname", "187"]
    },
    {
        name: "Hoppel800",
        image: "images/Hoppel800.png",
        hints: ["Hat mit Springen zu tun", "Alter Sack", "Endet mit einer runden Zahl"]
    },
    {
        name: "PeepoHappyNox",
        image: "images/PeepoHappyNox.png",
        hints: ["Ein fröhlicher Frosch", "Dreiteiliger Name", "Endet mit 'Nox'"]
    },
    {
        name: "yM4RA",
        image: "images/yM4RA.png",
        hints: ["Beginnt mit kleinem y", "Hat eine 4 in der Mitte", "Endet mit Großbuchstaben"]
    },
    {
        name: "Wydios",
        image: "images/Wydios.png",
        hints: ["Beginnt mit W", "Sechsbuchstabiger Name", "Endet mit s"]
    },
    {
        name: "Schnitzelpommes4",
        image: "images/Schnitzelpommes4.png",
        hints: ["Ein deutsches Gericht", "Zwei Speisen kombiniert", "Endet mit einer Zahl"]
    },
    {
        name: "Mikaator",
        image: "images/Mikaator.png",
        hints: ["Beginnt mit Mika", "Endet wie Terminator", "Streamer"]
    },
    {
        name: "MaggiWieDieSuppe",
        image: "images/MaggiWieDieSuppe.png",
        hints: ["Eine bekannte Marke", "Bezieht sich auf Essen", "Besteht aus drei Wörtern"]
    },
    {
        name: "finanzamttim",
        image: "images/finanzamttim.png",
        hints: ["Arbeitet mit Geld", "Eine Behörde", "Endet mit einem Namen"]
    },
    {
        name: "sari_sturn",
        image: "images/sari_sturn.png",
        hints: ["Hat einen Unterstrich", "Weiblicher Name", "Klingt wie ein Sturm"]
    },
    {
        name: "stefan_jott_",
        image: "images/stefan_jott_.png",
        hints: ["Ein männlicher Name", "Doppelter Unterstrich", "Buchstabe als Wort"]
    },
    {
        name: "deidaraxx",
        image: "images/deidaraxx.png",
        hints: ["Anime Charakter", "Doppeltes x am Ende", "Aus Naruto"]
    },
    {
        name: "LetsLisaTV",
        image: "images/LetsLisaTV.png",
        hints: ["Beginnt mit 'Lets'", "Ein Mädchenname", "Endet mit TV"]
    },
    {
        name: "8Fabian__",
        image: "images/8Fabian__.png",
        hints: ["Beginnt mit einer Zahl", "Ein männlicher Name", "Endet mit zwei Unterstrichen"]
    },
    {
        name: "okayyfiona",
        image: "images/okayyfiona.png",
        hints: ["Ein weiblicher Name", "Beginnt mit 'okayy'", "Ein bekannter Vorname"]
    },
    {
        name: "Floweryalina",
        image: "images/Floweryalina.png",
        hints: ["Hat etwas mit Blumen zu tun", "Ein weiblicher Name", "Zweiteiliger Name"]
    },
    {
        name: "AlexXX_Sp",
        image: "images/AlexXX_Sp.png",
        hints: ["Beginnt mit einem bekannten Vornamen", "Hat zwei X im Namen", "Endet mit 'Sp'"]
    },
    {
        name: "TomatenT0m",
        image: "images/TomatenT0m.png",
        hints: ["Hat mit einem Gemüse zu tun", "Enthält eine Null", "Ein männlicher Name"]
    },
    {
        name: "Pissender_Pottwal",
        image: "images/Pissender_Pottwal.png",
        hints: ["Ein Meeressäuger", "Zweiteiliger Name", "Hat einen Unterstrich"]
    },
    {
        name: "IceManuTV",
        image: "images/IceManuTV.png",
        hints: ["Beginnt mit 'Ice'", "Ein männlicher Spitzname", "Endet mit TV"]
    },
    {
        name: "PeepoHappyNox",
        image: "images/PeepoHappyNox.png",
        hints: ["Ein Twitch-Emote", "Dreiteiliger Name", "Enthält 'Happy'"]
    }
];

let currentCharacter;
let score = 0;
let currentHintIndex = 0;
let usedCharacters = [];
let currentBlurValue = 8;
let timeLeft = 30;
let timer = null;

// Neue Variablen für Statistiken
let totalGuesses = 0;
let correctGuesses = 0;

let hintCooldown = false;
let hintCooldownTime = 7; // Sekunden

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
    
    // Schwierigkeitsgrad aktualisieren
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

document.getElementById('startGame').addEventListener('click', function() {
    currentBlurValue = parseInt(document.getElementById('initialBlurRange').value);
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    
    // Spiel mit gewählter Unschärfe starten
    loadCharacter(currentBlurValue);
});

// Funktion zum Mischen eines Arrays (Fisher-Yates Shuffle)
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

    // Erweitere die Hinweise mit zusätzlichen dynamischen Hinweisen
    let extraHints = [
        `Der Name ist ${currentCharacter.name.length} Zeichen lang`,
        `Der Name beginnt mit '${currentCharacter.name[0]}'`,
        `Der Name endet mit '${currentCharacter.name[currentCharacter.name.length-1]}'`,
        currentCharacter.name.includes('_') ? "Enthält einen Unterstrich" : "Enthält keinen Unterstrich",
        /\d/.test(currentCharacter.name) ? "Enthält mindestens eine Zahl" : "Enthält keine Zahlen",
        currentCharacter.name === currentCharacter.name.toLowerCase() ? "Nur Kleinbuchstaben" : "Enthält Großbuchstaben",
        currentCharacter.name.includes('TTV') ? "Hat TTV im Namen" : null,
        /[0-9]{3,}/.test(currentCharacter.name) ? "Enthält drei oder mehr Zahlen in Folge" : null,
        Math.random() < 0.05 ? `GLÜCKSHINWEIS: Der Name ist '${currentCharacter.name}'` : null // 5% Chance
    ].filter(hint => hint !== null); // Entferne null-Einträge

    // Kombiniere die vordefinierten und dynamischen Hinweise
    currentCharacter.allHints = [...currentCharacter.hints, ...extraHints];
    // Mische die Hinweise
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
        const nextHint = currentCharacter.allHints[currentHintIndex];
        
        // Spezielle Animation für den Glückshinweis
        if (nextHint.startsWith('GLÜCKSHINWEIS')) {
            hint.style.animation = 'none';
            hint.offsetHeight; // Trigger reflow
            hint.style.animation = 'luckyHint 1s ease-in-out';
            hint.style.color = '#FFD700'; // Gold-Farbe
        } else {
            hint.style.animation = 'none';
            hint.style.color = '#FF9800'; // Normale Farbe
        }
        
        hint.textContent = nextHint;
        
        // Cooldown starten
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
        confetti.style.top = '0';
        confetti.style.background = ['#4CAF50', '#FF9800', '#2196F3', '#F44336'][Math.floor(Math.random() * 4)];
        confetti.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        confetti.style.animation = `confetti ${Math.random() * 2 + 1}s linear`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            document.body.removeChild(confetti);
        }, 3000);
    }
}

function showNotification(message) {
    const modal = document.getElementById('notificationModal');
    const messageElement = document.getElementById('notificationMessage');
    messageElement.textContent = message;
    modal.style.display = 'flex';
    
    // Fokus auf den OK-Button setzen
    document.getElementById('notificationOk').focus();
}

function closeNotification() {
    document.getElementById('notificationModal').style.display = 'none';
    // Fokus zurück auf das Eingabefeld setzen
    document.getElementById('guessInput').focus();
}

document.getElementById('notificationOk').addEventListener('click', closeNotification);

// Event Listener für Enter-Taste
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('notificationModal');
    if (e.key === 'Enter' && modal.style.display === 'flex') {
        closeNotification();
    }
});

function checkGuess() {
    const guess = document.getElementById('guessInput').value.toLowerCase().trim();
    const img = document.getElementById('characterImage');
    
    totalGuesses++;
    
    if (guess === currentCharacter.name.toLowerCase()) {
        clearInterval(timer);
        score++;
        correctGuesses++;
        document.getElementById('score').textContent = score;
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
}

// Event Listener für Enter-Taste
document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function showGameOver() {
    clearInterval(timer);
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameOverModal').style.display = 'flex';
    
    // Statistiken aktualisieren
    document.getElementById('finalScore').textContent = score;
    const accuracyPercentage = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;
    document.getElementById('accuracy').textContent = accuracyPercentage;
    document.getElementById('totalGuesses').textContent = totalGuesses;
    
    // Fokus auf den Neustart-Button setzen
    document.getElementById('restartGame').focus();
}

// Event Listener für Enter-Taste im Game Over Menü
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('notificationModal');
    const gameOverModal = document.getElementById('gameOverModal');
    
    if (e.key === 'Enter') {
        if (modal.style.display === 'flex') {
            closeNotification();
        } else if (gameOverModal.style.display === 'flex') {
            resetGame();
        }
    }
});

function resetGame() {
    score = 0;
    currentHintIndex = 0;
    usedCharacters = [];
    totalGuesses = 0;
    correctGuesses = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('gameOverModal').style.display = 'none';
    document.getElementById('settingsModal').style.display = 'flex';
}

// Event Listener für den Neustart-Button
document.getElementById('restartGame').addEventListener('click', resetGame);

// Spiel starten
loadCharacter();

// Chatter Counter aktualisieren
document.getElementById('chatterCount').textContent = characters.length; 

// Initialisiere den Timer mit 0
document.getElementById('hintTimer').textContent = '0'; 