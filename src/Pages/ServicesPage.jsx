import PropertyManagementSection from "../Components/Sections/PropertyManagementSection";
import SmartInvestmentsSection from "../Components/Sections/SmartInvestmentsSection";
import UnlockPropertySection from "../Components/Sections/UnlockPropertySection";

function ServicesPage() {
    return (
        <div className="services-page">
            {/* Header */}
            <header className="py-20 bg-gradient-to-r from-white/10 to-grey-8 to-30%">
                <div className="container">
                    <h2 className="mb-4 font-semibold text-3xl">Elevate Your Real Estate Experience</h2>
                    <p>
                        Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services,
                        each designed to cater to your unique needs and dreams.
                    </p>
                </div>
            </header>
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