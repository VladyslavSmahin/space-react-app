import './style.scss'
import CapabilitiesArrow from "../arrow/index.jsx";

const items = [
    {
        imgPath: '/images/ServiceIcon.png',
        text: 'Social Media Marketing'
    },
    {
        imgPath: '/images/ServiceIcon-1.png',
        text: 'Influencer Campaigns'
    },
    {
        imgPath: '/images/ServiceIcon-2.png',
        text: 'Collaborations & Acquisition Marketing'
    },
    {
        imgPath: '/images/ServiceIcon-3.png',
        text: 'Alpha Calls'
    },
    {
        imgPath: '/images/ServiceIcon-4.png',
        text: 'PPC Marketing'
    },
    {
        imgPath: '/images/ServiceIcon-5.png',
        text: 'Strategy & Advisory'
    },
    {
        imgPath: '/images/ServiceIcon-6.png',
        text: 'Discord Growth'
    },
    {
        imgPath: '/images/ServiceIcon-7.png',
        text: 'Copywriting'
    },
    {
        imgPath: '/images/ServiceIcon-8.png',
        text: 'Twitter Space Packages & Hosting'
    },
    {
        imgPath: '/images/ServiceIcon-9.png',
        text: 'Development'
    },
    {
        imgPath: '/images/ServiceIcon-10.png',
        text: 'Graphic Design & Digital Illustration'
    },
    {
        imgPath: '/images/ServiceIcon-11.png',
        text: 'B2B CAMPAIGNS'
    },
]

function OurServiceList() {

    return (
        <div className="serviceList">
            <div className='serviceListHeaderContainer'>
                <p>Our service list:</p>
                <div className='arrowContainer'>
                    <CapabilitiesArrow/>
                    <CapabilitiesArrow/>
                    <CapabilitiesArrow/>
                </div>
            </div>
            <div className="serviceListItemsContainer">
                {items.map((item, index) => (
                    <div key={index} className="serviceItem">
                        <img src={item.imgPath} alt={item.text} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServiceList