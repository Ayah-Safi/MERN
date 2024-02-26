import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';



const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setLoading(true);
      fetch(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          setCharacter(data);
          setError(null);
        })
        .catch(() => {
          setError("These aren't the droids you're looking for");
          setCharacter(null);
        })
        .finally(() => setLoading(false));
    }, [id]);
  
   
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return (
        <div>
          <SearchForm resourceType="people" />
          <p>{error}</p>
        </div>
      );
    }
  
    return (
      <div>
        <SearchForm resourceType="people" />
        {character && (
          <div>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default CharacterPage;
  