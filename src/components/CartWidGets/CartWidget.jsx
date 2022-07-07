import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    const amount = 4;
    return (
        <>
          <FontAwesomeIcon icon={faCartShopping} className="cart-widget"/>
          {amount}
        </>
      );
}
 
export default CartWidget;