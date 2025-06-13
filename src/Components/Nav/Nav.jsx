import NavLinks from "./Components/NavLinks";
import AppLogo from "../Atoms/AppLogo";
import ContactLink from "../Atoms/ContactLink";
import NavMenuToggler from "./Components/NavMenuToggler";

function Nav() {
    return (
        <nav className="py-3 border-b-2 border-b-grey-15 relative bg-grey-10">
            <div className="container flex items-center justify-between">
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks />
                {/* Nav utilities */}
                <div className="nav-utilities flex items-center gap-3">
                    {/* Contact Link */}
                    <ContactLink className="max-sm:hidden" />
                    {/* Nav Menu Toggler */}
                    <NavMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Nav;