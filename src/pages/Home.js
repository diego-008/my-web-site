import { Link } from "react-router-dom";
import Computer from "./img/computer.jpg";
export default function Home() {
  return (
    <div className="container mt-auto">
      <div
        className="row align-items-center"
        style={{ marginTop: "130px", marginBottom: "20px" }}
      >
        <div className="col-md-8">
          <img
            src={Computer}
            alt="logo"
            className="img-fluid d-none d-md-block"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 mt-md-0 mt-3">
          <p className="text-light fs-1">Diego Acetún</p>
          <p className="text-light fs-1 d-inline">
            Desarrollador Web. Puedes ver algunos de los proyectos que he
            desarrollado {" "}
          </p>
          <Link to="/projects" className="text-light fs-1">pulsando aquí</Link>
        </div>
      </div>
    </div>
  );
}
