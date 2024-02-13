// App.js
import React from 'react';
import PersonCard from './components/PersonCard';

const App = () => {
  return (
    <div>
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Blonde" />
      <PersonCard firstName="Alice" lastName="Johnson" age={45} hairColor="Brown" />
      <PersonCard firstName="Bob" lastName="Brown" age={23} hairColor="Red" />
    </div>
  );
}

export default App;
