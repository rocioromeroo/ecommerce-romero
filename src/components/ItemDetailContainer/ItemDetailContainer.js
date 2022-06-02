import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemDetailContainer = ({id}) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    const {productId} = useParams()


    useEffect(() => {
        setLoading(true)
        getProductsById(productId).then(response => { 
            setProduct(response)
        }).catch(error => {
            console.log("error")
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading){
        return (
            <Loader />
        ) 
    }
    
    return (
        <div className="container">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;