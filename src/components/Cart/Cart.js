import { useContext } from "react"
import CartContext from "../../context/CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import "./Cart.css"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map(prod => {
                    return(
                        <div className="container text-center">
                            <div className="cart-item" key={prod.id} style={{ display: 'flex'}}>
                                <img src={prod.img[0]} alt={prod.name} />
                                <div className="cart-item-name">
                                    <p>- {prod.name}</p>
                                </div>
                                <div>
                                    <p>Cantidad: {prod.quantity}</p></div>
                                <div>
                                    <p>Precio: ${DecimalStyle(prod.price)}</p>
                                </div>
                                <div>
                                    <p>Subtotal: ${DecimalStyle(prod.price * prod.quantity)}</p>
                                </div>
                                <div>
                                    <button onClick={() => removeItem(prod.id)}><FontAwesomeIcon icon={faTrash}/></button>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart