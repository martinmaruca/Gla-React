import { Link} from "react-router-dom";
import "./footer.css";

const footer = () => {
    return (  
        <>
            <footer className="footer">
                <div className="footer__contenedor footer__contenido">
                    <nav className="navegacion">
                        <Link className="footer__enlace" to="/">Inicio</Link>
                        <Link className="footer__enlace" to="/nosotros">Nosotros</Link>
                        <Link className="footer__enlace" to="/blog">Blog</Link>
                        <Link className="footer__enlace" to="/tienda">Tienda</Link>
                    </nav>
                    <p className="footer__copyright">Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}
 
export default footer;