import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import DevclopmentSkills from './pages/DevelopmentSkills';
function App() {
  return (
    <div className="principal d-flex flex-column">
  {/* <div className="mb-auto">Flex item</div>
  <div className="">Flex item</div>
  <div className="">Flex item</div> */}

      <Router>
        {/* <div className="border border-primary position-relative" style={{minHeight:'100vh'}}> */}
          <NavBar />
          <Routes>
            <Route exact path="/my-web-site" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/programskills" element={<DevclopmentSkills />} />
            
          </Routes>
          <Footer />
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
