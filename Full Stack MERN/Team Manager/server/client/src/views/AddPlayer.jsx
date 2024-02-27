import React, { useState } from 'react';
import axios from 'axios';

const AddPlayer = () => {
    
    const [playerName, setPlayerName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const updatePlayerName = (e) => {
        const name = e.target.value;
        setPlayerName(name);
        setIsFormValid(name.length >= 2);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if (!isFormValid) return;
        
        axios.post('http://localhost:8000/players/addplayer', {
            name: playerName,
            preferredPosition
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    const buttonStyle = {
        backgroundColor: isFormValid ? 'green' : 'red',
        color: 'white', 
        border: 'none',
        padding: '10px 20px',
        cursor: isFormValid ? 'pointer' : 'not-allowed',
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Player Name</label><br/>
                <input 
                    type="text" 
                    onChange={updatePlayerName} 
                    value={playerName}
                    required 
                    minLength="2"
                />
            </p>
            <p>
                <label>Preferred Position</label><br/>
                <input 
                    type="text" 
                    onChange={(e) => setPreferredPosition(e.target.value)} 
                    value={preferredPosition}
                />
            </p>
            <input 
                type="submit" 
                value="Add Player" 
                disabled={!isFormValid}
                style={buttonStyle}
            />
        </form>
    );
};

export default AddPlayer;
