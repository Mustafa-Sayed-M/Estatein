import { useNavigate } from "react-router-dom";

function LinksComponent({ page = "", title = "", linksList = [] }) {

    const navigate = useNavigate();

    const handleClick = (e, sectionId) => {
        e.preventDefault();
        // 1. Navigate to target page
        navigate(page);

        setTimeout(() => {
            // 2. Get section element
            const sectionEle = document.getElementById(sectionId);

            // 3. Scroll to section element if founded
            if (sectionEle) {
                sectionEle.scrollIntoView({ behavior: "smooth" });
            }
        }, 50)
    };

    return (
        <div className={`links-component ${page === '/properties' ? 'max-sm:order-1' : ''}`}>
            <h3 className="text-grey-60 mb-2 text-lg font-medium">{title}</h3>
            <ul>
                {
                    linksList.map(({ href, label }, index) => (<li key={index}>
                        <a
                            href={href}
                            onClick={e => handleClick(e, href)}
                            className="block w-fit font-medium py-2 transition sm:hover:text-purple-60"
                        >{label}</a>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default LinksComponent;