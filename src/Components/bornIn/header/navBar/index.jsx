import './style.scss';
import Button from "../button/index.jsx";

function NavBar({className = ""}) {


return (
    <div className='navbarContainer'>
        <nav className='navbar'>
            <ul className='navbar-ul'>
                <li className='nav-item active'><a href='#'>servises</a></li>
                <li className='nav-item active'><a href='#'>network</a></li>
                <li className='nav-item active'><a href='#'>team</a></li>
            </ul>
        </nav>
        <img src='/images/call_btn.png' className='navbarBtn479' alt="logo" />
    </div>
);
}

export default NavBar;
