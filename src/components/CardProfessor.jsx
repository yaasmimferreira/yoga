import estilos from "./CardProfessor.module.css"

function CardEstilo(props){
    return(
        <div className={estilos.card}>
            <img className={estilos.foto} src={props.img}/>
            <h2 className={estilos.titulos}>{props.titulo}</h2>
            <p className={estilos.texto}>{props.descricao}</p>
            <button className={estilos.botao}>SAIBA +</button>
        </div>
    )
}

export default CardEstilo