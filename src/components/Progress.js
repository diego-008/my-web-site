import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Progress({ icon, colorIcon, title, color, width }) {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row align-items-center align-items-center">
        <div className="col-sm-3 text-light d-flex justify-content-sm-end mb-2">
          {/* <img
            src={props.img}
            className="img-fluid mt-2"
            style={{ width: "24px", height: "24px" }}
            alt=""
          /> */}
          <FontAwesomeIcon
            icon={icon}
            size="2x"
            style={{ color: colorIcon }}
          />

          <p className="h2">&nbsp;{title}</p>
        </div>
        <div className="col-sm-9 text-light d-flex justify-content-start mb-2">
          <div className="progress" style={{ width: "100%" }}>
            <div
              className={`progress-bar bg-${color}`}
              role="progressbar"
              style={{ width: `${width}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
