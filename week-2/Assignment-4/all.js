const h1 = document.querySelector('h1[class=banner-title]');


// Request 1: Click to Change Text.
h1.addEventListener('click', () => {
    if (h1.textContent === "It's Her Shot!") {
        h1.textContent = "Have a Good Time!";
    } else {
        h1.textContent = "It's Her Shot!";
    }
});