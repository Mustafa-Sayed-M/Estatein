import ContactFormSection from "../Components/Sections/ContactFormSection/ContactFormSection";
import OfficeLocationsSection from "../Components/Sections/OfficeLocationsSection/OfficeLocationsSection";

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