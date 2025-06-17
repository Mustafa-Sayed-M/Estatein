import SectionHeader from "../Components/SectionHeader";

function PropertyManagementSection() {
    return (
        <section className="property-management-section py-10" id="propertyManagement">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Effortless Property Management"
                    description={`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}
                />
                Property Management Section
            </div>
        </section>
    )
}

export default PropertyManagementSection;