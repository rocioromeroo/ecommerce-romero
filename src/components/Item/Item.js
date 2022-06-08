import "./Item.css"
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import { Link } from "react-router-dom";

const Item = ({id, name, price, img, stock}) => {
    return (
        <div className="col-sm-3">
            <div className="product-information">
                <div className="image-product">
                    <img src={img[0]} alt={name} />
                </div>

                <div className="title">
                    <h3>- {name} -</h3>
                </div>

                <div className="stock">
                    <p>Stock disponible: {stock}</p>
                </div>

                <div className="price">
                    <h3>$ {DecimalStyle(price)}</h3>
                </div>

                {/* <ItemCount stock= {stock} /> */}

                <div className="ver-mas">
                    <Link to={`/detail/${id}`}> VER MÁS </Link>
                </div>

            </div>
        </div>
    )
}

export default Item;