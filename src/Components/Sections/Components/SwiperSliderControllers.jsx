function SwiperSliderControllers({ currentSlide = 1, slidesCount = 0, prevBtnClassName = '', nextBtnClassName = '' }) {

    const navigateBtnStyles = `w-10 h-10 leading-10 text-center rounded-full bg-grey-10 border border-grey-15 transition sm:hover:bg-grey-15 disabled:opacity-50`;

    return (
        <div className="swiper-slider-controllers flex items-center justify-between py-3 mt-7 border-t border-t-grey-15">
            {/* Slider Counter */}
            <div className="slider-counter flex items-center gap-1.5">
                <div>{currentSlide.toString().padStart(2, '0')}</div>
                <p>of {slidesCount.toString().padStart(2, '0')}</p>
            </div>
            {/* Slider Navigation Buttons */}
            <div className="slider-navigation-button flex items-center gap-3">
                {/* Prev */}
                <button
                    type="button"
                    title="Previous Slide"
                    className={`${navigateBtnStyles} ${prevBtnClassName}`}
                >
                    <span className="sr-only">Previous Slide</span>
                    <i className="fa-solid fa-angle-left fa-fw"></i>
                </button>
                {/* Next */}
                <button
                    type="button"
                    title="Next Slide"
                    className={`${navigateBtnStyles} ${nextBtnClassName}`}
                >
                    <span className="sr-only">Next Slide</span>
                    <i className="fa-solid fa-angle-right fa-fw"></i>
                </button>
            </div>
        </div>
    )
}

export default SwiperSliderControllers;