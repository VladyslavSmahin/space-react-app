import './style.scss';

function CardName({ text, className = '' }) {
    return (
        <div className={`cardContainer ${className}`}>
            <svg className='cardSvg' width="141" height="46" viewBox="0 0 141 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.000107983 35.275L0 0.00012207L130.375 0.000231596L141 10.7252L141 46.0001L10.625 46L0.000107983 35.275Z" fill="url(#paint0_linear_441_6423)" />
                <defs>
                    <linearGradient id="paint0_linear_441_6423" x1="141" y1="46" x2="0.954687" y2="46" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF2DA0" />
                        <stop offset="0.507474" stopColor="#7063FF" />
                        <stop offset="1" stopColor="#16BAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <p className='cardText'>{text}</p>
        </div>
    );
}

export default CardName;
