import CartWidget from "../CartWidGets/CartWidget";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="header__contenedor">
          <div className="header__barra">
            <Link to="/">
              <img
                className="header__logo"
                src="../img/logo.svg"
                alt="imagen logo"
              />
            </Link>

            <nav className="navegacion">
              <Link className="navegacion__enlace activo" to="/">
                Inicio
              </Link>
              <Link className="navegacion__enlace" to="/nosotros">
                Nosotros
              </Link>
              <Link className="navegacion__enlace" to="/blog">
                Blog
              </Link>
              <div className="dropdown">
                <Link className="navegacion__enlace" to="/tienda">
                  Tienda
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="nav_enlace" to="/tienda">
                      Productos
                    </Link>
                  </li>
                  <li>
                    <Link className="nav_enlace" to="forma/lespaul">
                      Les Paul
                    </Link>
                  </li>
                  <li>
                    <Link className="nav_enlace" to="forma/soloist">
                      Soloist
                    </Link>
                  </li>
                </ul>
              </div>
              <CartWidget />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
