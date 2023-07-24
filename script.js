const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');
let currentSectionIndex = 0;
const sections = Array.from(document.getElementsByTagName('section'));

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
