import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial || 1);

  const updateCount = (value) => {
    if (value === "-" && count > 0) {
      setCount(count - 1);
    }
    if (value === "+" && count < stock) {
      setCount(count + 1);
    }
  };

  const updateConuntFromInput = (e) => {
    const value = parseInt(e.target.value);
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : value);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0 && count < stock) {
      onAdd(count);
    }
  };    
    return (  
        <>
            <div className="item-count">
                <button className="item-count__button" onClick={() => updateCount("-")}>-</button>
                <input className="item-count__input" type="number" max={stock} min={initial} value={count} onChange={updateConuntFromInput} />
                <button className="item-count__button" onClick={() => updateCount("+")}>+</button>
            </div>
            <a className="producto__enlace" href="producto.html" onClick={handleAddToCart}>
            Agregar al carrito
            </a>
        </>
    );
}
 
export default ItemCount;