import Item from "../Item/Item";

const ItemListContainer = (props) => {
    return (
        <div className="container product-list">
            <div className="row">
                <div className="col-sm-3">
                    <Item itemName="Olivia" stock= "5" image= "/images/logo.png" />
                </div>
                <div className="col-sm-3">
                    <Item itemName="Sofia" stock= "8" image= "/images/logo.png" />
                </div>
                <div className="col-sm-3">
                    <Item itemName="Clara" stock= "2" image= "/images/logo.png" />
                </div>
                <div className="col-sm-3">
                    <Item itemName="Flor" stock= "11" image= "/images/logo.png" />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;