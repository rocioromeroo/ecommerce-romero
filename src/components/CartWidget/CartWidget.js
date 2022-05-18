import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidget = (props) => {
    return (
        <div className="container">
            <FontAwesomeIcon icon={faCartShopping} style={{color: props.color, fontSize: props.size}}/>
            <div style={{paddingLeft: "5px"}}>
                <p style={{color: props.color, fontSize: props.size, margin:"0px"}}>5</p>
            </div>
        </div>
    )
}

export default CartWidget;