import { useState } from "react";

const ItemCount = ({stok = 10, initial = 0, onAdd}) => {
    const [count, setCount] = useState(initial || 1);
    const updateCount = (value) => {
        if (value === "-" && count > 0) {
            setCount(count - 1);
        }
        if (value === "+" && count < stok) {
            setCount(count + 1);
        }
    };
    const updateConuntFromInput = (e) => {
        const value = parseInt(e.target.value);
        if (value <= stok) {
            setCount(isNaN(value) ? 0 : value);
        }
    };    
    return (  
        <>
            <div className="item-count">
                <button className="item-count__button" onClick={() => updateCount("-")}>-</button>
                <input className="item-count__input" type="number" value={count} onChange={updateConuntFromInput} />
                <button className="item-count__button" onClick={() => updateCount("+")}>+</button>
            </div>
        </>
    );
}
 
export default ItemCount;