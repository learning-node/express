const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/potatoes', (req, res, next) => {
    console.log('GOT BODY:', req.body);
    res.send(200, 'YOU SENT:' + JSON.stringify(req.body));
});

app.get('/drinks', (req, res, next) => {
    const opts = {
        method: 'get',
        url: apiUrl
    };
    request(opts, (err, response, body) => {
        res.json(body);
    });
});

app.listen(PORT, () => console.log('RUNNING'));
