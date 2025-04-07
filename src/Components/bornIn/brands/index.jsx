import './style.scss'
import Carousel from "../../network/carousel/index.jsx";

function Brands({className = ''}) {
    const links = [
        {path: '/images/partnerCard.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-1.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-2.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-3.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-4.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-5.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-6.svg', title: 'Partner Card', url: '#'},
        {path: '/images/partnerCard-7.svg', title: 'Partner Card', url: '#'},
    ];

    return (
        <div className='brandContainer'>
            <div className={`brand ${className}`}>
                <h4 className='brandsTitle'>Some Of The Brands <span>That Trust Us!</span></h4>
                <div className="brandsImagesContainer">
                    {links.map((image, index) => (
                        <img
                            key={index}
                            className="partnerCard"
                            src={image.path}
                            alt={image.title}  // присваиваем title как alt
                        />
                    ))}
                </div>
            </div>
            <h4 className='brandsTitle brandsTitle1079'>Some Of The Brands <span>That Trust Us!</span></h4>
            <Carousel links={links} className='brandCarousel1079' />
        </div>
    );
}

export default Brands;
