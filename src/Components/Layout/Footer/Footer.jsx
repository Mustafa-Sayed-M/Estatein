import AppLogo from "../../UI/AppLogo";
import FooterCopyrights from "./Components/FooterCopyrights";
import LinksComponent from "./Components/LinksComponent";
import linksData from '../../../Data/footerLinksData.json';

function Footer() {
    return (
        <footer className="border-t-2 border-t-grey-15">
            {/* Footer Main Content */}
            <div className="footer-main-content py-10">
                <div className="container flex gap-7 flex-wrap">
                    {/* Footer About */}
                    <div className="footer-about 2xl:min-w-[350px] max-2xl:w-full">
                        {/* App Logo */}
                        <AppLogo />
                        {/* Subscribe Form */}
                        <form onSubmit={e => e.preventDefault()} className="mt-4">
                            <div className="input-group relative border border-grey-15 rounded-md overflow-hidden">
                                {/*  */}
                                <label
                                    htmlFor="email"
                                    className="absolute top-1/2 -translate-y-1/2 left-2"
                                >
                                    <i className="fa-solid fa-envelope fa-fw"></i>
                                    <span className="sr-only"></span>
                                </label>
                                {/*  */}
                                <input
                                    required
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="on"
                                    placeholder="Enter Your Email"
                                    className="w-full bg-transparent p-3 ps-10"
                                />
                                {/*  */}
                                <button
                                    title="Send"
                                    className="absolute top-1/2 -translate-y-1/2 right-2 transition sm:hover:text-purple-60"
                                >
                                    <i className="fa-solid fa-paper-plane fa-fw"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Links Wrapper */}
                    <div className="links-wrapper flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                        {
                            linksData.map(({ page, title, linksList }, index) => (<LinksComponent
                                key={index}
                                page={page}
                                title={title}
                                linksList={linksList}
                            />))
                        }
                    </div>
                </div>
            </div>
            {/* Footer Copyrights */}
            <FooterCopyrights />
        </footer>
    )
}

export default Footer;