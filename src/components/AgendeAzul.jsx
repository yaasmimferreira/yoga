import agende from "./AgendeAzul.module.css"

function AgendeAzul(){
    return (
        <div className={"row " + agende.fundo}>
            <div className={"col " + agende.coluna}>
                <h3 className={agende.frase}>Agende uma Aula Teste online!</h3>
                <button className={agende.bnt}>AGENDAR</button>
            </div>
        </div>
    );
}
export default AgendeAzul;