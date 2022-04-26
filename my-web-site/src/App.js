import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className='principal'>
      <Router>
        {/* <div className="border border-primary position-relative" style={{minHeight:'100vh'}}> */}
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            
          </Routes>
          <Footer />
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
