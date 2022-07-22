import { Link} from "react-router-dom";
import "./footer.css";

const footer = () => {
    return (  
        <>
            <footer className="footer">
                <div className="footer__contenedor footer__contenido">
                    <nav className="navegacion">
                        <a className="footer__enlace" href="/">Inicio</a>
                        <Link to={"/nosotros"}>
                            <a className="footer__enlace" href="/">Nosotros</a>
                        </Link>
                        <Link to={"/blog"}>
                            <a className="footer__enlace" href="/">Blog</a>
                        </Link>
                        <Link to={"/tienda"}>
                            <a className="footer__enlace" href="/">Tienda</a>
                        </Link>
                    </nav>
                    <p className="footer__copyright">Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}
 
export default footer;