import React, { useState } from "react";
import "./order.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../Cart/CartContext";
import swal from "sweetalert";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const errorAlert = () => {
  swal({
    title: "Su pedido ha sido procesado",
    text: "Sera despachado en un plazo de 24 horas",
    icon: "success",
    button: "Aceptar",
  });
};

const OrderInfo = () => {
  const { cart, totalPrice } = useCartContext();

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    localidad: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleImputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const order = {
    buyer: {
      nombre: "Martin",
      apellido: "Maruca",
      email: "mmmmm@gmail.com",
      telefono: "123456789",
      direccion: "Calle falsa 123",
      localidad: "Ciudad falsa",
    },
    products: cart.map((product) => ({
      id: product.item.id,
      title: product.item.title,
      price: product.item.price,
      quantity: product.quantity,
    })),

    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order);
  };

  return (
    <>
      <div>
        <p className="productos__heading">Finalizar Compra</p>
      </div>
      <div className="order-info">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input
              name="nombre"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="nombre"
            />
            <label htmlFor="">Apellido</label>
            <input
              name="apellido"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="apellido"
            />
            <label htmlFor="">Telefono</label>
            <input
              name="telefono"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="telefono"
            />
            <label htmlFor="">E-mail</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="email"
            />
            <label htmlFor="">Dirección</label>
            <input
              name="direccion"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="direccion"
            />
            <label htmlFor="">Localidad</label>
            <input
              name="localidad"
              type="text"
              className="form-control"
              onChange={handleImputChange}
              id="localidad"
            />
            <Link
              onClick={(errorAlert, handleClick)}
              to="/"
              className="producto__enlace"
            >
              Enviar Pedido
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderInfo;
