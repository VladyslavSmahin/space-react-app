import './style.scss';
import React, {useRef} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';

function Carousel({links, className = '', slidesToShow = 5}) {
    const canLoop = links.length > slidesToShow;
    console.log('canLoop', canLoop, 'links.length', links.length, 'slidesToShow', slidesToShow);


    return (
        <Swiper modules={[Autoplay]}
                speed={5000}
                key={canLoop}
                loop={canLoop}
                slidesPerView={5}
                slidesPerGroup={1}
                freeMode={true}
                autoplay={{
                    delay: 1000
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    550: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                }}
                spaceBetween={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={`custom-carousel ${className}`}>
            {links && links.length > 0 ? (
                links.map((link, index) => (
                    <SwiperSlide key={index}>
                        <a
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
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : null}
                            {!link.path && (link.title || link.url) && (
                                <span className={`carouselFallback ${className}`}>
                            {link.title || link.url}
                        </span>
                            )}
                        </a>
                    </SwiperSlide>

                ))
            ) : (
                <p>Нет элементов для отображения</p>
            )}
        </Swiper>
    );
}

export default Carousel;
