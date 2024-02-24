import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/product/:id"  element={<Detail/>} />
        <Route path="/product/:id/edit" element={<Update/>} />
      </Routes>
    </>
  )
}

export default App

 