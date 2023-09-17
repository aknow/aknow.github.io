const sections = document.querySelectorAll('.section');
let currentSection = 0;
let touchStartY = null;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (touchStartY === null) return;

    const touchEndY = event.touches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    if (deltaY > 50) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else if (deltaY < -50) {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }

    touchStartY = null;
}

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

window.addEventListener('DOMContentLoaded', () => {
    scrollToSection(currentSection);
});