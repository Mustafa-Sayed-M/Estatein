import { Link } from "react-router-dom";

function FeaturesCard({ featureData: { icon, name } }) {
    return (
        <Link
            to={''}
            className='block feature-card text-center p-5 bg-grey-10 rounded-md border border-grey-15 group'
        >
            {/* Arrow Icon */}
            <div className='arrow-icon text-2xl -rotate-45 w-fit ms-auto opacity-50 transition group-hover:opacity-100 group-hover:text-purple-75'>
                <i className='fa-solid fa-arrow-right fa-fw'></i>
            </div>
            {/* Icon */}
            <div className='icon w-fit mx-auto relative mb-4'>
                <img
                    src='/assets/images/icon-bg.png'
                    alt='Icon Background'
                    width={60}
                />
                <div className='icon-container text-2xl text-purple-75 absolute left-1/2 top-1/2 -translate-1/2'>
                    <i className={`fa-solid fa-${icon} fa-fw`}></i>
                </div>
            </div>
            {/* Name */}
            <p className='!text-white'>{name}</p>
        </Link>
    )
}

export default FeaturesCard;