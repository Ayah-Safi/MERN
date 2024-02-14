import './App.css'
import React, {useState} from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  function fecthPokemons ()  {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
      // not the actual JSON response body but the entire HTTP response
      return response.json();  //we use json  method to parse the response into a JavaScript object
  }).then(response => {
      // we now run another promise to parse the HTTP response into usable JSON
      console.log(response);
      setPokemons(response.results);
  }).catch(err=>{
      console.log(err);
  });

  }

  return (
    <>
     <button type="submit" onClick={fecthPokemons}>Fetch Pokemon</button>
     <ul>
      {pokemons.map((item,key) => (
        <li key={key}>
          {item.name}
        </li>
      ))}
      </ul>
    </>
  )
}

export default App
