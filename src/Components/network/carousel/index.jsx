import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useRef} from "react";
import Slider from "react-slick";

function Carousel({ links, className = '', slidesToShow = 5, settings: customSettings = {} }) {

    const sliderRef = useRef(null);

    let defaultSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        loop: true,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: Math.max(3, slidesToShow - 1),
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: Math.max(2, slidesToShow - 2),
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: Math.max(1, slidesToShow - 3),
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };

    const mergedSettings = { ...defaultSettings, ...customSettings };

    console.log(mergedSettings);

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
        <Slider {...defaultSettings}  ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`custom-carousel ${className}`}>
            {links && links.length > 0 ? (
                links.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className={`carouselItem ${className}`}
                        rel="noopener noreferrer"
                    >
                        {link.path ? (
                            <img
                                src={link.path}
                                alt={link.title || link.url || "Изображение"}
                                className={`carouselImage ${className}`}
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Скрываем изображение при ошибке
                                }}
                            />
                        ) : null}
                        {!link.path && (link.title || link.url) && (
                            <span className={`carouselFallback ${className}`}>
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