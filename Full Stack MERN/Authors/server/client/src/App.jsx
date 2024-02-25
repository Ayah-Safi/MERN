import './App.css'
import Main from './views/Main'
import AddAuthor from './views/AddAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <>
    <Routes>
      <Route path="/authors" element={<Main />} />
      <Route path="/authors/new" element={<AddAuthor/>}/>
      <Route path="/authors/edit/:id" element={<UpdateAuthor />} />
    </Routes>
    </>
  )
}

export default App
