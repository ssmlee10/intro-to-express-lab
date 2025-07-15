const express = require("express");

const app = express();

// Exercise 1
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
});

// Exercise 2
app.get('/roll/:number', (req, res) =>{

    if (!Number(req.params.number)) {
        return res.send(`You must specify a number!`);
    }
    const roll = Math.floor(Math.random() * (req.params.number) + 1);
    return res.send(`You rolled a ${roll}`);
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});