import { useNav } from "../../../../Contexts/NavContext";

function NavMenuToggler() {

    const { menuIsOpen, setMenuIsOpen } = useNav();

    const handleClick = (e) => {
        e.stopPropagation();
        setMenuIsOpen(prev => !prev);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            title={(menuIsOpen ? 'Close' : 'Open') + ' Menu'}
            className="text-3xl lg:hidden"
        >
            <i className={`fa-solid fa-${menuIsOpen ? 'xmark' : 'bars'} fa-fw`}></i>
        </button>
    )
}

export default NavMenuToggler;