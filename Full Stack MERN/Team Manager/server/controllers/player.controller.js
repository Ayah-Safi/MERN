const Player = require('../models/player.model');

module.exports.createPlayer = (request, response) => {
    const { name, preferredPosition } = request.body;

    if (!name) {
        return response.status(400).json({ error: "Name is required." });
    }

    let playerData = {
        name,
        gameStatus: { game1: 'Undecided', game2: 'Undecided', game3: 'Undecided' } // Default game statuses
    };

    if (preferredPosition) {
        playerData.preferredPosition = preferredPosition;
    }

    Player.create(playerData)
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
};


module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.status(400).json(err));
};

module.exports.deletePlayer = (request, response) => {
    Player.findByIdAndDelete(request.params.id)
        .then(() => response.json({ message: 'Player deleted successfully' }))
        .catch(err => response.status(400).json('Error: ' + err));
};

module.exports.getPlayersByGame = (req, res) => {
    const gameNumber = req.params.gameNumber;
    const gameStatusKey = `gameStatus.game${gameNumber}`;

    Player.find({}, ['name', 'preferredPosition', gameStatusKey])
        .then(players => {
            const transformedPlayers = players.map(player => {
                return {
                    _id: player._id,
                    name: player.name,
                    preferredPosition: player.preferredPosition,
                    status: player.gameStatus[`game${gameNumber}`] || 'Undecided' 
                };
            });
            res.json(transformedPlayers);
        })
        .catch(err => res.status(400).json({ error: err.message }));
};

module.exports.updatePlayerStatus = (req, res) => {
    const { playerId } = req.params;
    const { status, gameNumber } = req.body;
    const statusField = `gameStatus.game${gameNumber}`;
  
    Player.findByIdAndUpdate(
      playerId,
      { [statusField]: status },
      { new: true }
    )
      .then(updatedPlayer => {
        if (!updatedPlayer) {
          return res.status(404).json({ message: 'Player not found' });
        }
        res.json({ message: 'Status updated', updatedPlayer });
      })
      .catch(err => res.status(500).json({ message: 'Error updating status', error: err }));
  };