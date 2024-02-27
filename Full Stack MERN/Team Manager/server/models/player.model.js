const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  preferredPosition: { type: String, default: '' },
  gameStatus: {
    game1: { type: String, default: 'Undecided' },
    game2: { type: String, default: 'Undecided' },
    game3: { type: String, default: 'Undecided' }
  }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
