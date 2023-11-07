import hora from "./Horarios.module.css"

function Horarios(){
    return (
        <div id="horarios" className={"row pt-5 "}>

            <div className="col-md-5 col-sm-12 ">
                <iframe className={hora.video} width="560" height="315" src="https://www.youtube.com/embed/OuCvUDVoX3M?si=7ylMD1kizKhyX3D5"
                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>

            <div className="col-md-7 col-sm-12 ">
                <p className={hora.texto} ><img className={hora.icon}src= "/img/IconFone.png"/>Atendimento regular segunda a sexta das 06h00 às 18h30</p>
                <p className={hora.texto}><img className={hora.icon}src= "/img/iconChapeu.png"/>Aos finais de semana temos Workshops e Formações de Professores.</p>
                <button className={hora.bnt}>Saiba Mais</button>
            </div>

        </div>
    );
}
export default Horarios;