import { useState } from 'react';
import logo from '../assets/logo.png';


function Header() {
    const navBarBtn = [ "NEWS", "HBL", "UBA", "WSBL" ];

    const [styleMenu, setStlyeMenu] = useState(null);
    const [styleCloseBtn, setStlyeCloseBtn] = useState(null);
    const handleClickMenu = () => {
        setStlyeMenu({display: "flex"})
        setStlyeCloseBtn({display: "flex"})
    }
    const handleClickClose = () => {
        setStlyeMenu(null)
        setStlyeCloseBtn(null)
    }

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
            <ul className="header-nav" id="headerMenu" style={styleMenu} onClick={handleClickClose}>
                <button className="quit-menu-btn" id="quitMenuBtn" style={styleCloseBtn}>
                <span className="material-symbols-outlined">close</span>
                </button>
                {navBarBtn.map((btn, id) => (<a href="#" key={id}><li>{btn}</li></a>))}
            </ul>
            <buttom className="mobile-menu" id="mobileMenuBtn" onClick={handleClickMenu}>
                <span className="material-symbols-outlined">menu</span>
            </buttom>
            </div>
        </header>
    )
}

export default Header;