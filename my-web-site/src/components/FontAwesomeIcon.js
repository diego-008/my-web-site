export default function FontAwesomeIcon(props){
    return(
        <a href={`${props.link}`} target="_blank" rel="noreferrer" >
            <i className={`${props.icon}`}></i>
        </a>
    )
}