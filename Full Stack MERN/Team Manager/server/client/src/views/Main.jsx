import { Routes, Route } from 'react-router-dom';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import PlayerStatus from './PlayerStatus';
const Main = () => {
  return (
    <Routes>
      <Route path="/players/list" element={<PlayerList />} />
      <Route path="/players/addplayer" element={<AddPlayer />} />
      <Route path="/status/game/:gameNumber" element={<PlayerStatus />} />
    </Routes>
  );
};

export default Main;
