import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../Cart/CartContext';

const CartWidget = () => {
    const product = useCartContext();
    const amount = 0;
    return (    
    <>
      {product.length === 0 ? ( <></> ) : (
          <div className="car">
            <FontAwesomeIcon icon={faCartShopping} className="cart-widget"/>
            <h3 className='amount'>{amount}</h3>
          </div>
        )}
    </>  
      )
}
 
export default CartWidget;