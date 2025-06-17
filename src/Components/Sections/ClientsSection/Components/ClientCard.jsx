import { Link } from "react-router-dom";

function ClientCard({ clientData: { since, name, domain, category, testimonial, website } }) {
    return (
        <div className="client-card p-8 rounded-md border border-grey-15 outline-8 outline-grey-10">
            {/* Card Header */}
            <div className="card-header mb-7 flex items-center justify-between gap-4">
                {/* Main Content */}
                <div className="card-header-main-content flex-1">
                    {/* Since */}
                    <p className="mb-2">Since {since}</p>
                    {/* Name */}
                    <h3 className="text-xl font-semibold">{name}</h3>
                </div>
                {/* View Website */}
                <Link
                    to={website}
                    className="block py-2 px-4 rounded-md border border-grey-15 bg-grey-10 transition sm:hover:bg-grey-15"
                >
                    View Website
                </Link>
            </div>
            {/* Domain and Category */}
            <div className="domain-and-category flex items-center gap-3 mb-7">
                {/* Domain */}
                <div className="domain flex-1">
                    <h3 className="text-lg text-grey-60 mb-2">
                        <i className="fa-solid fa-shapes fa-fw me-2"></i>
                        <span>Domain</span>
                    </h3>
                    <h4 className="font-semibold">{domain}</h4>
                </div>
                {/* Category */}
                <div className="category flex-1">
                    <h3 className="text-lg text-grey-60 mb-2">
                        <i className="fa-solid fa-bolt fa-fw me-2"></i>
                        <span>Category</span>
                    </h3>
                    <h4 className="font-semibold">{category}</h4>
                </div>
            </div>
            {/* Testimonial */}
            <div className="testimonial p-3 rounded-md border border-grey-15">
                <p className="text-xl mb-3">What They Said 🤗</p>
                <p className="!text-white line-clamp-1">{testimonial}</p>
            </div>
        </div>
    )
}

export default ClientCard;