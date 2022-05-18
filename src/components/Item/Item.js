import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
    return (
        <div style={{padding: "5%"}} >
            <div className="title">
                <h1>{props.itemName}</h1>
            </div>
            <div className="image">
                <img src= {props.image} alt={props.itemName} />
            </div>
            <div className="stock">
                <p>Stock disponible: {props.stock}</p>
            </div>
            <ItemCount stock= {props.stock} />
        </div>
    )
}

export default Item;