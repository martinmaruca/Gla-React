import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./CartStyle.css";
import { useCartContext } from "./CartContext";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const showAlert = () => {
  swal({
    title: "No hay productos en el carrito",
    text: "Por favor, agrega productos al carrito",
    icon: "warning",
    button: "Aceptar",
  });
};

const Cart = ({ product }) => {
  const { cart, removeProduct, clearCart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        {showAlert()}
        <div className="cart">
          <Link className="tienda__btn" to="/tienda">
            {" "}
            ir a la tienda
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="panel">
          {cart.map((product) => {
            return (
              <div className="item carro__item" key={cart}>
                <div className="item__imagen">
                  <img src={product.item.image} alt="imagen guitarra" />
                </div>
                <div className="item__contenido">
                  <p className="item__nombre item">{product.item.title}</p>
                  <p className="cantidad item">Cantidad:{product.quantity}</p>
                  <p className="item__precio item">$ {product.item.price}</p>
                  <h3 className="subtotal item">
                    $ {product.quantity * product.item.price}
                  </h3>
                  <i>
                    <FontAwesomeIcon
                      className="fas"
                      icon={faX}
                      onClick={() => removeProduct(product.item.id)}
                    />
                  </i>
                </div>
              </div>
            );
          })}
          ;
        </div>
        <div className="total">
          <div className="carro__total">
            <div className="btn-cart">
              <a
                onClick={() => clearCart(product)}
                className="vaciar__btn"
                href="/"
              >
                Vaciar Carro
              </a>
              <Link className="vaciar__btn" to="/Order">
                Procesar Compra
              </Link>
            </div>
            <div className="total__pagar">
              <h2>Total a pagar: $ {totalPrice()} </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
