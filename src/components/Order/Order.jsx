import React, { useState } from "react";
import "./order.css";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../Cart/CartContext";
import swal from "sweetalert";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const successAlert = (id) =>
  swal({
    title: "Su pedido ha sido procesado",
    text: `Sera despachado en un plazo de 24 horas, 

    Su ID de compra es: ${id}`,
    icon: "success",
    button: "Aceptar",
  });
const OrderInfo = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    localidad: "",
  });

  const handleInputChange = ({ currentTarget }) => {
    setForm({ ...form, [currentTarget.name]: currentTarget.value });
  };

  const handleClick = () => {
    const order = {
      buyer: {
        nombre: { nombre: form.nombre },
        apellido: { apellido: form.apellido },
        email: { email: form.email },
        telefono: { telefono: form.telefono },
        direccion: { direccion: form.direccion },
        localidad: { localidad: form.localidad },
      },
      products: cart.map((product) => ({
        id: product.item.id,
        title: product.item.title,
        price: product.item.price,
        quantity: product.quantity,
      })),

      total: totalPrice(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => {
      successAlert(res.id).then(() => {
        clearCart();
        navigate("/");
      });
    });
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
              onChange={handleInputChange}
              id="nombre"
            />
            <label htmlFor="">Apellido</label>
            <input
              name="apellido"
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="apellido"
            />
            <label htmlFor="">Telefono</label>
            <input
              name="telefono"
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="telefono"
            />
            <label htmlFor="">E-mail</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="email"
            />
            <label htmlFor="">Dirección</label>
            <input
              name="direccion"
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="direccion"
            />
            <label htmlFor="">Localidad</label>
            <input
              name="localidad"
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="localidad"
            />
            <Link onClick={handleClick} to="/" className="producto__enlace">
              Enviar Pedido
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderInfo;
