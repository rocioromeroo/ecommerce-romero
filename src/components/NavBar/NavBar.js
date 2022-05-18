import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="/"><img src="./images/logo.png" alt="logo" width="90px"></img></a>
                </div>
                <div className="categorias">
                    <ul>
                        <li><a href="/">ZAPATILLAS</a></li>
                        <li><a href="/">REMERAS</a></li>
                        <li><a href="/">PANTALONES</a></li>
                    </ul>
                    
                </div>
                <div className="cart-widget">
                    <CartWidget color="#fff" size= "22px"/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;