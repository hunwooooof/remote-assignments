//Complete the functions below to make an AJAX call to a URL by Fetch API, and show the response data in the page. You may render UI with any style.


function ajax(url) {
    // your code here
    return fetch(url)
    .then((res) => {
        if ( !res.ok ) {
            console.error(`${res.status}, response is not ok.`)
        }
        return res.json();
    })
    .then((data) => data.map((item) => { return `<div class="card">
        <h1 classs="name">${item.name}</h1>
        <p classs="price">售價：$${item.price}</p>
        <div classs="discription">${item.description}</div>
    </div>`}))
}
 
/*
[
    {name: 'Pixel 3', price: 27700, description: '最新的 Google 手機。'},
    {name: 'Chromecast', price: 1500, description: '在大螢幕上播放喜歡的影片。'},
    {name: 'Pixel Book', price: 12000, description: '最新的 Chromebook 產品。'}
]
*/

function render(data) {
    // your code here
    const app = document.getElementById('app');
    app.innerHTML = data.join('');

}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
    render(data);
});


// you should get product information in JSON format and render data in the page