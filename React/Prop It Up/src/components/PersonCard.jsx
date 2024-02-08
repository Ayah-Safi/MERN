import React, { useState } from 'react';



const PersonCard = (props) => {
  // Initialize state for age with the prop value
  const [age, setAge] = useState(props.age);

  // Function to handle the birthday click
  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>{props.lastName}, {props.firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={handleBirthday}>Birthday Button for {props.firstName} {props.lastName}</button>
    </div>
  );
}

export default PersonCard;