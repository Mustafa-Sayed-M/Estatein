import SectionHeader from "../Components/SectionHeader";

function HowItWeWorkSection() {
    return (
        <section className="how-it-we-work-section py-10" id="howItWeWork">
            {/* Section Header */}
            <SectionHeader
                title="Navigating the Estatein Experience"
                description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
            />
            <div className="container">
                How It We Work Section
            </div>
        </section>
    )
}

export default HowItWeWorkSection;