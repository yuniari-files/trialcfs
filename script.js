const yesBtn = document.querySelector('#yesButton');
const noBtn = document.querySelector('#noButton');
const body = document.querySelector('body');

yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * window.innerWidth - 100);
    const j = Math.floor(Math.random() * window.innerHeight - 50);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${i}px`;
    noBtn.style.top = `${j}px`;
});