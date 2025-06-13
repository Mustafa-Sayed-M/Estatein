import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import SectionHeader from "../Components/SectionHeader";
import SwiperSliderControllers from "../Components/SwiperSliderControllers";
import faqsData from '../../../Data/faqs.json';
import FaqCard from "./Components/FaqCard";

function FaqsSection() {

    const swiperSliderPrevClassname = 'faqs-prev-btn';
    const swiperSliderNextClassname = 'faqs-next-btn';

    return (
        <section className="faqs-section py-10" id="faqs">
            {/* Section Header */}
            <SectionHeader
                title="Frequently Asked Questions"
                description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
            >
                <Link
                    to=''
                    className="block text-center py-2 px-4 rounded-md bg-grey-10 border border-grey-15 transition sm:hover:bg-grey-15"
                >View All FAQ's</Link>
            </SectionHeader>
            <div className="container">
                {/* Swiper Slider of Faqs */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: "." + swiperSliderPrevClassname,
                        nextEl: "." + swiperSliderNextClassname
                    }}
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
                >
                    {
                        faqsData.map((faq, index) => (<SwiperSlide key={index}>
                            <FaqCard faqData={faq} />
                        </SwiperSlide>))
                    }
                </Swiper>
                {/* Swiper Slider Controllers */}
                <SwiperSliderControllers
                    prevBtnClassName={swiperSliderPrevClassname}
                    nextBtnClassName={swiperSliderNextClassname}
                    slidesCount={faqsData.length}
                    currentSlide={1}
                />
            </div>
        </section>
    )
}

export default FaqsSection;