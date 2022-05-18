import Item from "../Item/Item";

const ItemListContainer = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Item itemName="OLIVIA" stock= "5" image= "/images/logo.png" />
                <Item itemName="SOFIA" stock= "8" image= "/images/logo.png" />
            </div>
        </div>
    )
}

export default ItemListContainer;