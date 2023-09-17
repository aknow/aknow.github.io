const sections = document.querySelectorAll('.section');
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

function handleScroll() {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
            const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const sectionHeight = sections[currentSection].offsetHeight;

            if (scrollPosition >= currentSection * sectionHeight + windowHeight / 2) {
                currentSection++;
                if (currentSection < sections.length) {
                    scrollToSection(currentSection);
                }
            } else if (scrollPosition < currentSection * sectionHeight - windowHeight / 2 && currentSection > 0) {
                currentSection--;
                scrollToSection(currentSection);
            }
        }, 100); // Adjust the delay if needed
    }
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('DOMContentLoaded', () => {
    scrollToSection(currentSection);
});