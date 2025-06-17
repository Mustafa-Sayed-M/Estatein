import SectionHeader from "../Components/SectionHeader";

function ClientsSection() {
    return (
        <section className="clients-section py-10" id="clients">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Our Valued Clients"
                    description={`At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`}
                />
                Clients Section
            </div>
        </section>
    )
}

export default ClientsSection;