import React from "react";
import SectionHeader from "../Components/SectionHeader";
import OfficeLocationsTabs from "./Components/OfficeLocationsTabs";
import officeLocationsData from '../../../Data/officeLocations.json';
import OfficeLocationCard from "./Components/OfficeLocationCard";

function OfficeLocationsSection() {

    const [active, setActive] = React.useState('*');

    return (
        <section className="office-locations-section py-10" id="officeLocations">
            {/* Section Header */}
            <SectionHeader
                title="Discover Our Office Locations"
                description={`Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you`}
            />
            <div className="container">
                {/* Office Location Tabs */}
                <OfficeLocationsTabs
                    active={active}
                    setActive={setActive}
                />
                {/* Office Location Cards */}
                <div className="office-locations-cards grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        officeLocationsData.map((officeLocation, index) => (<OfficeLocationCard
                            key={index}
                            officeLocationData={officeLocation}
                        />))
                    }
                </div>
            </div>
        </section>
    )
}

export default OfficeLocationsSection;