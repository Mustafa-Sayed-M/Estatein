import { NavLink } from "react-router-dom";
import React from "react";
import { useNav } from "../../../../Contexts/NavContext";

const linksList = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/properties', label: 'Properties' },
    { to: '/services', label: 'Services' }
];

function NavLinks() {

    const { menuIsOpen, setMenuIsOpen } = useNav();
    const navLinksRef = React.useRef(null);
    const menuIsOpenRef = React.useRef(menuIsOpen);

    // Handle window resize
    React.useEffect(() => {
        const handleResize = () => {
            navLinksRef.current.classList.remove('transition');
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle menu is open change
    React.useEffect(() => {
        menuIsOpenRef.current = menuIsOpen
    }, [menuIsOpen]);

    // Close handler
    const handleClose = React.useCallback(() => {
        setMenuIsOpen(false);
    }, [setMenuIsOpen]);

    // Handle click out
    React.useEffect(() => {
        const handleClickOut = () => {
            if (menuIsOpenRef.current) {
                handleClose();
            }
        };

        document.addEventListener('click', handleClickOut);
        return () => document.removeEventListener('click', handleClickOut);
    }, [handleClose]);

    // Shared styles
    const linkStyles = `block py-2 px-4 rounded-md border transition`;

    return (
        <div
            ref={navLinksRef}
            className={`nav-links max-lg:absolute max-lg:top-full max-lg:mt-3 max-lg:w-full max-lg:left-0 max-lg:z-10 max-lg:shadow-md transition ${menuIsOpen ? 'max-lg:opacity-100 max-lg:scale-100' : 'max-xl:pointer-events-none max-lg:opacity-0 max-lg:scale-75'}`}
        >
            <div className="max-lg:container">
                <ul
                    onClick={e => e.stopPropagation()}
                    className="flex lg:items-center gap-2 max-lg:flex-col max-lg:bg-grey-10 max-lg:p-2 max-lg:rounded-md"
                >
                    {
                        linksList.map(({ to, label }, index) => (<li key={index}>
                            <NavLink
                                to={to}
                                onClick={handleClose}
                                className={({ isActive }) => `${linkStyles} ${isActive ? 'border-grey-15 bg-grey-8' : 'sm:hover:border-grey-15 sm:hover:bg-grey-8 border-transparent'}`}
                            >{label}</NavLink>
                        </li>))
                    }
                    {/* Contact Link */}
                    <li>
                        <NavLink
                            to={'/contact'}
                            onClick={handleClose}
                            className={({ isActive }) => `sm:hidden ${linkStyles} ${isActive ? 'border-grey-15 bg-grey-8' : 'sm:hover:border-grey-15 sm:hover:bg-grey-8 border-transparent'}`}
                        >Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;