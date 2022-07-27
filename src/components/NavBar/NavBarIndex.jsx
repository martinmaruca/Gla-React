import CartWidget from "../CartWidGets/CartWidget";
import { Link} from "react-router-dom";
import './styles.css';

const NavBarIndex = () => {
    return  (
    <>
        <header className="header">
                <div className="header__contenedor">
                    <div className="header__barra">
                        <a href="/">
                            <img className="header__logo" src="img/logo.svg" alt="imagen logo"/>
                        </a>
                        <nav className="navegacion">   
                            <Link className="navegacion__enlace activo" to="/">Inicio</Link>                       
                            <Link className="navegacion__enlace" to="/nosotros">Nosotros</Link>
                            <Link className="navegacion__enlace" to="/blog">Blog</Link>
                            <Link className="navegacion__enlace" to="/tienda">Tienda</Link>
                            <CartWidget />
                        </nav>
                    </div>

                    <div className="modelo">
                        <h1 className="modelo__nombre">Modelo VAI</h1>
                        <p className="modelo__descripcion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, dolorum voluptatem fuga illum nisi saepe, repellat laudantium accusantium doloremque harum</p>
                        <p className="modelo__precio">$399</p>
                    </div>
                </div>

                <img className="header__guitarra" src="img/header_guitarra.png" alt="imagen header guitarra"/>
        </header>
    </>
    );
};

export default NavBarIndex;