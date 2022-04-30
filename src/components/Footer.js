import "./css/footer.css";
import FontAwesomeIcon from "../components/FontAwesomeIcon";
export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container-fluid text-light">
        <div className="row justify-content-center">
          <div className="col-sm-4 text-center border border-primary py-2">
              <p className="h5">PROYECTOS</p>

              <FontAwesomeIcon
                icon="fa-brands fa-github fa-4x text-light"
                link="https://github.com/diego-008"
              />
          </div>

          <div className="col-sm-8 d-flex justify-content-center border border-primary py-2">
            <div className="row" style={{ width: "100%" }}>
              <p className="h5 text-center">CONTACTO</p>
                <div className="row">
                  
                
                  <div className="col-6 text-center">
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin fa-4x text-light"
                      link="https://www.linkedin.com/in/diego-acetun"
                    />
                  </div>
                
                  <div className="col-6 text-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-rectangle-list fa-4x text-light"
                        link="https://forms.gle/PFdcxcoCSJDi7p9Y9"
                      />
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
