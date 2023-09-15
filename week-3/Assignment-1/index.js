const express = require('express');
const app = express();
app.set('view engine', 'pug');  // app.set(name, value) Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server.


app.get('/', (req,res) => {
    res.render('index');
})

app.listen(3000, () => {    // Binds and listens for connections on the specified host and port. 
    console.log('Running on localhost:3000...');
});