function TestimonialCard({ testimonialData: { content, author, rating } }) {
    return (
        <div className="testimonial-card p-5 rounded-md border border-grey-15 aspect-[1/0.66] flex flex-col">
            {/* Rating */}
            <ul className="flex items-center gap-2 mb-4">
                {
                    Array.from({ length: rating }).map((_, index) => (<li
                        key={index}
                        className="w-10 h-10 leading-10 text-center text-yellow-500 rounded-full bg-grey-10 border border-grey-15 text-xl"
                    >
                        <i className="fa-solid fa-star fa-fw"></i>
                    </li>))
                }
                {
                    (rating < 5) &&
                    Array.from({ length: 5 - rating }).map((_, index) => (<li
                        key={index}
                        className="w-10 h-10 leading-10 text-center text-yellow-500 rounded-full bg-grey-10 border border-grey-15 text-xl"
                    >
                        <i className="fa-regular fa-star fa-fw"></i>
                    </li>))
                }
            </ul>
            {/* Testimonial Content */}
            <div className="testimonial-content mb-4">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                {/* Description */}
                <p className="!text-white line-clamp-3">{content.description}</p>
            </div>
            {/* Author Info */}
            <div className="author-info flex items-center gap-3 mt-auto">
                {/* Author Avatar */}
                <img src={author.avatar_url} alt={(author.name).toUpperCase() + ' Avatar' || 'Author Avatar'} width={50} height={50} className="rounded-full" />
                {/* Author Sub Info */}
                <div className="author-sub-info flex-1">
                    {/* Author Name */}
                    <h4 className="font-medium">{author.name}</h4>
                    {/* Author Location */}
                    <p>{author.location}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;