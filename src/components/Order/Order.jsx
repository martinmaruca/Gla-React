import React, { useState } from "react";
import "./order.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../Cart/CartContext";
import swal from "sweetalert";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const successAlert = () => {
  swal({
    title: "Su pedido ha sido procesado",
    text: "Sera despachado en un plazo de 24 horas",
    icon: "success",
    button: "Aceptar",
  });
};

const OrderInfo = () => {
  const { cart, totalPrice } = useCartContext();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const onChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const onChangeDireccion = (e) => {
    setDireccion(e.target.value);
  };
  const onChangeLocalidad = (e) => {
    setLocalidad(e.target.value);
  };

  const order = {
    buyer: {
      nombre: { nombre },
      apellido: { apellido },
      email: { email },
      telefono: { telefono },
      direccion: { direccion },
      localidad: { localidad },
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
              onChange={onChangeNombre}
              id="nombre"
            />
            <label htmlFor="">Apellido</label>
            <input
              name="apellido"
              type="text"
              className="form-control"
              onChange={onChangeApellido}
              id="apellido"
            />
            <label htmlFor="">Telefono</label>
            <input
              name="telefono"
              type="text"
              className="form-control"
              onChange={onChangeEmail}
              id="telefono"
            />
            <label htmlFor="">E-mail</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={onChangeTelefono}
              id="email"
            />
            <label htmlFor="">Dirección</label>
            <input
              name="direccion"
              type="text"
              className="form-control"
              onChange={onChangeDireccion}
              id="direccion"
            />
            <label htmlFor="">Localidad</label>
            <input
              name="localidad"
              type="text"
              className="form-control"
              onChange={onChangeLocalidad}
              id="localidad"
            />
            <Link
              onClick={() => {
                successAlert();
                handleClick();
              }}
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
