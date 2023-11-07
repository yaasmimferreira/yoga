import professor from "./Professores.module.css"
import CardProfessor from "./CardProfessor"
import CardEstilo from "./CardEstilo";

function Professores(){
    return (
        <div id="professores" className={"row " + professor.fundo}>
                <div className="col-md-12 col-sm-12 ">
                    <h1 className={professor.titulo}>Conheça nossos professores</h1>
                </div>

            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <CardProfessor img="/img/Prof 1.png" titulo= "Caio Arantes" descricao="Oferece Yoga para adultos desde
 iniciantes até avançados.
Posturas corporais,
meditação e respiração." ></CardProfessor>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <CardProfessor img="/img/Prof2.png" titulo= "Patricia Dabus" descricao="Criadora de mapas e de
experiências para despertar a
consciência e inspirar
transformações, com enorme copetência." ></CardProfessor>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <CardProfessor img="/img/Prof3.png" titulo= "Lilly Hastings" descricao="Arquiteta de formação e ex-bailarina profissional. Mais de 500h em cursos
de  formação, conduz práticas de Vinyasa." ></CardProfessor>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 ">
                <CardProfessor img="/img/Prof4.png" titulo= "Rubens Guarnieri" descricao="Formado por Karime Neder, entusiasta do
Vinyasa Flow, e inspirado também
por outros grandes mestres..." ></CardProfessor>
            </div>



        </div>
    );
}
export default Professores