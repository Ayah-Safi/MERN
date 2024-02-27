const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.post('/players/addplayer', PlayerController.createPlayer);
    app.get('/players/list', PlayerController.getAllPlayers);
    app.delete('/players/delete/:id', PlayerController.deletePlayer);
    app.get('/status/game/:gameNumber',PlayerController.getPlayersByGame);
    app.post('/players/status/:playerId', PlayerController.updatePlayerStatus);
}