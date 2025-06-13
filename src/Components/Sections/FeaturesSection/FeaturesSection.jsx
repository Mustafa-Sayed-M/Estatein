import { Link } from 'react-router-dom';
import featuresData from '../../../Data/features.json';

function FeaturesSection() {
    return (
        <section className="features-section bg-grey-8 outline-8 outline-grey-15 p-3" id="features">
            <div className='container'>
                {/* Features Grid */}
                <div className="features-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        featuresData.map(({ name, icon }, index) => (<Link
                            to={''}
                            key={index}
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
                        </Link>))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;