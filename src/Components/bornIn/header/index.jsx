import Button from "./button/index.jsx";
import './style.scss'
import Logo from "./logo/index.jsx";
function Header() {

    return (
        <div className="header container">
            <Logo/>
            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='nav-item active'>servises</li>
                    <li className='nav-item active'>network</li>
                    <li className='nav-item active'>team</li>
                </ul>
            </nav>
            <Button text="book now"/>
        </div>
    )
}

export default Header