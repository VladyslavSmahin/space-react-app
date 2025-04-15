import './style.scss'

function Bluship({ className = '', text }) {
    return (
        <div className={`bluship-wrapper ${className}`}>
            <svg className='bluship' width="246" height="65" viewBox="0 0 246 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.087 62.9999L2.00012 50.7578L2 2L232.913 2.00014L244 14.2422L244 63L13.087 62.9999Z" stroke="url(#paint0_linear_472_9299)" strokeWidth="4" />
                <defs>
                    <linearGradient id="paint0_linear_472_9299" x1="246" y1="64.9999" x2="1.66562" y2="64.9999" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF2DA0" />
                        <stop offset="0.507474" stopColor="#7063FF" />
                        <stop offset="1" stopColor="#16BAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="bluship-text">{text}</span>
        </div>
    )
}

export default Bluship