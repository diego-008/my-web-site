import Progress from "../components/Progress"
export default function Skills() {
    return(

        <div className="container animate__animated animate__backInLeft" style={{marginTop:'100px'}}>
            <Progress width="100" title="Honestidad" color="success" />
            <Progress width="80" title="Office" color="info" />
            <Progress width="80" title="Trabajo en equipo" color="info" />
            <Progress width="25" title="Inglés Básico" color="warning" />

        </div>
    )
}