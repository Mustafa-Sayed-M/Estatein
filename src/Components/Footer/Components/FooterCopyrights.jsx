import { Link } from "react-router-dom";
import socialProfiles from '../../../Data/socialProfiles.json';

function FooterCopyrights() {
    return (
        <div className="footer-copyrights py-5 bg-grey-10">
            <div className="container flex md:items-center justify-between max-md:flex-col-reverse gap-5">
                {/* Left Content */}
                <div className="flex items-center gap-5 max-sm:flex-col max-md:justify-center">
                    <p className="!text-white">@2025 Estatein. All Rights Reserved.</p>
                    {/*  */}
                    <ul className="flex items-center gap-2">
                        <li>
                            <Link
                                to=""
                                className="transition sm:hover:text-purple-60 font-medium"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Social Profiles */}
                <ul className="flex items-center gap-2 max-md:justify-center">
                    {
                        socialProfiles.map(({ href, icon, name }, index) => (<li key={index}>
                            <a
                                href={href}
                                className="block w-10 h-10 leading-10 text-center text-lg rounded-full bg-grey-8 transition sm:hover:bg-purple-60"
                            >
                                <i className={`fa-brands fa-${icon} fa-fw`}></i>
                                <span className="sr-only">{name}</span>
                            </a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterCopyrights;