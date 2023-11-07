import agende from "./AgendeAula.module.css"

function AgendeAula(){
    return (
       <div className={"row " + agende.fundo}>
           <div  className={"col " + agende.coluna}>
               <h3 className={agende.frase}>Agende uma Aula Teste online!</h3>
               <button className={agende.bnt}>AGENDAR</button>
           </div>
       </div>
    );
}
export default AgendeAula;