import './style.scss'
import CardName from "../cardName/index.jsx";
import Button from "../bornIn/header/button/index.jsx";
import Carousel from "./carousel/index.jsx";
import imgBg from "/images/services_bg.png"
function Network() {

    const links = [
        { path: "/images/networkCard.svg",url: '#', title: "Ссылка 1" },
        { path: "/images/networkCard-1.svg",url: '#', title: "Ссылка 2" },
        { path: "/images/networkCard-2.svg",url: '#', title: "Ссылка 3" },
        { path: "/images/networkCard-3.svg",url: '#', title: "Ссылка 4" },
        { path: "/images/networkCard-4.svg",url: '#', title: "Ссылка 5" },
        { path: "/images/networkCard-5.svg",url: '#', title: "Ссылка 6" },
        { path: "/images/networkCard-6.svg",url: '#', title: "Ссылка 7" },
        { path: "/images/networkCard-7.svg",url: '#', title: "Ссылка 8" },
        { path: "/images/networkCard-8.svg",url: '#', title: "Ссылка 9" },
        { path: "/images/networkCard-9.svg",url: '#', title: "Ссылка 10" },
        { path: "/images/networkCard-10.svg",url: '#', title: "Ссылка 11" },

    ];

    return (
        <div className='networkContainer container'>
            <div className='network' id='network'>
                <div className='networkMainContentContainer'>
                    <div className='networkMainContent'>
                        <CardName text='network' className='networkCard'/>
                        <h3 className='networkTitle'>Our Network, Is Your Network</h3>
                        <p className='networkText'>Our network Community Bluprint™ is proven, the data is undeniable. When
                            you provide founders with the tools to succeed, a dedicated growth team, and the largest
                            sold-out network in the industry, success follows. What are you waiting for?</p>
                        <Button text='book now' className=''/>
                    </div>
                </div>
                <div className='networkCarouselContainer'>
                        <Carousel links={links} />
                </div>
            </div>
        </div>
    )
}

export default Network