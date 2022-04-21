import { Link } from 'react-router-dom';
import Logo from './Img/logo.PNG'
export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">

          <img src={Logo} alt="logo" className="" style={{width: '100px'}} />
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto" style={{fontSize: '30px'}}>
            <Link className="nav-link active" aria-current="page" to="/projects">
              PROJECTS
            </Link>
            <Link className="nav-link active ms-lg-5" to="#">
              Features
            </Link>
            <Link className="nav-link  active ms-lg-5" to="#">
              Pricing
            </Link>
            <Link className="nav-link active ms-lg-5" to="#">Disabled</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
