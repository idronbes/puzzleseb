document.addEventListener('DOMContentLoaded', () => {
    const hiddenImage = document.getElementById('hidden-image');

    hiddenImage.addEventListener('click', () => {
        alert('You found a clue! Try decoding the text in the image metadata.');
        updateProgress('imagePuzzle');
    });

    updateProgressUI();
});

function updateProgress(puzzleName) {
    let progress = JSON.parse(localStorage.getItem('progress')) || {};
    progress[puzzleName] = true;
    localStorage.setItem('progress', JSON.stringify(progress));
    updateProgressUI();
}

function updateProgressUI() {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    const progressElement = document.getElementById('progress');

    if (progressElement) {
        progressElement.innerHTML = `
            <h3>Progress:</h3>
            <ul>
                <li>Image Puzzle: ${progress.imagePuzzle ? 'Completed' : 'Incomplete'}</li>
                <li>Cipher Puzzle: ${progress.cipherPuzzle ? 'Completed' : 'Incomplete'}</li>
                <!-- Add more puzzles here -->
            </ul>
        `;
    }
}
