import Card from "../components/Card";
import Reproductor from '../components/Img/reproductor.jpg'
export default function Projects() {
    return(
        <div className="container" style={{marginTop: '110px'}}>
            <div className="row">
                <div className="col-md-4">
                    <Card title='Hello' imagen={Reproductor}  />
                </div>
            </div>
        </div>
    )
}