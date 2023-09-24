const url = "https://api.github.com/orgs/facebook/repos";

// Fetch Function

function render(data) {
    const app = document.getElementById("app");
    app.innerHTML += data.join("");
}

function fetchRepo(url, page) {
    return fetch(`${url}?per_page=5&page=${page}`)
        .then((res) => (res.json()))
        .then((datas) => datas.map((repo) => {
            if (repo.topics.length == 0) {
                return `<li class="repo">
            <div class="title">
                <h1 class="name">${repo.name}</h1>
                <span class="visibility">${repo.visibility}</span>
            </div>
                <p class="description">${repo.description}</p>
            </li>`;
            } else {
                return `<li class="repo">
            <div class="title">
                <h1 class="name">${repo.name}</h1>
                <span class="visibility">${repo.visibility}</span>
            </div>
                <p class="description">${repo.description}</p>
                <ul class="topics">${repo.topics.map((topic) => `<li>${topic}</li>`).join("")}</ul>
            </li>`;
            }
        }))
        .then((data) => render(data));
}


fetchRepo(url, 1);

// Eventlistener

let page = 2;
const moreBtn = document.getElementById('more');
moreBtn.addEventListener('click', () => {
    fetchRepo(url, page);
    page++;
});