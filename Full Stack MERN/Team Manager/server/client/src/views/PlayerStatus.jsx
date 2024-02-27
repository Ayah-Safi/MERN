import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PlayerStatus = () => {
  const { gameNumber } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/status/game/${gameNumber}`)
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, [gameNumber]);

  const handleStatusChange = (playerId, newStatus) => {
    const statusUpdate = {
      status: newStatus,
      gameNumber: gameNumber
    };
  
    axios.post(`http://localhost:8000/players/status/${playerId}`, statusUpdate)
      .then(response => {
        setPlayers(currentPlayers => {
          return currentPlayers.map(player => {
            if (player._id === playerId) {
              return { ...player, gameStatus: { ...player.gameStatus, [`game${gameNumber}`]: newStatus } };
            }
            return player;
          });
        });
      })
      .catch(error => console.error('There was an error updating the status!', error));
  };
  const styles = {
    playing: {
      backgroundColor: 'green',
    },
    notPlaying: {
      backgroundColor: 'red',
    },
    undecided: {
      backgroundColor: 'yellow',
    }
  };

  return (
    <div>
      <h2>Player Status - Game {gameNumber}</h2>
      <div>
        <Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>
                <button style={player.status === 'Playing' ? styles.playing : {}} onClick={() => handleStatusChange(player._id, 'Playing')}>Playing</button>
                <button style={player.status === 'Not Playing' ? styles.notPlaying : {}} onClick={() => handleStatusChange(player._id, 'Not Playing')}>Not Playing</button>
                <button style={player.status === 'Undecided' ? styles.undecided : {}} onClick={() => handleStatusChange(player._id, 'Undecided')}>Undecided</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatus;
