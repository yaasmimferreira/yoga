import estilos from "./CardEstilos.module.css"

function CardEstilo(props){
    return(
        <div className={estilos.card}>
            <img className={estilos.foto} src={props.img}/>
            <h2 className={estilos.titulos}>{props.titulo}</h2>
            <p className={estilos.texto}>{props.descricao}</p>
        </div>
    )
}

export default CardEstilo