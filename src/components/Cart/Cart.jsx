
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX, faMinus, faPlus,} from '@fortawesome/free-solid-svg-icons';
import "./CartStyle.css";
import { useCartContext } from './CartContext';


const Cart = ({product}) => {
    const { removeProduct, clearCart, totalPrice } = useCartContext();
    return ( 
        <>
        <div className="panel">
                <>
                <div className="item carro__item">
                    <div className="item__imagen">
                        <img src={product.image} alt="imagen guitarra"/>
                    </div>
                    <div className="item__contenido">
                        <p className="item__nombre item">{product.title}</p>
                        <div className="botones carro__botones">
                            <i><FontAwesomeIcon icon={faMinus} onclick={() => product(product.quantity, -1)}/></i>
                            <div className="cantidad item">{product.quantity}</div>
                            <i><FontAwesomeIcon icon={faPlus} onClick={() => product(product.quantity, 1)}/></i>
                        </div>
                        <p className="item__precio item">$ {product.price}</p>
                        <h3 className= "subtotal item">$ {product.quantity * product.price}</h3>
                        <i><FontAwesomeIcon className="fas" icon={faX} onClick={() => removeProduct(product.id)}/></i>
                    </div>
                </div>
                </>
        </div> 
        <div className="total"> 
                    <div className="carro__total">
                        <div>
                            <a onClick={() => clearCart(product.id)} className="vaciar__btn" href="/">Vaciar Carro</a>
                        </div>
                        <div>
                            <h2>Total a pagar: $ {totalPrice} </h2>
                        </div>
                    </div>    
        </div>        
    </>   
     );
}
 
export default Cart;
