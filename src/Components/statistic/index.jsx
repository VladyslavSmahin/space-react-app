import './style.scss'
function Statistic() {
const images = [
    { path: '/images/stats_info.png', title: 'stats info'},
    { path: '/images/stats_info-1.png', title: 'stats info'},
    { path: '/images/stats_info-2.png', title: 'stats info'},
    { path: '/images/stats_info-3.png', title: 'stats info'},
]
    return (
        <div className='statisticContainer container'>
            <div className='statistic container'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="partnerCard"
                        src={image.path}
                        alt={image.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Statistic