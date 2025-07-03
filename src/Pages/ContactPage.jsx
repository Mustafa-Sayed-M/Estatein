import ContactFormSection from "../Components/Sections/ContactFormSection";
import OfficeLocationsSection from "../Components/Sections/OfficeLocationsSection";

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Contact Form Section */}
            <ContactFormSection />
            {/* Office Locations Section */}
            <OfficeLocationsSection />
        </div>
    )
}

export default ContactPage;