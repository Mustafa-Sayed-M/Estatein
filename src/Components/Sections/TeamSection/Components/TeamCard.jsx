function TeamCard({ teamData: { name, position, message, image, twitterProfile } }) {
    return (
        <div className="team-card p-4 rounded-md border border-grey-15">
            {/* Image */}
            <img
                src={image}
                alt="Image"
                className="rounded-md mb-4"
            />
            {/* Twitter Profile */}
            <a
                href={twitterProfile}
                className="block w-10 h-10 leading-10 text-center bg-purple-60 rounded-full -mt-10 mx-auto relative z-10 transition sm:hover:bg-purple-60/80"
            >
                <span className="sr-only">Twitter Profile</span>
                <i className="fa-brands fa-x-twitter fa-fw"></i>
            </a>
            {/* Personal Info */}
            <div className="personal-info my-4 text-center">
                {/* Name */}
                <h3 className="font-semibold mb-2 text-xl">{name}</h3>
                {/* Position */}
                <p>{position}</p>
            </div>
            {/* Send Message */}
            <form>
                {/* Input Group */}
                <div className="input-group relative">
                    {/* Input Message */}
                    <input
                        name="message"
                        defaultValue={message}
                        placeholder="Enter Your Message"
                        className="w-full rounded-full bg-grey-10 border border-grey-15 p-4"
                    />
                    {/* Btn Submit */}
                    <button
                        title="Send"
                        className="w-10 h-10 leading-10 text-center rounded-full bg-purple-60 absolute top-1/2 -translate-y-1/2 right-3 transition sm:hover:bg-purple-60/80"
                    >
                        <i className="fa-solid fa-paper-plane fa-fw"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TeamCard;