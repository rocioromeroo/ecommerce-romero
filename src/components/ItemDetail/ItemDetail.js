import "./ItemDetail.css"
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import { useState } from 'react'
import { Link } from 'react-router-dom'


const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, name, price, img, descripcion, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        console.log(count)
        setQuantity(count)
    }

    return (
        <div className="container item-detail">
            <div className="row">
                <div className="col-sm-8 item-image">
                    <img src={img} alt="" />
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
                    { quantity > 0  ? <Link to='/cart'>Finalizar compra</Link> : <InputCount stock={stock} onConfirm={handleOnAdd}/>}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;