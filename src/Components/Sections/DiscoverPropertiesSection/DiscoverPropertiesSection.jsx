import SectionHeader from "../Components/SectionHeader";
import propertiesData from '../../../Data/properties.json';
import PropertiesSlider from "../Components/PropertiesSlider/PropertiesSlider";
import SwiperSliderControllers from "../Components/SwiperSliderControllers";

function DiscoverPropertiesSection() {

    const swiperSliderPrevClassname = 'discover-properties-prev-btn';
    const swiperSliderNextClassname = 'discover-properties-next-btn';

    return (
        <section className="discover-properties-section py-10" id="discoverProperties">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Discover a World of Possibilities"
                    description={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
                />
                {/* Swiper Slider of Properties */}
                <PropertiesSlider
                    propertiesList={propertiesData || []}
                    navigationPrevEle={swiperSliderPrevClassname}
                    navigationNextEle={swiperSliderNextClassname}
                />
                {/* Swiper Slider Controllers */}
                <SwiperSliderControllers
                    prevBtnClassName={swiperSliderPrevClassname}
                    nextBtnClassName={swiperSliderNextClassname}
                    slidesCount={propertiesData.length}
                    currentSlide={1}
                />
            </div>
        </section>
    )
}

export default DiscoverPropertiesSection;