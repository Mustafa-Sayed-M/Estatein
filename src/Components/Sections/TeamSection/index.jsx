import teamData from '../../../Data/teamData.json';
import SectionHeader from '../../UI/SectionHeader';
import TeamCard from "./Components/TeamCard";

function TeamSection() {
    return (
        <section className="team-section py-10" id="team">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Meet the Estatein Team"
                    description={`At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`}
                />
                {/* Team Cards */}
                <div className="team-cards grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {
                        teamData.map((teamItem, index) => (<TeamCard teamData={teamItem} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamSection;