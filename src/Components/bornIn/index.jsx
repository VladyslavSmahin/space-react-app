import Header from "./header/index.jsx";
import Button from "./header/button/index.jsx";
import Brands from "./brands/index.jsx";
import Logo from "./header/logo/index.jsx";
import './style.scss'

function BornIn() {

    return (
        <div className='bornInContainer '>
            <Header/>
            <div className='bornIn container'>
                <div className='bornInTitle'>
                    <h1><span className='h1Born'>Born</span> in Web2 <br />
                        <span className='h1Built'>Built</span> for Web3
                    </h1>
                    <p>We know building and growing a community can be tough. We're here to alleviate all the trial
                        & error. With our expertise, you will confidently soar into growth. Say goodbye to "flying
                        blind.”</p>
                </div>
                <Button text="book now" className="born-in-button"/>
                <Brands className="born-in-brands"/>
                <div className='goingTheExtra'>
                    <span>Going the Extra Mile</span>
                    <span>Sees No Setbacks When You're Flying </span>
                    <span>with<img src='/images/BlushipLabel.svg' alt='BlushipLabel' className='blushipLabel'/></span>
                </div>
                <div className='goingTheExtra goingTheExtra1079'>
                    <p>Going the Extra Mile</p>
                    <p>Sees No Setbacks When You're Flying with</p>
                    <img src='/images/BlushipLabel.svg' alt='BlushipLabel' className='blushipLabel'/>
                </div>
            </div>
            <img src='/images/rocket.webp' className="bornInMainPhoto" alt="logo"/>
        </div>
    )
}

export default BornIn