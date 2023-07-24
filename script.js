const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
const endOfPage = document.getElementById('end-of-page');

let currentSectionIndex = 0;
const sections = Array.from(document.getElementsByTagName('section'));

function checkButtons() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollPosition > 0) {
        upButton.hidden = false;
    } else {
        upButton.hidden = true;
    }

    if (scrollPosition + windowHeight >= docHeight) {
        downButton.hidden = true;
    } else {
        downButton.hidden = false;
    }
}

window.addEventListener('scroll', checkButtons);

upButton.addEventListener('click', function() {
    currentSectionIndex = Math.max(0, currentSectionIndex - 1);
    sections[currentSectionIndex].scrollIntoView({behavior: 'smooth'});
});

downButton.addEventListener('click', function() {
    currentSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    sections[currentSectionIndex].scrollIntoView({behavior: 'smooth'});
});


document.querySelector('h1').addEventListener('click', function() {
    this.style.color = this.style.color === 'red' ? '#333' : 'red';
});
