const db = require('./db')
// require each of your models here...
const Game = require("./Game");
const Player = require("./Player");

// ...and give them some nice associations here!
Game.belongsTo(Player);
Player.hasMany(Game);


module.exports = {
  db,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
  Game,
  Player
}
