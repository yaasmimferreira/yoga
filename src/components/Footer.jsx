import rodape from "./Footer.module.css"

function Footer(){
    return (
        <div className={"row " + rodape.fundo}>
            <img className={rodape.img} src="/img/logofooter.png"/>
            <p className={rodape.local}>Rua Mourato Coelho, 755, Sobreloja <br/> Vila Madalena</p>
            <div>
                <a href="http://instagram.com" target="_blank">
                    <img className={rodape.icon} src= "/img/insta.png"/>
                </a>
                <a href="http://facebook.com" target="_blank">
                    <img className={rodape.icon} src= "/img/face.png"/>
                </a>
                <a href="http://youtube.com" target="_blank">
                    <img className={rodape.icon}src= "/img/tube.png"/>
                </a>
            </div>

        </div>
    );
}
export default Footer;