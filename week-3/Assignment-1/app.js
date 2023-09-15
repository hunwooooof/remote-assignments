const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');  // app.set(name, value) Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.


app.get('/', (req,res) => {
    res.render('index');
})

app.get('/getData', (req,res) => {
    const { number } = req.query;

    
    if ( !isNaN(number) && number > 0 ) {   // 1. number is a positive integer
        let answer = 0;
        for (var i = 1; i <= number; i++) { // calculate for the answer
            answer += i;
        }
        res.locals.output = answer;

    } else if ( number ) {                  // 2. number is true
        res.locals.output = 'Wrong Parameter!';

    } else {
        res.locals.output = 'Lack of Parameter!';   
    }
    res.render('getData');
     

})


// error handling middleware
app.use((req, res, next) => {
    const err = new Error('Oops! Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', );
})




app.listen(3000, () => {    // Binds and listens for connections on the specified host and port. 
    console.log('Running on localhost:3000...');
});