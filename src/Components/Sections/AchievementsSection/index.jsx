import achievementsData from "../../../Data/achievements.json";
import SectionHeader from "../../UI/SectionHeader";
import AchievementCard from "./Components/AchievementCard";

function AchievementsSection() {
    return (
        <section className="achievements-section py-10" id="achievements">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Our Achievements"
                    description={`Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`}
                />
                {/*  */}
                <div className="achievements grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        achievementsData.map((achievementItem, index) => (<AchievementCard achievementData={achievementItem} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default AchievementsSection;