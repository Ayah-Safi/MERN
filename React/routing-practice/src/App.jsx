import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";
const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}

const Dynamic = () => {
  const params = useParams();
  const paramValue = params.dynamicParam; 
  const isNumber = !isNaN(paramValue);

  return (
    <h1 style={{color: "yellow"}}>
      {isNumber ? `The number is: ${paramValue}` : `The word is: ${paramValue}`}
    </h1>
  );
};

function App() {
 

  return (
    <>
      <h1>Practice Routing Assignment</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={< Dynamic/>} />
      </Routes>
    </>
  )
}

export default App
