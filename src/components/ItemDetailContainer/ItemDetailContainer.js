import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
// import "./ItemDetailtContainer.css";

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductsById("2").then(response => { 
            setProduct(response)
        })
    }, [])
    
    return (
        <div className="container">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;