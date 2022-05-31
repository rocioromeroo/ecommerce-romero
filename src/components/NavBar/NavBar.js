import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
        <nav className="navbar static-top">
            <div className="container">
                <h2>BY OLIVIA.</h2>
                <div className="categorias">
                    <ul>
                        <li><a href="/">TEXANAS</a></li>
                        <li><a href="/">BORCEGOS</a></li>
                        <li><a href="/">FLATS</a></li>
                    </ul>
                </div>
                <div className="cart-widget">
                    <CartWidget color="#000" size= "22px"/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;