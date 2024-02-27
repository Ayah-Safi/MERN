import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/players/list')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleDelete = (playerId) => {
        axios.delete(`http://localhost:8000/players/delete/${playerId}`)
            .then((res) => {
                setPlayers(players.filter(player => player._id !== playerId));
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <h2><Link to={"/players/list"}>Manage Players</Link> | <Link to={"/status/game/:gameNumber"} >Manage Player Status</Link></h2>
            <h3>List |<Link to={"/players/addplayer"}> Add Player</Link> </h3>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button 
                                    style={{backgroundColor: 'red', color: 'white'}}
                                    onClick={() => handleDelete(player._id)}
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerList;
