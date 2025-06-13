import FeaturesSection from "../Sections/FeaturesSection/FeaturesSection";
import HeaderContent from "./Components/HeaderContent";
import HeaderHero from "./Components/HeaderHero";

function Header() {
    return (
        <header id="header">
            <div className="container flex items-center max-lg:flex-col-reverse gap-10 max-lg:py-10">
                {/* Header Content */}
                <HeaderContent />
                {/* Header Hero */}
                <HeaderHero />
            </div>
            {/* Features Section */}
            <FeaturesSection />
        </header>
    )
}

export default Header;