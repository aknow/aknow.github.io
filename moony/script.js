const sections = document.querySelectorAll('.section');
let currentSection = 0;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    scrollToSection(currentSection);
});