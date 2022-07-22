import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const amount = 4;
    return (
        <>
          <div className="car">
            <FontAwesomeIcon icon={faCartShopping} className="cart-widget"/>
            <h3 className='amount'>{amount}</h3>
          </div>
        </>
      );
}
 
export default CartWidget;