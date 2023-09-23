import logo from '../assets/logo.png';

function Header() {

    return (
        <header className="header-container">
            <div className="main-header">
            <a href="#">
                <img
                src={logo}
                alt="Double Pump Logo"
                className="header-logo"
                />
            </a>
            <ul className="header-nav" id="headerMenu">
                <button className="quit-menu-btn" id="quitMenuBtn">
                <span className="material-symbols-outlined">close</span>
                </button>
                <a href="#">
                <li>NEWS</li>
                </a>
                <a href="#">
                <li>HBL</li>
                </a>
                <a href="#">
                <li>UBA</li>
                </a>
                <a href="#">
                <li>WSBL</li>
                </a>
            </ul>
            <buttom className="mobile-menu" id="mobileMenuBtn">
                <span className="material-symbols-outlined">menu</span>
            </buttom>
            </div>
        </header>
    )
}

export default Header;