const express = require("express");

const app = express();

// Exercise 1
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`);
});


app.listen(3000, () => {
    console.log('Listening on Port 3000');
});