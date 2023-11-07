import estilos from "./Estilos.module.css"
import CardEstilo from "./CardEstilo"

function Estilos(){
    return (
        <div id="aulas" className={"row " + estilos.fundo}>
            <div className="col-md-12">
                <h1 className={estilos.titulo}>Estilos presentes em nosso Estúdio</h1>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo1.png" titulo= "Rasa Yoga" descricao="Rasa Yoga é um estilo de Yoga moderno que honra as raízes
da prática e está comprometida com a equidade e inclusão
de todos. Criamos espaço para a jornada transformacional
do Yoga e da arte de viver. As aulas abordam um amplo
leque de temas, juntando ásana, mantra, mudra, mito,
pranayama, meditação, anatomia funcional, filosofia de Yoga
tântrica e alquimia da alma."></CardEstilo>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo2.png" titulo= "Yoga Kuruntas" descricao="Kuruntas são excelentes acessórios para aprofundar um
percurso de auto investigação. Através do suporte que este
prop, juntamente com a parede o solo proporcionam, é
possível explorar posturas tradicionais do Yoga de uma
forma inusitada e divertida!"></CardEstilo>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo3.png" titulo= "Yoga Restaurativo" descricao="A prática de yoga restaurativo é introspectiva,
transformadora, tranquila e terapêutica com efeitos,
cientificamente comprovados, no sistema nervoso
autônomo..."></CardEstilo>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo4.png" titulo= "Yoga com Props" descricao="A prática é realizada com o auxílio de diversos acessórios
como cintos, bloquinhos, almofadões e cadeiras, que
auxiliam o alinhamento músculo-esquelético..."></CardEstilo>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo5.png" titulo= "Vinyasa & Alinhamento" descricao="Aula onde serão abordadas as técnicas fundamentais do
vinyasa (como sincronizar o movimento à respiração e como
realizar udyai pranayama) e..."></CardEstilo>
            </div>

            <div className="col-md-4">
                <CardEstilo img="/img/estilo6.png" titulo= "Vinyasa" descricao="Estilo surgido nos EUA inspirado pelo Ashtanga Yoga. Não
possui uma série fixa de posturas e as aulas são bastante
fluídas e dinâmicas..."></CardEstilo>
            </div>


        </div>
    );
}
export default Estilos;