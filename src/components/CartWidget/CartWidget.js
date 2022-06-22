import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from "react-router-dom";

const CartWidget = (props) => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    if (getQuantity() !== 0){
        return (
            <div className="container">
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} style={{color: props.color, fontSize: props.size}}/></Link>
                <div style={{paddingLeft: "5px"}}>
                    {quantity}
                </div>
            </div>
        )
    }    
}

export default CartWidget;