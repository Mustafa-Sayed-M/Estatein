import Header from "../Components/Header/Header";
import FaqsSection from "../Components/Sections/FaqsSection/FaqsSection";
import FeaturedPropertiesSection from "../Components/Sections/FeaturedPropertiesSection/FeaturedPropertiesSection";
import TestimonialsSection from "../Components/Sections/TestimonialsSection/TestimonialsSection";

function HomePage() {
    return (
        <div className="home-page">
            {/* Header */}
            <Header />
            {/* Featured Properties Section */}
            <FeaturedPropertiesSection />
            {/* Testimonials Section */}
            <TestimonialsSection />
            {/* Faqs Section */}
            <FaqsSection />
        </div>
    )
}

export default HomePage;