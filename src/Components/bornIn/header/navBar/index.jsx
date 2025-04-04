import './style.scss';
import Button from "../button/index.jsx";

function NavBar({className = ""}) {


return (
    <div className={`navbarContainer ${className}`}>
        <nav className={`navbar ${className}`}>
            <ul className={`navbar-ul ${className}`}>
                <li className={`nav-item active ${className}`}><a href='#servises'>servises</a></li>
                <li className={`nav-item active ${className}`}><a href='#network'>network</a></li>
                <li className={`nav-item active ${className}`}><a href='#'>team</a></li>
            </ul>
        </nav>
        <img src='/images/call_btn.png' className={`navbarBtn479 ${className}`} alt="logo" />
    </div>
);
}

export default NavBar;
