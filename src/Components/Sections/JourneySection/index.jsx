import SectionHeader from "../../UI/SectionHeader";
import Statices from "../../UI/Statices";

function JourneySection() {
    return (
        <section className="journey-section py-7" id="journey">
            <div className="container flex items-center gap-10 max-lg:flex-col-reverse">
                {/* Main Content */}
                <div className="main-content">
                    {/* Section Header */}
                    <SectionHeader
                        title="Our Journey"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                    />
                    {/* Statices */}
                    <Statices />
                </div>
                {/* Hero */}
                <div
                    style={{
                        backgroundImage: 'url(/assets/images/hero-bg.png)',
                        backgroundSize: 'cover',
                    }}
                    className="hero rounded-lg border-2 border-grey-15"
                >
                    <img
                        src="/assets/images/journey-hero.png"
                        alt="Hero"
                    />
                </div>
            </div>
        </section>
    )
}

export default JourneySection;