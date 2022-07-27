/* import React, {useState, useEffect} from "react";


const Cart = ({cart, setCart, handleChange}) => {
    const[price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter(item => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map ((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    }); 
    
    return ( 
        <div className="panel">
            {cart.map(item => (
                <div className="item carro__item">
                    <div className="item__imagen">
                        <img src={item.imge} alt="imagen guitarra"/>
                    </div>
                    <div className="item__contenido">
                        <p className="item__nombre item">{item.title}</p>
                        <div className="botones carro__botones">
                            <i onclick={() => handleChange(item, -1)}>-</i>
                            <div className="cantidad item">producto</div>
                            <i onclick={() => handleChange(item, 1)}>+</i> 
                        </div>
                        <p className="item__precio item">$ {item.precio}</p>
                        <h3 className= "subtotal item">$ producto * precio</h3>
                        <i onclick={() => handleRemove(item.id)} >x</i>
                    </div>
                </div>
                ))};
                <div className="carro__total">
                    <div>
                        <a onclick={() => handleRemove(item.id)} className="vaciar__btn" href="/">Vaciar Carro</a>
                    </div>
                    <div>
                        <h2>Total a pagar: $ {price}</h2>
                    </div>
                </div>    
        </div>    
    );
};

export default Cart;    */ 
 
