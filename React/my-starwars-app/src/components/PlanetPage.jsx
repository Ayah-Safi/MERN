import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';

const PlanetPage = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setPlanet(data);
        setError(null);
      })
      .catch(() => {
        setError("These aren't the droids you're looking for");
        setPlanet(null);
      })
      .finally(() => setLoading(false));
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <SearchForm resourceType="planets" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <SearchForm resourceType="planets" />
      {planet && (
        <div>
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </div>
      )}
    </div>
  );
};

export default PlanetPage;
