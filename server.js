const express = require("express");

const app = express();

// Exercise 1: Be Polite, Greet the User
app.get("/greetings/:username", (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});

// Exercise 2: Rolling the Dice
app.get("/roll/:number", (req, res) => {
  if (req.params.number === 0) {
    return res.send(`You rolled a 0.`);
  } else if (isNaN(req.params.number)) {
    return res.send(`You must specify a number!`);
  }
  const roll = Math.floor(Math.random() * (req.params.number + 1));
  return res.send(`You rolled a ${roll}`);
});

// Exercise 3: I want that one!
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:index", (req, res) => {
  const index = Number(req.params.index);

  if (isNaN(index) || index < 0 || index > collectibles.length) {
    return res.send(`This item is not yet in stock. Check back soon!`);
  }
  const item = collectibles[index - 1];
  return res.send(
    `So, you want the ${item.name}? For ${item.price}, it can be yours!`
  );
});

// Exercise 4: Filter Shoes by Query Parameters
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
    
});

// this goes at the very end
app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
