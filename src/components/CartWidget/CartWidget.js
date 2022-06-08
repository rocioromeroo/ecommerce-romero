import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = (props) => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className="container">
            <FontAwesomeIcon icon={faCartShopping} style={{color: props.color, fontSize: props.size}}/>
            <div style={{paddingLeft: "5px"}}>
                {quantity}
            </div>
        </div>
    )
}

export default CartWidget;