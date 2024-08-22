document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const heart = document.querySelector('.heart');

    let isDragging = false;
    let startY;
    let startBottom;

    // Add event listener for the heart to toggle the envelope opening
    heart.addEventListener('click', () => {
        envelope.classList.toggle('open');
    });

    // Add event listener for dragging
    letter.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        startBottom = parseInt(window.getComputedStyle(letter).bottom);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;
        const offsetY = e.clientY - startY;
        letter.style.bottom = `${startBottom - offsetY}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});
