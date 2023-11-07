    import linha from "./LinhaHorario.module.css"

function AgendeAula(){
    return (
        <div className={"row " + linha.fundo}>
            <div className={"col " + linha.coluna}>
                <img className={linha.relogio} src={'/img/relogio.png'}/>
                <h3 className={linha.frase}>Horários das nossas aulas</h3>
                    <button className={linha.bnt}>Horários</button>
            </div>
        </div>
    );
}
export default AgendeAula;