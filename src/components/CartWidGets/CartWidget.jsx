import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../Cart/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
      <div className="car">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-widget" />
        </Link>
        <h3 className="amount">
          <span>{totalProducts() || ""}</span>
        </h3>
      </div>
    </>
  );
};

export default CartWidget;
