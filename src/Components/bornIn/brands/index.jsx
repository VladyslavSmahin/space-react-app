import './style.scss'

function Brands({ className = '' }) {

    return (
        <div className={className}>
            <h4>Some Of The Brands That Trust Us!</h4>
            <div className="brandsImagesCaonainer">
                <img className='partnerCard' src='/images/partnerCard.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-1.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-2.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-3.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-4.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-5.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-6.png' alt="Partner Card" />
                <img className='partnerCard'  src='/images/partnerCard-7.png' alt="Partner Card" />
            </div>
        </div>
    )
}

export default Brands