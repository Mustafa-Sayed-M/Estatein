import SectionHeader from "../Components/SectionHeader";

function OfficeLocationsSection() {
    return (
        <section className="office-locations-section py-10" id="officeLocations">
            {/* Section Header */}
            <SectionHeader
                title="Discover Our Office Locations"
                description={`Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you`}
            />
            <div className="container">
                Office Locations
            </div>
        </section>
    )
}

export default OfficeLocationsSection;