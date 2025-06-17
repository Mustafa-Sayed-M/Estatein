import { Link } from "react-router-dom";
import Statices from "../../Atoms/Statices";

function HeaderContent() {
    return (
        <div className="header-content">
            {/* Text Wrapper */}
            <div className="text-wrapper mb-7">
                <h1 className="text-4xl font-bold mb-3">Discover Your Dream Property with Estatein</h1>
                <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 mb-7">
                <Link
                    to={''}
                    className="block py-2 px-4 rounded-md border border-grey-15"
                >
                    Learn More
                </Link>
                <Link
                    to={'/properties'}
                    className="block py-2 px-4 rounded-md border border-purple-60 bg-purple-60"
                >
                    Browser Properties
                </Link>
            </div>
            {/* Statices */}
            <Statices />
        </div>
    )
}

export default HeaderContent;