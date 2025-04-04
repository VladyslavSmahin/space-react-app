
import './style.scss';
import Logo from "./logo/index.jsx";
import { useState } from "react";
import NavBar from "./navBar/index.jsx";
import Button from "./button/index.jsx";

function Header({ className = "", onClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen(!isOpen);

        const header = document.querySelector('.header');
        const burgerMenuContent = document.querySelector('.burgerMenuContent');
        const headerContainer = document.querySelector('.headerContainer');

        if (header) header.classList.toggle('headerBurgerMenuOpen', !isOpen);
        if (burgerMenuContent) burgerMenuContent.classList.toggle('burgerMenuContentOpen', !isOpen);
        if (headerContainer) headerContainer.classList.toggle('headerContainerOpen', !isOpen);

        if (onClick) onClick(e);
    };

    return (
        <div className='headerContainer '>
            <div className={`header container ${isOpen ? "headerBurgerMenuOpen" : ""} ${className}`}>
                <Logo />
                <NavBar/>
                <Button text="book now" className='navbarBtn' />
                <button
                    className={`burgerMenuBtn ${isOpen ? "burgerMenuBtnOpen" : ""} ${className}`}
                    onClick={handleClick}
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>
            <div className='burgerMenuContent'>
                <NavBar className='burgerNav'/>
                <div className='ourSocials'>
                    <p>Check our socials:</p>
                    <div className='socialsImages'>
                        <img src='/images/SocialBtn.svg' alt='socialsImage' />
                        <img src='/images/SocialBtn-1.svg' alt='socialsImage' />
                        <img src='/images/SocialBtn-2.svg' alt='socialsImage' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
