import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams ()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef).then(response => {
            console.log(response.docs)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        // if (!categoryId) {
        //     getProducts().then(response => {
        //         setProducts(response)
        //     }).catch(error => {
        //         console.log("error")
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // } else {
        //     getProductsByCategory(categoryId).then(response => {
        //         setProducts(response)
        //     }).catch(error => {
        //         console.log("error")
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // }
    }, [categoryId])

    if(loading){
        return (
            <Loader />
        )
    }

    return (
        <div className="container item-list">
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;