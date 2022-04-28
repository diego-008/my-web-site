import Card from "../components/Card";
import Reproductor from './img/reproductor.jpg'
import Pixel from './img/pixel.jpg'
import Contacts from './img/contacts.jpg'
import Products from './img/products.jpg'
export default function Projects() {
    
    return(
        <div className="container mb-5" style={{marginTop: '130px'}}>
            <div className="row align-items-center">
                <div className="col-lg-4 d-flex justify-content-center">
                    <Card title='Reproductor Web' imagen={Reproductor} link="https://github.com/diego-008/ReproductorWeb" text='Reproductor de música desarrollado con Django, implementando una api con Flask' />
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-lg-0 mt-5">
                    <Card title='Generador de imágenes pixel art' imagen={Pixel} link="https://github.com/diego-008/GENERADOR-IMG-PIXELART" text='Generador de imágenes pixel art a través de carga de un archivo en un formato en específico, empleando un analizador léxico para su lectura' />
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-lg-0 mt-5">
                    <Card title='App de Contactos' imagen={Contacts} link="https://github.com/diego-008/FlaskContactsApp" text='Aplicación para guardar contactos por utilizando flask y mysql' />
                </div>
            </div>
            <div className="row align-items-center mt-5 justify-content-center">
                <div className="col-lg-4 d-flex justify-content-center">
                    <Card title='Control de productos' imagen={Products} link="https://github.com/diego-008/ControlDeProductos" text='Aplicación de escritorio desarrollada con python, tkinter y mysql para llevar un control de productos' />
                </div>
                <div className="col-lg-4 d-flex justify-content-center mt-lg-0 mt-5">
                    <Card title='Reproductor de Música' imagen={Reproductor} link="https://github.com/diego-008/ReproductorDeMusicaPython" text='Aplicación de escritorio desarrollada con python y tkinter implementando listas enlazadas circulares para crear las listas de reproducción' />
                </div>
            
            </div>
        </div>
    )
}