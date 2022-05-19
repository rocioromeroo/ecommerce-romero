const Button = (props) => {
    return (
        <button onClick={props.handleClick} style={{color:props.color, border:"0px", backgroundColor:"transparent", fontSize:props.size}} >{props.label}</button>
    )
}

export default Button;