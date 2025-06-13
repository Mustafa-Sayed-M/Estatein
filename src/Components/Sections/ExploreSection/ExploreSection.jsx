import { Link } from "react-router-dom";

function ExploreSection() {
    return (
        <section className="explore-section py-10 border-t-2 border-t-grey-15" id="section">
            <div className="container flex md:items-center justify-between gap-10 max-md:flex-col">
                {/* Text Wrapper */}
                <div className="text-wrapper flex-1">
                    <h2 className="text-4xl font-semibold mb-3">Start Your Real Estate Journey Today</h2>
                    <p>
                        Your dream property is just a click away. Whether you're looking for a new home, a strategic investment,
                        or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards
                        your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                    </p>
                </div>
                {/* Explore Properties */}
                <Link
                    to={'/properties'}
                    className="block py-2 px-4 rounded-md bg-purple-60 font-medium text-center"
                >
                    Explore Properties
                </Link>
            </div>
        </section>
    )
}

export default ExploreSection;