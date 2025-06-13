import DiscoverPropertiesSection from "../Components/Sections/DiscoverPropertiesSection/DiscoverPropertiesSection";
import InquirySection from "../Components/Sections/InquirySection/InquirySection";

function PropertiesPage() {
    return (
        <div className="properties-page">
            {/* Discover Properties Section */}
            <DiscoverPropertiesSection />
            {/* Inquiry Section */}
            <InquirySection />
        </div>
    )
}

export default PropertiesPage;