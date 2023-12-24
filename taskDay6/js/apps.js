const btnBubbles  = document.querySelector('.btnBubbles');
const btnRandom = document.querySelector('.btnRandom');

btnBubbles.addEventListener('click', (e) => {
    e.preventDefault();
    btnBubbles.classList.add("animate");

    setTimeout(() => {
        btnBubbles.classList.remove("animate");
    }, 1000); // 1s = 1000ms
})

btnRandom.addEventListener('click', () => {
    const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
    btnRandom.style.backgroundColor = random;
});