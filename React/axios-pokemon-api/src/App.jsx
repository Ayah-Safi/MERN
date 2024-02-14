import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemons, setPokemons] = useState([]);

  function fetchPokemons() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => console.error("There was an error fetching the Pokémon data:", error));
  }

  return (
    <>
      <button type="submit" onClick={fetchPokemons}>Fetch Pokemon</button>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
