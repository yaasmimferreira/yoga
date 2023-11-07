import dicas from "./Dicas.module.css"

function Dicas(){
    return (
        <div id="dicas" className={"row pt-5 "}>
            <div className="col-md-12 col-sm-12 ">
                <h1 className={dicas.titulo}>Dicas</h1>
            </div>
            <div className="col-md-7 col-sm-12  ">
                <p className={ dicas.texto}>1.Comece com uma Prática Regular: Estabeleça uma rotina de prática de yoga. A consistência é essencial para colher os benefícios.</p>
                <br/>
                <p className={ dicas.texto}>2.Escute Seu Corpo: Preste atenção às sensações do seu corpo durante a prática. Não force posições que causem dor ou desconforto. Respeite seus limites.</p>
                <br/>
                <p className={ dicas.texto}>3.Respiração Consciente (Pranayama): A respiração é fundamental no yoga. Aprenda técnicas de respiração como a respiração abdominal profunda para acalmar a mente e melhorar o foco.</p>
            </div>

            <div className="col-md-5 col-sm-12 ">
                <img className={dicas.imagem} src={'/img/imgDicas.png'}/>
            </div>

        </div>
    );
}
export default Dicas;