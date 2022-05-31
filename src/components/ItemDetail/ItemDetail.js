import "./ItemDetail.css"
// import ItemCount from "../ItemCount/ItemCount";
import DecimalStyle from "../DecimalStyle/DecimalStyle";


const ItemDetail = ({id, name, price, img, stock, descripcion}) => {
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1> 
            <p>$ {DecimalStyle(price)}</p>
        </div>
    )
}

export default ItemDetail;