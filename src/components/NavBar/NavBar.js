import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>BY OLIVIA</h1>
            </div>
            <div className="categorias">
                <ul>
                    <li><a href="/">ZAPATILLAS</a></li>
                    <li><a href="/">REMERAS</a></li>
                    <li><a href="/">PANTALONES</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar