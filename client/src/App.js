import './css/index.css';
import { Routes, Route} from 'react-router-dom';
import AboutMe from './Components/Pages/AboutMe';
import Presentation from './Components/Pages/Presentation';
import Projects from './Components/Pages/Projects';
import ProjectPage from './Components/Pages/ProjectPage';
import Competences from './Components/Pages/Competences';
import CompetencePage from './Components/Pages/CompetencePage';
import Contact from './Components/Pages/Contact';
import Error from './Components/Pages/Error';
import NavBar from './Components/NavBar';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
      <ScrollToTop />
      <NavBar/>
      <Routes>
        <Route exact path="/" Component={AboutMe}/>
        <Route exact path="/Presentation" Component={Presentation}/>
        <Route exact path="/Projets" Component={Projects}/>
        <Route path="/Projets/:slug" Component={ProjectPage}/>
        <Route exact path="/Competences" Component={Competences}/>
        <Route path="/Competences/:id" Component={CompetencePage}/>
        <Route exact path="/Contact" Component={Contact}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </>
  );
}

export default App;
