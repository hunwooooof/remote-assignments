const h1 = document.querySelector('h1[class=banner-title]');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerMenu = document.getElementById('headerMenu');
const quitMenuBtn = document.getElementById('quitMenuBtn');
const articleMore = document.getElementById('articleMore');
const readMoreBtn = document.getElementById('readMoreBtn');


// Request 1: Click to Change Text
h1.addEventListener('click', () => {
    if (h1.textContent === "It's Her Shot!") {
        h1.textContent = "Have a Good Time!";
    } else {
        h1.textContent = "It's Her Shot!";
    }
});


// Request 2: Click to Show/Close Menu
mobileMenuBtn.addEventListener('click', () => { // Click to show menu
    headerMenu.style.display = "flex";
    quitMenuBtn.style.display = "flex";
});

quitMenuBtn.addEventListener('click', () => {   // Click to close menu
    headerMenu.removeAttribute('style');
    quitMenuBtn.removeAttribute('style');
});

window.addEventListener('resize', () => {      // Resize window close menu
    if (window.innerWidth > 800) {
        headerMenu.removeAttribute('style');
        quitMenuBtn.removeAttribute('style');
        return;
    }
});


// Request 3: Click to Show More Content Boxes
readMoreBtn.addEventListener('click', () => {
    if (readMoreBtn.textContent === '閱讀更多') {
        articleMore.style.display = "flex";
        articleMore.scrollIntoView();
        readMoreBtn.textContent = "收起文章";
    } else {
        articleMore.removeAttribute('style');
        readMoreBtn.textContent = "閱讀更多";
    }
});
