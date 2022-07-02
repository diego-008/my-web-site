// import "bootswatch/dist/simplex/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import DevclopmentSkills from './pages/DevelopmentSkills';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="principal d-flex flex-column">

      <Router>
          <NavBar />
          <Routes>
            <Route exact path="/my-web-site" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/programskills" element={<DevclopmentSkills />} />
            <Route exact path="/contact" element={<Contact />} />
            
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
