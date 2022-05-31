import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    })
    
    return (
        <div className="container item-list">
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;