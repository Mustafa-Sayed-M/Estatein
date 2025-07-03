import AchievementsSection from "../Components/Sections/AchievementsSection";
import ClientsSection from "../Components/Sections/ClientsSection";
import HowItWeWorkSection from "../Components/Sections/HowItWeWorkSection";
import JourneySection from "../Components/Sections/JourneySection";
import TeamSection from "../Components/Sections/TeamSection";
import ValuesSection from "../Components/Sections/ValuesSection";

function AboutPage() {
    return (
        <div className="about-page">
            {/* Journey Section */}
            <JourneySection />
            {/* Values Section */}
            <ValuesSection />
            {/* Achievements Section */}
            <AchievementsSection />
            {/* How It We Work Section */}
            <HowItWeWorkSection />
            {/* Team Section */}
            <TeamSection />
            {/* Clients Section */}
            <ClientsSection />
        </div>
    )
}

export default AboutPage;