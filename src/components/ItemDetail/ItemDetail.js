import "./ItemDetail.css";
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";


const ItemDetail = ({id, name, price, img, descripcion, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity, img})
    }

    return (
        <div className="container item-detail">
            <div className="row">
                <div className="col-sm-8 item-image">
                    <img src={img[0]} alt={name} />
                    <img src={img[1]} alt={name} />
                    <img src={img[2]} alt={name} />
                </div>
                <div className="col-sm-4 text-left">

                    <div className="item-name">
                        <h1>- {name} -</h1> 
                    </div>
                    <div className="item-price">
                        <h2>$ {DecimalStyle(price)}</h2>
                    </div>              
                    <div className="item-description">
                        <p>{descripcion}</p>
                    </div>
                    { quantity > 0  
                    ? <Link to='/cart'>Finalizar compra</Link> 
                    : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProduct(id)?.quantity}/>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;