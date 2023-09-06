const h1 = document.querySelector('h1[class=banner-title]');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerMenu = document.getElementById('headerMenu');
const quitMenuBtn = document.getElementById('quitMenuBtn');

// Request 1: Click to Change Text
h1.addEventListener('click', () => {
    if (h1.textContent === "It's Her Shot!") {
        h1.textContent = "Have a Good Time!";
    } else {
        h1.textContent = "It's Her Shot!";
    }
});


// Request 2: Click to Show/Close Menu
mobileMenuBtn.addEventListener('click', () => {
    headerMenu.style.display = "flex";
    quitMenuBtn.style.display = "flex";

})

quitMenuBtn.addEventListener('click', () => {
    headerMenu.removeAttribute('style');
    quitMenuBtn.removeAttribute('style');
})