import "./ItemCount.css"
import { useState } from "react";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";

const ItemCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount((count) => count + 1)
        }
    }

    return (
        <div>
            <div className="count">
                <div className="col-auto">
                    <ButtonTransparent handleClick={decrement} label="-" color="#fff" size="20px" />
                </div>
                <h3 style={{margin:"0", color: "#fff", fontWeight:"lighter"}}> {count} </h3>
                <div className="col-auto">
                    <ButtonTransparent handleClick={increment} label="+" color="#fff" size="20px" />
                </div>
            </div>
            <div>
                <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;



