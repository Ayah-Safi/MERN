import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CharacterPage from './components/CharacterPage';
import PlanetPage from './components/PlanetPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people/:id" element={<CharacterPage />} />
        <Route path="/planets/:id" element={<PlanetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
