import estilo from "./Nav.module.css"

function Nav(){
    return (
        <div>
            <header>
                <nav className={"navbar navbar-expand-lg " + estilo.nav} style={{padding: "0px"}}>
                    <div className="container">

                        <a className="navbar-brand" href="">
                            <img src="/img/logo.png" alt="Logo" className={"d-inline-block align-text-top" + estilo.img + "col "} />
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#banner">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#somos">Quem somos</a>
                                </li>

                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#aulas">Estilos de Aulas</a>
                                </li>

                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#professores">Professores</a>
                                </li>

                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#horarios">Horários</a>
                                </li>

                                <li className="nav-item">
                                    <a className={"nav-link " + estilo.nav} href="#dicas">Dicas</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
        </div>
    );
}
export default Nav;