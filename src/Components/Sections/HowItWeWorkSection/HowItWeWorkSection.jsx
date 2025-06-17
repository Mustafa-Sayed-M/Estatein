import SectionHeader from "../Components/SectionHeader";
import howItWeWorkData from "../../../Data/howItWeWorkData.json";
import HowItWeWorkCard from "./Components/HowItWeWorkCard";

function HowItWeWorkSection() {
    return (
        <section className="how-it-we-work-section py-10" id="howItWeWork">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Navigating the Estatein Experience"
                    description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
                />
                {/* How It We Work Cards */}
                <div className="how-it-we-work-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        howItWeWorkData.map((itemData, index) => (<HowItWeWorkCard key={index} index={index} data={itemData} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWeWorkSection;