import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import home from './Components/Pages/home';
import about from './Components/Pages/about';
import projets from './Components/Pages/projets';
import contact from './Components/Pages/contact';
import Error from './Components/Pages/Error';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>

      <NavBar/>

      <Routes>
        <Route exact path="/" Component={home}/>
        <Route path="/about" Component={about}/>
        <Route path="/projets" Component={projets}/>
        <Route path="/contact" Component={contact}/>

        <Route path="*" Component={Error}/>

      </Routes>
    </>
  );
}

export default App;
