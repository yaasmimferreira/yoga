import somos from "./QuemSomos.module.css"

function QuemSomos(){
    return (
       <div className={"row pt-5 "}>
           <div id="somos" className="col-md-7 col-sm-12  ">
               <h1 className={somos.titulo}>Quem Somos?</h1>
               <p className={ somos.texto}>Peace & Yoga é um espaço acolhedor que frisa Bem-Estar de todos os alunos, onde você pode
                   escapar do estresse da vida corriqueira. Foi inaugurado em 2006 e hoje oferece mais de 70
                   aulas de yoga por semana em diversos horários e estilos diferentes.Pensando em ampliar nosso
                   estúdio disponibilizamos aulas de aprofundamento nas técnicas, oferecemos cursos livres de
                   formação de professores de yoga, terapeutas e massoterapia com mestres brasileiros e
                   norte-americanos.</p>
           </div>

           <div className="col-md-5 col-sm-12 ">
               <img className={somos.imagem} src={'/img/imgSomos.png'}/>
           </div>

       </div>
    );
}
export default QuemSomos;