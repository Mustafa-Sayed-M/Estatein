import { Link } from "react-router-dom";

const staticesList = [
    {
        count: '200+',
        name: 'Happy Customers',
    },
    {
        count: '10k+',
        name: 'Properties For Clients',
    },
    {
        count: '16+',
        name: 'Years of Experience',
    },
]

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
            <div className="statices flex items-center gap-3 flex-wrap">
                {
                    staticesList.map(({ count, name }, index) => (<div
                        key={index}
                        className="statices-box p-5 rounded-md bg-grey-10 border border-grey-15 flex-1"
                    >
                        <h2 className="text-4xl font-semibold">{count}</h2>
                        <p className="text-nowrap">{name}</p>
                    </div>))
                }
            </div>
        </div>
    )
}

export default HeaderContent;