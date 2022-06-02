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
                        <Link to="/category/texanas"><li><a href="/">TEXANAS</a></li></Link>
                        <Link to="/category/borcegos"><li><a href="/">BORCEGOS</a></li></Link>
                        <Link to="/category/botas"><li><a href="/">BOTAS</a></li></Link>
                        <Link to="/category/flats"><li><a href="/">FLATS</a></li></Link>
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