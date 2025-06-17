import SectionHeader from "../Components/SectionHeader";

function TeamSection() {
    return (
        <section className="team-section py-10" id="team">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Meet the Estatein Team"
                    description={`At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`}
                />
                Team Section
            </div>
        </section>
    )
}

export default TeamSection;