import Header from "../Components/Layout/Header/Header";
import FaqsSection from "../Components/Sections/FaqsSection";
import FeaturedPropertiesSection from "../Components/Sections/FeaturedPropertiesSection";
import TestimonialsSection from "../Components/Sections/TestimonialsSection";

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