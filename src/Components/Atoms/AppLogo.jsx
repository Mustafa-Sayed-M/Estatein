import { Link } from "react-router-dom";

function AppLogo() {
    return (
        <Link
            to={'/'}
        >
            <img
                src="/assets/images/logo.png"
                alt="Logo"
            />
        </Link>
    )
}

export default AppLogo;