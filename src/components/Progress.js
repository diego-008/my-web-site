export default function Progress(props) {
  return (
    <div className="container animate__animated animate__backInLeft" style={{ marginTop: "50px" }}>
      <div className="row align-items-center align-items-center">
        <div className="col-sm-3 text-light d-flex justify-content-sm-end">
          <p className="h2">{props.title}</p>
        </div>
        <div className="col-sm-9 text-light d-flex justify-content-start mb-2">
          <div className="progress" style={{width: "100%"}}>
            <div
              className={`progress-bar bg-${props.color}`}
              role="progressbar"
              style={{ width: `${props.width}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
    // <div className="d-flex">
    // <h3 className="text-light mt-1">{props.title}</h3>
    // <div className="progress ms-3" style={{width:"80%", marginTop: "15px"}}>
    //   <div
    //     className={`progress-bar bg-${props.color}`}
    //     role="progressbar"
    //     style={{width: `${props.width}%`}}
    //     aria-valuenow="25"
    //     aria-valuemin="0"
    //     aria-valuemax="100"
    //   >
    //   </div>
    // </div>
    // </div>
  );
}
