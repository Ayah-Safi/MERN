import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [resourceType, setResourceType] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resourceType}/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <input 
        type="number" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Enter ID"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

