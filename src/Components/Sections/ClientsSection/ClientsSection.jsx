import SectionHeader from "../Components/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperSliderControllers from "../Components/SwiperSliderControllers";
import clientsData from "../../../Data/clientsData.json";
import { Navigation } from "swiper/modules";
import ClientCard from "./Components/ClientCard";

function ClientsSection() {

    const swiperSliderPrevClassname = 'clients-prev-btn';
    const swiperSliderNextClassname = 'clients-next-btn';

    return (
        <section className="clients-section py-10" id="clients">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Our Valued Clients"
                    description={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`}
                />
                {/* Slider of Clients Cards */}
                <div className="slider-clients-cards">
                    {/* Slider */}
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        navigation={{
                            prevEl: "." + swiperSliderPrevClassname,
                            nextEl: "." + swiperSliderNextClassname
                        }}
                    >
                        {
                            clientsData.map((clientItem, index) => (<SwiperSlide key={index} className="p-4">
                                <ClientCard clientData={clientItem} />
                            </SwiperSlide>))
                        }
                    </Swiper>
                    {/* SwiperSliderControllers */}
                    <SwiperSliderControllers
                        currentSlide={1}
                        prevBtnClassName={swiperSliderPrevClassname}
                        nextBtnClassName={swiperSliderNextClassname}
                        slidesCount={clientsData.length || 0}
                    />
                </div>
            </div>
        </section>
    )
}

export default ClientsSection;