const express = require('express'),
    consign = require('consign'),
    app = express(),
    http = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

consign({ cwd: 'app' })
    .then('dao')
    .then('api')
    .then('routes')
    .into(app);

http.listen(5000, () => console.log('running...'));