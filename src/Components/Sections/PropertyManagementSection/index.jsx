import propertyManagementData from "../../../Data/effortlessPropertyManagementData.json";
import SectionHeader from "../../UI/SectionHeader";
import PropertyManagementCard from "./Components/PropertyManagementCard";

function PropertyManagementSection() {
    return (
        <section className="property-management-section py-10" id="propertyManagement">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Effortless Property Management"
                    description={`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}
                />
                {/* Property Management  Cards */}
                <div className="property-management-cards grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {
                        propertyManagementData.map((item, index) => (<PropertyManagementCard data={item} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default PropertyManagementSection;