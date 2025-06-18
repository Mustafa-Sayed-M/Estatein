function UnlockPropertyCard({ data: { name, description, icon } }) {
    return (
        <div className="unlock-property-card p-5 rounded-md border border-grey-15" >
            {/* Card Header */}
            <div className="card-header flex items-center gap-5 mb-5">
                {/* Icon */}
                <div className="icon text-purple-60 text-2xl">
                    <i className={icon}></i>
                </div>
                {/* Name */}
                <h3 className="text-xl font-semibold">{name}</h3>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default UnlockPropertyCard;