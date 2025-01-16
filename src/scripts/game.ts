interface Character {
    name: string;
    image: string;
    hints: string[];
    badges?: string[];
}

class GuessTheCharacter {
    private characters: Character[] = [
        {
            name: "feelsdankman_daniel",
            image: "src/images/feelsdankman_daniel.png",
            hints: ["Ein Twitch Emote", "Hat zwei Badges links", "Zeigt einen bekannten Streamer"],
            badges: ["src/images/badge1.png", "src/images/badge2.png"]
        },
        {
            name: "Mario",
            image: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png",
            hints: ["Ein berühmter Klempner", "Trägt eine rote Mütze", "Sammelt Münzen"]
        },
        {
            name: "Sonic",
            image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Sonic_the_Hedgehog_1991_box_art.jpg",
            hints: ["Ein schneller blauer Igel", "Sammelt goldene Ringe", "Kämpft gegen Dr. Robotnik"]
        }
    ];

    private currentCharacter: Character | null = null;
    private score: number = 0;
    private currentHintIndex: number = 0;
    private timeLeft: number = 30;
    private timer: number | null = null;

    constructor() {
        this.initializeEventListeners();
        this.loadCharacter();
    }

    private initializeEventListeners(): void {
        document.getElementById('guessInput')?.addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                this.checkGuess();
            }
        });

        document.querySelector('.hint-button')?.addEventListener('click', () => this.showNextHint());
    }

    private startTimer(): void {
        if (this.timer) clearInterval(this.timer);
        this.timeLeft = 30;
        this.updateTimer();
        this.timer = window.setInterval(() => {
            this.timeLeft--;
            this.updateTimer();
            if (this.timeLeft <= 0) {
                if (this.timer) clearInterval(this.timer);
                alert('Zeit abgelaufen! Der Charakter war: ' + this.currentCharacter?.name);
                this.loadCharacter();
            }
        }, 1000);
    }

    private updateTimer(): void {
        const timerElement = document.getElementById('timer');
        const progressElement = document.getElementById('progress');
        
        if (timerElement) timerElement.textContent = this.timeLeft.toString();
        if (progressElement) {
            const progress = (this.timeLeft / 30) * 100;
            progressElement.style.transform = `scaleX(${progress / 100})`;
        }
    }

    private loadCharacter(): void {
        this.currentCharacter = this.characters[Math.floor(Math.random() * this.characters.length)];
        const imgContainer = document.querySelector('.character-container');
        const img = document.querySelector('.character-image') as HTMLImageElement;
        const badges = document.querySelector('.badges');

        if (img && this.currentCharacter) {
            img.src = this.currentCharacter.image;
            img.classList.add('blur');

            // Badges verwalten
            if (badges && this.currentCharacter.badges) {
                badges.innerHTML = this.currentCharacter.badges
                    .map(badge => `<img src="${badge}" alt="badge">`)
                    .join('');
            } else if (badges) {
                badges.innerHTML = '';
            }
        }

        this.currentHintIndex = 0;
        const hintElement = document.getElementById('hint');
        if (hintElement && this.currentCharacter) {
            hintElement.textContent = this.currentCharacter.hints[0];
        }

        const guessInput = document.getElementById('guessInput') as HTMLInputElement;
        if (guessInput) guessInput.value = '';

        this.startTimer();
    }

    private showNextHint(): void {
        if (this.currentCharacter && this.currentHintIndex < this.currentCharacter.hints.length - 1) {
            this.currentHintIndex++;
            const hint = document.getElementById('hint');
            if (hint) {
                hint.style.opacity = '0';
                setTimeout(() => {
                    if (hint && this.currentCharacter) {
                        hint.textContent = this.currentCharacter.hints[this.currentHintIndex];
                        hint.style.opacity = '1';
                    }
                }, 300);
            }
        }
    }

    private checkGuess(): void {
        const guessInput = document.getElementById('guessInput') as HTMLInputElement;
        const guess = guessInput?.value.toLowerCase();

        if (guess === this.currentCharacter?.name.toLowerCase()) {
            if (this.timer) clearInterval(this.timer);
            const pointsEarned = Math.max(1, Math.ceil(this.timeLeft / 10));
            this.score += pointsEarned;

            const scoreElement = document.getElementById('score');
            if (scoreElement) {
                scoreElement.textContent = this.score.toString();
                scoreElement.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    if (scoreElement) scoreElement.style.transform = 'scale(1)';
                }, 200);
            }

            const img = document.querySelector('.character-image');
            if (img) {
                img.classList.remove('blur');
            }

            alert(`Richtig! +${pointsEarned} Punkte`);
            setTimeout(() => this.loadCharacter(), 1500);
        } else {
            const input = document.getElementById('guessInput');
            if (input) {
                input.style.transform = 'translateX(10px)';
                setTimeout(() => {
                    if (input) {
                        input.style.transform = 'translateX(-10px)';
                        setTimeout(() => {
                            if (input) input.style.transform = 'translateX(0)';
                        }, 100);
                    }
                }, 100);
            }
            alert('Falsch! Versuch es noch einmal!');
        }
    }
}

// Spiel starten
window.addEventListener('DOMContentLoaded', () => {
    new GuessTheCharacter();
}); 