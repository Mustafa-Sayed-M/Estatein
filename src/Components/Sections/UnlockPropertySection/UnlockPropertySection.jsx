import SectionHeader from "../Components/SectionHeader";

function UnlockPropertySection() {
    return (
        <section className="unlock-property-section py-10" id="unlockProperty">
            {/* Section Header */}
            <SectionHeader
                title="Unlock Property Value"
                description={`Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`}
            />
            <div className="container">
                Unlock Property Section
            </div>
        </section>
    )
}

export default UnlockPropertySection;