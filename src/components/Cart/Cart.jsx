import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./CartStyle.css";
import { useCartContext } from "./CartContext";
import swal from "sweetalert";
import { Link } from "react-router-dom";
/* import { addDoc, collection, getFirestore } from "firebase/firestore"; */

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
              <div className="item carro__item">
                <div className="item__imagen">
                  <img src={product.item.image} alt="imagen guitarra" />
                </div>
                <div className="item__contenido">
                  <p className="item__nombre item">{product.item.title}</p>
                  <div className="botones carro__botones">
                    <i>
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => product(product.quantity, -1)}
                      />
                    </i>
                    <div className="cantidad item">{product.quantity}</div>
                    <i>
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => product(product.quantity, 1)}
                      />
                    </i>
                  </div>
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
            <div>
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
            <div>
              <h2>Total a pagar: $ {totalPrice()} </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;

/*   const order = {
    buyer: {
      name: "martin",
      lastname: "matuca",
      email: "martin@gmail.com",
      phone: "2213892444",
      address: "45 4567 la plata",
    },
    products: Cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),

    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order);
  }; */
