import { Link } from "react-router-dom";

function PropertyCard({ propertyData: { id, banner, title, description, info, price } }) {
    return (
        <div className="property-card p-5 border border-grey-15 rounded-md">
            {/* Banner */}
            <img src={banner} alt={title || "Property Banner"} className="rounded-md aspect-video mb-4 w-full" />
            {/* Property Text Info */}
            <div className="property-text-info mb-4">
                {/* Title */}
                <h3 className="font-semibold mb-2 text-xl">{title}</h3>
                {/* Property Description */}
                <div className="property-description flex items-end">
                    {/* Description */}
                    <p className="line-clamp-2">{description}</p>
                    {/* Read More */}
                    <Link
                        to={`/properties/${id}`}
                        className="underline text-nowrap"
                    >
                        Read More
                    </Link>
                </div>
            </div>
            {/* Property Info */}
            <div className="property-info flex items-center gap-2 flex-wrap mb-4">
                {/* Bedrooms */}
                <div className="bedrooms py-2 px-4 rounded-full bg-grey-10 border border-grey-15">
                    <span>{(info.bedrooms).toString().padStart(2, '0')} Bedrooms</span>
                </div>
                {/* Bathrooms */}
                <div className="bathrooms py-2 px-4 rounded-full bg-grey-10 border border-grey-15">
                    <span>{(info.bathrooms).toString().padStart(2, '0')} Bathrooms</span>
                </div>
                {/* Property Type */}
                <div className="property-type py-2 px-4 rounded-full bg-grey-10 border border-grey-15">
                    <span>{info.type}</span>
                </div>
            </div>
            {/* Property Card Foot */}
            <div className="property-card-foot flex sm:items-end gap-7 max-sm:flex-col">
                {/* Property Price */}
                <div className="property-price">
                    <p className="mb-1">Price</p>
                    <h4 className="text-xl font-semibold">${price}</h4>
                </div>
                {/* View Property */}
                <Link
                    to={`/properties/${id}`}
                    className="block py-2 px-4 rounded-md bg-purple-60 flex-1 text-center"
                >
                    View Property Details
                </Link>
            </div>
        </div>
    )
}

export default PropertyCard;