import unlockPropertyData from "../../../Data/unlockPropertyData.json";
import SectionHeader from "../../UI/SectionHeader";
import UnlockPropertyCard from "./Components/UnlockPropertyCard";

function UnlockPropertySection() {
    return (
        <section className="unlock-property-section py-10" id="unlockProperty">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Unlock Property Value"
                    description={`Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`}
                />
                {/* Unlock Property Cards */}
                <div className="unlock-property-cards grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {
                        unlockPropertyData.map((item, index) => (<UnlockPropertyCard data={item} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default UnlockPropertySection;