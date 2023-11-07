import './App.css';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import QuemSomos from "./components/QuemSomos";
import AgendeAula from "./components/AgendeAula";
import Estilos from "./components/Estilos";
import Professores from "./components/Professores";
import LinhaHorario from "./components/LinhaHorario";
import AgendeAzul from "./components/AgendeAzul";
import Dicas from "./components/Dicas";
import Footer from "./components/Footer";
import Horarios from "./components/Horarios";
function App() {
  return (
      <>
          <Nav></Nav>
          <div className="container-fluid">
              <Banner></Banner>
              <QuemSomos></QuemSomos>
              <AgendeAula></AgendeAula>
              <Estilos></Estilos>
              <Professores></Professores>
              <LinhaHorario></LinhaHorario>
              <Horarios></Horarios>
              <AgendeAzul></AgendeAzul>
              <Dicas></Dicas>
              <Footer></Footer>

          </div>
      </>
  );
}

export default App;
