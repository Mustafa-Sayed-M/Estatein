import SectionHeader from "../Components/SectionHeader";

function ContactFormSection() {
    return (
        <section className="contact-form-section py-10" id="contactFrom">
            {/* Section Header */}
            <SectionHeader
                title="Let's Connect"
                description={`We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`}
            />
            <div className="container">
                Contact Form Section
            </div>
        </section>
    )
}

export default ContactFormSection;