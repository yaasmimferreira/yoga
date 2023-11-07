import banner from "./Banner.module.css"

function Banner(){
    return (
        <main id="banner" className={"row banner " + banner.main + " " + banner.row} style={{backgroundImage: "url(/img/Home.png)"}}>
            <div className="col">
                <h2 className={banner.serenidade}>Serenidade</h2>
                <h2 className={banner.brancotxt}>está dentro de você</h2>
                <p className={banner.frase}>Controle seu corpo para libertar sua alma</p>
            </div>
        </main>
    );
}
export default Banner;