import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar static-top">
            <div className="container">
                <div className="logo">
                    <Link to="/"><h2>BY OLIVIA.</h2></Link>
                </div>
                <div className="categorias">
                    <ul>
                        <li><Link to="/category/texanas">TEXANAS</Link></li>
                        <li><Link to="/category/borcegos">BORCEGOS</Link></li>
                        <li><Link to="/category/botas">BOTAS</Link></li>
                        <li><Link to="/category/flats">FLATS</Link></li>
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