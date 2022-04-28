export default function Progress(props) {
  return (
    <div className="d-flex">
    <h3 className="text-light mt-1">{props.title}</h3>
    <div className="progress ms-3" style={{width:"80%", marginTop: "15px"}}>
      <div
        className={`progress-bar bg-${props.color}`}
        role="progressbar"
        style={{width: `${props.width}%`}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
      </div>
    </div>
    </div>
  );
}
