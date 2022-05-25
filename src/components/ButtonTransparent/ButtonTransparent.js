import "./ButtonTransparent.css"

const ButtonTransparent = (props) => {
    return (
        <button onClick={props.handleClick} style={{color:props.color, fontSize:props.size}}>{props.label}</button>
    )
}

export default ButtonTransparent;