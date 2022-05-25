import "./ItemCount.css"
import { useState } from "react";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent";

const CountItem = (props) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }

    const increment = () => {
        if (count < props.stock){
            setCount((count) => count + 1)
        }
    }

    return (
        <div className="count">
            <div className="col-auto">
                <ButtonTransparent handleClick={decrement} label="-" color="#fff" size="20px" />
            </div>
            <h3 style={{margin:"0", color: "#fff", fontWeight:"lighter"}}> {count} </h3>
            <div className="col-auto">
                <ButtonTransparent handleClick={increment} label="+" color="#fff" size="20px" />
            </div>
        </div>
    )
}

export default CountItem;



