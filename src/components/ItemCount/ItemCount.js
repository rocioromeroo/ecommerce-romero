import { useState } from "react";
import Button from "../Button/ButtonTransparent";

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
        <div style={{margin:"10%", display: "flex", justifyContent: "center", backgroundColor:"rgb(224, 210, 210)", borderRadius:"20px"}}>
            <div className="col-auto">
                <Button handleClick={decrement} label="-" color="#fff" size="20px"></Button>
            </div>
            <h3 style={{margin:"0", color: "#fff"}}> {count} </h3>
            <div className="col-auto">
                <Button handleClick={increment} label="+" color="#fff" size="20px"></Button>
            </div>
        </div>
    )
}

export default CountItem;



