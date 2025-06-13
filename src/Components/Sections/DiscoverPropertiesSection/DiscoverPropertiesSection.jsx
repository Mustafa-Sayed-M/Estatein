import SectionHeader from "../Components/SectionHeader";

function DiscoverPropertiesSection() {
    return (
        <section className="discover-properties-section py-10" id="discoverProperties">
            {/* Section Header */}
            <SectionHeader
                title="Discover a World of Possibilities"
                description={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
            />
            <div className="container">
                Discover Properties Section
            </div>
        </section>
    )
}

export default DiscoverPropertiesSection;