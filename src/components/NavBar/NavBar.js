import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
        <nav className="navbar" style={{marginBottom: "2%"}}>
            <div className="container">
                <Logo />
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