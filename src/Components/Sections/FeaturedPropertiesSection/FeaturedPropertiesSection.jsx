import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import PropertiesSlider from "../Components/PropertiesSlider/PropertiesSlider";
import propertiesData from '../../../Data/properties.json';
import SwiperSliderControllers from "../Components/SwiperSliderControllers";

function FeaturedPropertiesSection() {

    const swiperSliderPrevClassname = 'featured-properties-prev-btn';
    const swiperSliderNextClassname = 'featured-properties-next-btn';

    return (
        <section className="featured-properties-section py-10" id="featuredProperties">
            {/* Section Header */}
            <SectionHeader
                title="Featured Properties"
                description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
            >
                <Link
                    to='/properties'
                    className="block text-center py-2 px-4 rounded-md bg-grey-10 border border-grey-15 transition sm:hover:bg-grey-15"
                >View All Properties</Link>
            </SectionHeader>
            <div className="container">
                {/* Swiper Slider of Properties */}
                <PropertiesSlider
                    propertiesList={propertiesData.filter(p => p.isFeatured) || []}
                    navigationPrevEle={swiperSliderPrevClassname}
                    navigationNextEle={swiperSliderNextClassname}
                />
                {/* Swiper Slider Controllers */}
                <SwiperSliderControllers
                    prevBtnClassName={swiperSliderPrevClassname}
                    nextBtnClassName={swiperSliderNextClassname}
                    slidesCount={propertiesData.filter(p => p.isFeatured).length}
                    currentSlide={1}
                />
            </div>
        </section>
    )
}

export default FeaturedPropertiesSection;