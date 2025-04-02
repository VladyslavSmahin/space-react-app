import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useRef} from "react";
import Slider from "react-slick";

function Carousel({ links }) {

    const sliderRef = useRef(null);

    let settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
        loop: true,
        cssEase: "ease-in-out",
        pauseOnHover: true,
    };
    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
        }
    };

    const handleMouseLeave = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    };
    return (
        <Slider {...settings}  ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            {links && links.length > 0 ? (
                links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className={`carouselItem`}
                        rel="noopener noreferrer"
                    >
                        {link.path ? (
                            <img
                                src={link.path}
                                alt={link.title || link.url || "Изображение"}
                                className={`carouselImage`}
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Скрываем изображение при ошибке
                                }}
                            />
                        ) : null}
                        {!link.path && (link.title || link.url) && (
                            <span className="carouselFallback">
                                {link.title || link.url}
                            </span>
                        )}
                    </a>

                ))
            ) : (
                <p>Нет элементов для отображения</p>
            )}
        </Slider>
    );
}

export default Carousel;