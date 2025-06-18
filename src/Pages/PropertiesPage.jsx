import DiscoverPropertiesSection from "../Components/Sections/DiscoverPropertiesSection/DiscoverPropertiesSection";
import InquirySection from "../Components/Sections/InquirySection/InquirySection";
import PropertiesSearchSection from "../Components/Sections/PropertiesSearchSection/PropertiesSearchSection";

function PropertiesPage() {
    return (
        <div className="properties-page">
            {/* Header */}
            <header className="py-20 bg-gradient-to-r from-white/10 to-grey-8 to-30%">
                <div className="container">
                    <h2 className="mb-4 font-semibold text-3xl">Find Your Dream Property</h2>
                    <p>
                        Welcome to Estatein, where your dream property awaits in every corner of our beautiful world.
                        Explore our curated selection of properties, each offering a unique story and a chance to redefine your life.
                        With categories to suit every dreamer, your journey
                    </p>
                </div>
            </header>
            {/* Properties Search Section */}
            <PropertiesSearchSection />
            {/* Discover Properties Section */}
            <DiscoverPropertiesSection />
            {/* Inquiry Section */}
            <InquirySection />
        </div>
    )
}

export default PropertiesPage;