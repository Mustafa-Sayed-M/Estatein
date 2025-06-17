function SectionHeader({ title = '', description = '', children }) {
    return (
        <div className="section-header mb-10 flex md:items-center justify-between gap-10 max-md:flex-col">
            {/* Main Content */}
            <div className="main-content flex-1">
                {/* Title */}
                <h2 className="mb-2 font-semibold text-2xl">{title}</h2>
                {/* Description */}
                <p className="md:max-w-[1000px]">{description}</p>
            </div>
            {/* Children */}
            {children}
        </div>
    )
}

export default SectionHeader;