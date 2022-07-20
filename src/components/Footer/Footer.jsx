import "./footer.css";

const footer = () => {
    return (  
        <>
            <footer className="footer">
                <div className="footer__contenedor footer__contenido">
                    <nav className="navegacion">
                        <a className="footer__enlace" href="index.html">Inicio</a>
                        <a className="footer__enlace" href="nosotros.html">Nosotros</a>
                        <a className="footer__enlace" href="blog.html">Blog</a>
                        <a className="footer__enlace" href="tienda.html">Tienda</a>
                    </nav>
                    <p className="footer__copyright">Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    );
}
 
export default footer;