import { useState, useEffect } from "react";
// import { getProductsById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase";

const ItemDetailContainer = ({id}) => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    const {productId} = useParams()


    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, "products", productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProductsById(productId).then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     console.log("error")
        // }).finally(() => {
        //     setLoading(false)
        // })
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