import { Link } from "react-router-dom";

function FaqCard({ faqData: { question, answer } }) {
    return (
        <div className="faq-card p-5 rounded-md border border-grey-15 aspect-[1/0.44] flex flex-col">
            {/* Question */}
            <h3 className="font-semibold mb-3 text-2xl line-clamp-1">{question}</h3>
            {/* Answer */}
            <p className="mb-3 line-clamp-2">{answer}</p>
            {/* Read More */}
            <Link
                to={``}
                className="block mt-auto w-fit py-2 px-4 rounded-md bg-grey-10 border border-grey-15 transition sm:hover:bg-grey-15"
            >
                Read More
            </Link>
        </div>
    )
}

export default FaqCard;