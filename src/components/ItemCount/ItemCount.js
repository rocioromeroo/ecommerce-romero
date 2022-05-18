import { useState } from "react";

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
        <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={decrement}>-</button>
            <h1> {count} </h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default CountItem;



