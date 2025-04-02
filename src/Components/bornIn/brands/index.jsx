import './style.scss'

function Brands({ className = '' }) {
    const images = [
        { path: '/images/partnerCard.png', title: 'Partner Card' },
        { path: '/images/partnerCard-1.png', title: 'Partner Card' },
        { path: '/images/partnerCard-2.png', title: 'Partner Card' },
        { path: '/images/partnerCard-3.png', title: 'Partner Card' },
        { path: '/images/partnerCard-4.png', title: 'Partner Card' },
        { path: '/images/partnerCard-5.png', title: 'Partner Card' },
        { path: '/images/partnerCard-6.png', title: 'Partner Card' },
        { path: '/images/partnerCard-7.png', title: 'Partner Card' },
    ];

    return (
        <div className={className}>
            <h4>Some Of The Brands That Trust Us!</h4>
            <div className="brandsImagesCaonainer">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="partnerCard"
                        src={image.path}
                        alt={image.title}  // присваиваем title как alt
                    />
                ))}
            </div>
        </div>
    );
}

export default Brands;
