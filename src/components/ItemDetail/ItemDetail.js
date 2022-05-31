import "./ItemDetail.css"
// import ItemCount from "../ItemCount/ItemCount";
import DecimalStyle from "../DecimalStyle/DecimalStyle";


const ItemDetail = ({id, name, price, img, descripcion}) => {
    return (
        <div className="container item-detail">
            <div className="row">
                <div className="col-sm-8 item-image">
                    <img src={img} alt="" />
                </div>
                <div className="col-sm-4 text-left">
                    <div className="item-name">
                        <h1>- {name} -</h1> 
                    </div>
                    <div className="item-price">
                        <h2>$ {DecimalStyle(price)}</h2>
                    </div>              
                    <div className="item-description">
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;