import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

type SliderProps = {
    images: string[];
};

function Slider({ images }: SliderProps) {
    return (
        <div className="container-slider">
            <Swiper
                spaceBetween={15}
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className="slider-img" src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;
