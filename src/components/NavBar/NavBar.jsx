import CartWidget from "../CartWidGets/CartWidget";
import { Link} from "react-router-dom";
import './styles.css';

const NavBar = () => {
    return  (
    <>
        <nav className="navbar navbar-expand-lg bg-light d-flex header">
            <div className="container-fluid">
                <Link to={"/"}>
                    <img src="/img/logo.svg" alt="Imagen Logo"  className="d-inline-block align-text-top header__logo" /> 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav navegacion">
                    <li className="nav-item navegacion__enlace">
                    <a className="nav-link active text-white" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li className="nav-item navegacion__enlace">
                    <Link to={"/nosotros"}>    
                        <a className="nav-link text-white" href="/">Nosotros</a>
                    </Link>
                    </li>
                    <li className="nav-item navegacion__enlace">
                    <Link to={"/blog"}>
                        <a className="nav-link text-white" href="/">Blog</a>
                    </Link>
                    </li>
                    <li className="nav-item navegacion__enlace">
                    <Link to={"/tienda"}>
                        <a className="nav-link text-white" href="/">Tienda</a>
                    </Link>
                    </li>
                </ul>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    </>
    );
};

export default NavBar;
