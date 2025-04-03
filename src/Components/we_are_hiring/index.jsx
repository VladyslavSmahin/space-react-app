import './style.scss'
function WeAreHiring() {

    return (
        <div className='we_are_hiringContainer'>
            <div className='we_are_hiring'>
                <img src='/images/star.svg' alt='star'/>
                <p>We are hiring!</p>
                <p style={{ color: 'white' }}>View open roles</p>
                <a href='#' className='buttonArrow'><svg  width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 7.04453V4.94453H8.55883L5.28462 1.94453L6.67919 0.666748L12.5 6.00008L6.67919 11.3334L5.28462 10.0556L8.57095 7.04453H0.5Z" fill="#F7F7FA" />
                </svg></a>
            </div>
        </div>
    )
}

export default WeAreHiring