function HowItWeWorkCard({ index, data: { name, description } }) {
    return (
        <div className="how-it-we-work-card overflow-hidden">
            {/* Card Header */}
            <div className="card-header p-3 border-l border-l-grey-15 relative before:absolute before:bg-purple-60 before:-left-5 before:bottom-0 before:h-10 before:w-40 before:rounded-full before:blur-lg before:opacity-20">
                Step {(index + 1).toString().padStart(2, '0')}
            </div>
            {/* Main Content */}
            <div className="main-content p-4 rounded-md rounded-tl-none border border-grey-15">
                {/* Name */}
                <h3 className="mb-3 font-semibold text-xl">{name}</h3>
                {/* Description */}
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HowItWeWorkCard;