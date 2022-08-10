import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Cart/CartContext";

const TiendaCards = ({ items }) => {
  const [count, setCount] = useState(0);
  const { addProduct } = useCartContext();

  const handleOnAdd = (count) => {
    setCount(count);
    addProduct(items, count);
  };

  return (
    <>
      <main className="productos productos__contenedor">
        <div className="productos__grid">
          {items.map((item) => {
            const { title, price, description, image, stock } = item;
            return (
              <div className="producto">
                <img
                  className="producto__imagen"
                  src={image}
                  alt="imagen guitarra"
                />

                <div className="producto__contenido">
                  <h3 className="producto__nombre">{title}</h3>
                  <p className="producto__descripcion">{description}</p>
                  <p className="producto__precio">$ {price}</p>
                  <div className="boton__card">
                    {count === 0 ? (
                      <ItemCount
                        onAdd={handleOnAdd}
                        stock={stock}
                        initial={0}
                      />
                    ) : (
                      <h3>Se agregaron {count} productos al carrito </h3>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default TiendaCards;
