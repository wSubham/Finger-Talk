let progress = 0;
let coins = 0;
let currentLesson = 1;

const progressBar = document.getElementById('progress-bar');
const coinsDisplay = document.getElementById('coins');
const completeButton = document.getElementById('complete-lesson');
const learnContent = document.getElementById('learn-content');
const implementContent = document.getElementById('implement-content');

completeButton.addEventListener('click', () => {
    progress = Math.min(progress + 10, 100);
    coins += 5;
    currentLesson += 1;

    // Update progress bar width
    progressBar.style.setProperty('--progress', `${progress}%`);
    progressBar.style.width = `${progress}%`;

    // Update coins display
    coinsDisplay.textContent = `${coins} coins`;
});

function showTab(tab) {
    if (tab === 'learn') {
        learnContent.classList.add('active');
        implementContent.classList.remove('active');
    } else {
        learnContent.classList.remove('active');
        implementContent.classList.add('active');
    }
}

// Initialize progress bar width
progressBar.style.width = `${progress}%`;
