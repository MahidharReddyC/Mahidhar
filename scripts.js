// Countdown Timer
const countdown = () => {
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1);
    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();
    const remTime = eventTime - currentTime;

    const s = Math.floor(remTime / 1000);
    const sec = s % 60;

    document.getElementById('time').innerHTML = sec + " seconds";

    if (sec <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('revealButton').style.display = 'inline-block';
    }
};

setInterval(countdown, 1000);

// Reveal Surprise Message
const revealButton = document.getElementById('revealButton');
revealButton.addEventListener('click', () => {
    document.getElementById('surpriseMessage').classList.remove('hidden');
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('virtualGifts').classList.remove('hidden');
});

// Start Quiz (Placeholder for future implementation)
const startQuizButton = document.getElementById('startQuiz');
startQuizButton.addEventListener('click', () => {
    alert("Quiz will start soon! Stay tuned!");
});
