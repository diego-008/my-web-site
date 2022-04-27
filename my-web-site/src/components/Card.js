export default function Card(props) {
  return (
    <div className="card animate__animated animate__backInDown" style={{width: '18rem'}}>
      <img src={props.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <a href={props.link} target="_blank" rel="noreferrer"  className="btn btn-primary">
          Ver Proyecto
        </a>
      </div>
    </div>
  );
}
