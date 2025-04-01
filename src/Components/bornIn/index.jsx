import Header from "./header/index.jsx";
import Button from "./header/button/index.jsx";
import Brands from "./brands/index.jsx";
import Logo from "./header/logo/index.jsx";
import './style.scss'

function BornIn() {

    return (
        <div>
            <Header/>
            <div className='bornInContainer container'>
                <div className='bornIn'>
                    <div>
                        <h1><span className='h1Born'>Born</span> in Web2
                            <span className='h1Built'>Built</span> for Web3</h1>
                        <p>We know building and growing a community can be tough. We're here to alleviate all the trial & error. With our expertise, you will confidently soar into growth. Say goodbye to "flying blind.”</p>
                    </div>
                    <Button text="book now" className="born-in-button"/>
                    <Brands className="born-in-brands"/>
                    <div>
                        <span>Going the extra mile</span>
                           sees no setbacks when you’re flying
                           with<Logo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BornIn