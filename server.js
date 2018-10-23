const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Why does the order of the following logic matter?

app.use(express.static('./public'));

app.use((req, res, next) => {
    console.log('MIDDLEWARE 1');
    next(); // Why do I need to invoke next?
});

app.use((req, res, next) => {
    console.log('MIDDLEWARE 2');
    next(); // What if I don't invoke next?
});

app.get('/about', (req, res, next) => {
    res.send('About what?');
});

// Why would I put this last
// What routes would match with this piece of logic?
app.all('*', (req, res, next) => {
    console.log('404');
    res.redirect('/');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
