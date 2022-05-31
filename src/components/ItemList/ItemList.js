import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({products}) => {
    return (
        <div className="row">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
            {products.map(prod => <ItemDetail key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;