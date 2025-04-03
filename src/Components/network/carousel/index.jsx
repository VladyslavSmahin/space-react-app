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
        autoplaySpeed: 0,
        arrows: false,
        loop: true,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300, // Максимальная ширина для этой настройки
                settings: {
                    slidesToShow: 4, // 3 слайда на экранах до 750px
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1100, // Максимальная ширина для этой настройки
                settings: {
                    slidesToShow: 3, // 3 слайда на экранах до 750px
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800, // Максимальная ширина для этой настройки
                settings: {
                    slidesToShow: 2, // 3 слайда на экранах до 750px
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480, // Максимальная ширина для этой настройки
                settings: {
                    slidesToShow: 1, // 2 слайда на экранах до 480px
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
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
                onMouseLeave={handleMouseLeave}
                className="custom-carousel">
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