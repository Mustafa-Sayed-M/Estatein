function OfficeLocationCard({ officeLocationData: { type, title, description, contactInfo, direction } }) {
    return (
        <div className="office-location-card p-5 rounded-md border border-grey-15">
            {/* Type */}
            <p className="mb-2">{type}</p>
            {/* Title */}
            <h3 className="mb-3 text-3xl">{title}</h3>
            {/* Description */}
            <p className="mb-3 line-clamp-2">{description}</p>
            {/* Contact Info */}
            <ul className="mb-7 flex items-center gap-2">
                {
                    contactInfo.map(({ value, icon, label }, index) => (<li key={index}>
                        <a
                            href={value}
                            target="_blank"
                            className="flex items-center gap-2 py-2 px-4 rounded-full bg-grey-10 border border-grey-15"
                        >
                            <i className={`fa-solid fa-${icon} fa-fw`}></i>
                            <span>{label}</span>
                        </a>
                    </li>))
                }
            </ul>
            {/* Direction */}
            <a
                target="_blank"
                href={direction}
                className="block py-2 px-4 rounded-md bg-purple-60 transition text-center"
            >
                Get Direction
            </a>
        </div>
    )
}

export default OfficeLocationCard;