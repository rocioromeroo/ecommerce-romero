import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
    return (
        <div className="item-products" style={{padding: "10%", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} >

            <div className="image">
                <img src= {props.image} alt={props.itemName} style={{padding:"10%"}} />
            </div>

            <div className="title">
                <h3>- {props.itemName} -</h3>
            </div>

            <div className="stock">
                <p>Stock disponible: {props.stock}</p>
            </div>
            <ItemCount stock= {props.stock} />
        </div>
    )
}

export default Item;