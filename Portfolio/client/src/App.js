import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AboutMe from './Components/Pages/AboutMe';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Error from './Components/Pages/Error';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>

      <NavBar/>

      <Routes>
        <Route exact path="/" Component={AboutMe}/>
        <Route path="/Projects" Component={Projects}/>
        <Route path="/Contact" Component={Contact}/>

        <Route path="*" Component={Error}/>

      </Routes>
      
    </>
  );
}

export default App;
