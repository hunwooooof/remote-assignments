const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');  // app.set(name, value) Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.


app.get('/', (req,res) => {
    res.redirect('/sum.html');
})

app.get('/getData', (req,res) => {
    res.setHeader('Content-Type', 'application/json');
    const { number } = req.query;
    let output = {
        "message": "",
        "status": ""
    };
    
    if ( !isNaN(number) && number > 0 ) {   // 1. number is a positive integer
        let answer = 0;
        for (var i = 1; i <= number; i++) { // calculate for the answer
            answer += i;
        }
        output.message = answer;
        output.status = "success";

    } else if ( number ) {                  // 2. number is true
        output.message = 'Wrong Parameter!';
        output.status = "error";

    } else {
        output.message = 'Lack of Parameter!';   
        output.status = "error";
    }
    res.send(output);
})


// Assignment-5
app.get('/myName', (req,res) => {
    const { username } = req.cookies;
    if (username) {
        res.locals.name = username;
        res.render('hello');
    } else {
        const { name } = req.query
        res.redirect('/trackName');
    }
});

app.get('/trackName', (req, res) => {
    const { name } = req.query;
    res.cookie('username', name);
    if ( name ) {
        res.redirect('/myname');
    } else {
        res.render('getname');
    }
});


app.post('/trackName', (req, res) => {
    res.redirect(`/trackName?name=${req.body.username}`);
});





// error handling middleware
app.use((req, res, next) => {
    const err = new Error('Oops! Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
})




app.listen(3000, () => {    // Binds and listens for connections on the specified host and port. 
    console.log('Running on localhost:3000...');
});




/*

1. Serve a URL http://localhost:3000/myName by your server.✅
2. When the user connects to http://localhost:3000/myName, check cookies for the
user's name in the backend.
a. If you can get the user's name from cookies, show it on the web page. Done.✅
b. If you cannot get the user's name from cookies, show a HTML form including
a text input and a button in the web page. Go to step 3.✅
3. User can enter his name in the text input, and then click button to submit form to a
URL http://localhost:3000/trackName?name=使用者的輸入 which should be served
from your server, too.
4. When user submits form to http://localhost:3000/trackName?name=使用者的輸入,
you should get user’s name from HTTP parameter and store it in the cookies.
5. Redirect user to http://localhost:3000/myName, user can see his name, finally. Done

*/