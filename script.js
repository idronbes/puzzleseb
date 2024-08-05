document.addEventListener('DOMContentLoaded', () => {
    const hiddenImage = document.getElementById('hidden-image');

    hiddenImage.addEventListener('click', () => {
        alert('You found a clue! Try decoding the text in the image metadata.');
    });
});
