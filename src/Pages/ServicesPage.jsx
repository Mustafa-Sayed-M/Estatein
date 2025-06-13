import PropertyManagementSection from "../Components/Sections/PropertyManagementSection/PropertyManagementSection";
import SmartInvestmentsSection from "../Components/Sections/SmartInvestmentsSection/SmartInvestmentsSection";
import UnlockPropertySection from "../Components/Sections/UnlockPropertySection/UnlockPropertySection";

function ServicesPage() {
    return (
        <div className="services-page">
            {/* Unlock Property Section */}
            <UnlockPropertySection />
            {/* Property Management Section */}
            <PropertyManagementSection />
            {/* Smart Investments Section */}
            <SmartInvestmentsSection />
        </div>
    )
}

export default ServicesPage;