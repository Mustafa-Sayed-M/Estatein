import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import PropertyCard from './PropertyCard';

function PropertiesSlider({ propertiesList = [], navigationPrevEle = "", navigationNextEle = "" }) {
    return (
        <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 1.2
                },
                768: {
                    slidesPerView: 1.6
                },
                1024: {
                    slidesPerView: 2.5
                },
                1280: {
                    slidesPerView: 3
                },
            }}
            navigation={{
                prevEl: navigationPrevEle.startsWith(".") ? navigationPrevEle : "." + navigationPrevEle,
                nextEl: navigationNextEle.startsWith(".") ? navigationNextEle : "." + navigationNextEle,
            }}
            className="properties-slider"
        >
            {
                propertiesList.map((property, index) => (<SwiperSlide key={index}>
                    <PropertyCard propertyData={property} />
                </SwiperSlide>))
            }
        </Swiper>
    )
}

export default PropertiesSlider;