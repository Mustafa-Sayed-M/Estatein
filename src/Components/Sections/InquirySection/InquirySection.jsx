import SectionHeader from "../Components/SectionHeader";

function InquirySection() {
    return (
        <section className="inquiry-section py-10" id="inquiry">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Let's Make it Happen"
                    description={`Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`}
                />
                Inquiry Section
            </div>
        </section>
    )
}

export default InquirySection;