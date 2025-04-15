import './style.scss'
function Statistic() {
const images = [
    { path: '/images/stats_info.svg', title: 'stats info', quantity: '650+', text: 'companies in our network'},
    { path: '/images/stats_info-1.svg', title: 'stats info', quantity: '500+', text: 'Alpha Call channels'},
    { path: '/images/stats_info-2.svg', title: 'stats info', quantity: '150+', text: 'influencers connections'},
    { path: '/images/stats_info-3.svg', title: 'stats info', quantity: '15 mln', text: 'in blockchain sales'},
]
    return (
        <div className='statisticContainer container'>
            <div className='statistic'>
                {images.map((image, index) => (
                    <div className={`statistic-item statistic-item-${index}`} key={index}>
                        <img
                            key={index}
                            className="partnerCard"
                            src={image.path}
                            alt={image.title}
                        />
                        <div className='descriptionWrapper'>
                            <p className='imageQuantity'>{image.quantity}</p>
                            <p className='imageText'>{image.text}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Statistic