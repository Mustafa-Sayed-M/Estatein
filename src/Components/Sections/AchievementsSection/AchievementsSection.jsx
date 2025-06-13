import SectionHeader from "../Components/SectionHeader";

function AchievementsSection() {
    return (
        <section className="achievements-section py-10" id="achievements">
            {/* Section Header */}
            <SectionHeader
                title="Our Achievements"
                description={`Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`}
            />
            <div className="container">
                Achievements Section
            </div>
        </section>
    )
}

export default AchievementsSection;