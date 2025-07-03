import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import testimonialsData from '../../../Data/testimonials.json';
import TestimonialCard from "./Components/TestimonialCard";
import SectionHeader from "../../UI/SectionHeader";
import SwiperSliderControllers from "../../UI/PropertiesSlider/Components/SwiperSliderControllers";

function TestimonialsSection() {

    const swiperSliderPrevClassname = 'testimonial-prev-btn';
    const swiperSliderNextClassname = 'testimonial-next-btn';

    return (
        <section className="testimonials-section py-10" id="testimonials">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="What Our Clients Say"
                    description={`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.`}
                >
                    <Link
                        to=''
                        className="block text-center py-2 px-4 rounded-md bg-grey-10 border border-grey-15 transition sm:hover:bg-grey-15"
                    >View All Testimonials</Link>
                </SectionHeader>
                {/* Swiper Slider of Testimonials */}
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
                        prevEl: "." + swiperSliderPrevClassname,
                        nextEl: "." + swiperSliderNextClassname
                    }}
                >
                    {
                        testimonialsData.map((testimonial, index) => (<SwiperSlide key={index}>
                            <TestimonialCard testimonialData={testimonial} />
                        </SwiperSlide>))
                    }
                </Swiper>
                {/* Swiper Slider Controllers */}
                <SwiperSliderControllers
                    prevBtnClassName={swiperSliderPrevClassname}
                    nextBtnClassName={swiperSliderNextClassname}
                    slidesCount={testimonialsData.length}
                    currentSlide={1}
                />
            </div>
        </section>
    )
}

export default TestimonialsSection;