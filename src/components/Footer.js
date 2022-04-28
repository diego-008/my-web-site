import "./css/footer.css";
import FontAwesomeIcon from "../components/FontAwesomeIcon";
export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 d-flex justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-github fa-4x text-light"
              link="https://github.com/diego-008"
            />
          </div>
          <div className="col-4 d-flex justify-content-center">
          <FontAwesomeIcon icon="fa-brands fa-twitter fa-4x text-light" link="https://twitter.com/Diego_A008?t=CQ44cUXrWNUCktC9cWaLGw&s=08" />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin fa-4x text-light"
              link="https://www.linkedin.com/in/diego-acetun"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
