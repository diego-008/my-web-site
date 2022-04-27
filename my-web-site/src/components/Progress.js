export default function Progress() {
  return (
    <div className="d-flex">
    <h3 className="text-light mt-1">Office</h3>
    <div className="progress ms-3" style={{width:"82%", marginTop: "15px"}}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{width:"80%"}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
      </div>
    </div>
    </div>
  );
}
