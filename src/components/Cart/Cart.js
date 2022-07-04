import { useContext } from "react"
import CartContext from "../../context/CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import "./Cart.css"
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";


const Cart = () => {

    const { cart, removeItem, getTotal, getQuantity, clearCart } = useContext(CartContext)


    if (getQuantity() === 0){
        return (
            <div className="empty-cart">
                <h3>No hay productos en el carrito</h3>
                <p><Link to="/">Seguí navegando</Link></p>
            </div>
        )
    }
    
    return(
        <div>
            <div>
                {cart.map(prod => {
                    return(
                        <div className="container text-center">
                            <div className="cart-item" key={prod.id} style={{ display: 'flex'}}>
                                <img src={prod.img} alt={prod.name} />
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

                <div className="container">
                    <div className="row">
                        <div className="cart-total col-sm-10 text-right">
                            <p>Total: ${DecimalStyle(getTotal())} </p>
                        </div>
                        <div className="clear-cart col-sm-2 text-left">
                            <button onClick={() => clearCart(cart)}>Borrar Carrito</button>
                        </div>
                    </div>
                    <div className="clear-cart col-sm-11 text-right">
                        
                    </div>
                </div>
            </div>
            <ContactForm></ContactForm>
        </div>
        

    )
}

export default Cart