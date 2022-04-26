import Card from "../components/Card";
import Reproductor from './img/reproductor.jpg'

export default function Projects() {
    let textReproductor = 'Reproductor de música desarrollado con Django, implementando una api con Flask';
    return(
        <div className="container" style={{marginTop: '110px'}}>
            <div className="row">
                <div className="col-md-4">
                    <Card title='Reproductor Web' imagen={Reproductor} link="https://github.com/diego-008/ReproductorWeb" text={textReproductor} />
                </div>
                <div className="col-md-4">
                    <Card title='Reproductor Web' imagen={Reproductor} link="https://github.com/diego-008/ReproductorWeb" text={textReproductor} />
                </div>
            </div>
        </div>
    )
}