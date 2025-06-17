function AchievementCard({ achievementData: { name, description } }) {
    return (
        <div className="achievement-card border border-grey-15 rounded-md outline-8 outline-grey-10 p-4">
            {/* Name */}
            <h3 className="mb-3 font-semibold text-xl">{name}</h3>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default AchievementCard;