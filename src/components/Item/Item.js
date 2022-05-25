import "./Item.css"
// import ItemCount from "../ItemCount/ItemCount";
import DecimalStyle from "../DecimalStyle/DecimalStyle";
import ButtonTransparent from "../ButtonTransparent/ButtonTransparent"

const Item = ({name, price, img, stock}) => {
    return (
        <div className="col-sm-3">
            <div className="product-information">
                <div className="image-product">
                    <img src={img} alt={name} />
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
                    <ButtonTransparent label="VER MÁS" />
                </div>

            </div>
        </div>
    )
}

export default Item;