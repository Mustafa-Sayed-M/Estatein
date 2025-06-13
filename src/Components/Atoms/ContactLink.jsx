import { NavLink } from "react-router-dom";

function ContactLink({ className = '' }) {
    return (
        <NavLink
            to={`/contact`}
            className={({ isActive }) => `block border rounded-md font-medium py-2 px-4 transition ${isActive ? 'sm:border-purple-60 max-sm:border-grey-15 sm:bg-purple-60 max-sm:bg-grey-8' : 'sm:border-grey-15 sm:bg-grey-8 max-sm:border-transparent sm:hover:border-purple-60 sm:hover:bg-purple-60'} ${className}`}
        >
            Contact Us
        </NavLink>
    )
}

export default ContactLink;