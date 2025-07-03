import React from "react";
import { Link } from "react-router-dom";

function Topbar() {

    const [isClosed, setIsClosed] = React.useState(() => {
        return JSON.parse(localStorage.getItem('topbarClosed')) || false
    });

    const handleClose = () => {
        setIsClosed(() => {
            return true;
        });
        localStorage.setItem('topbarClosed', true);
    };

    if (isClosed) return;

    return (
        <div
            style={{
                backgroundImage: 'url(/assets/images/topbar-bg.png)',
                backgroundSize: 'cover',
            }}
            className="topbar py-3 border-b-2 border-b-grey-15 max-sm:hidden bg-grey-10"
        >
            <div className="container flex items-center">
                {/*  */}
                <div className="flex items-center gap-2 md:ms-auto">
                    <p className="!text-white">✨ Discover Your Dream Property with Estatein</p>
                    <Link to={'/properties'} className="underline">Learn More</Link>
                </div>
                {/* Topbar Closer */}
                <button
                    type="button"
                    title="Close"
                    onClick={handleClose}
                    className="w-10 h-10 leading-10 text-center rounded-full text-xl ms-auto bg-white/10 transition sm:hover:bg-white/30"
                >
                    <i className="fa-solid fa-xmark fa-fw"></i>
                </button>
            </div>
        </div>
    )
}

export default Topbar;