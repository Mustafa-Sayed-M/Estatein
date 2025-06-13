const tabsList = [
    { value: '*', label: 'All' },
    { value: 'regional', label: 'Regional' },
    { value: 'international', label: 'International' },
];

function OfficeLocationsTabs({ active, setActive }) {
    return (
        <ul className="flex items-center gap-2 p-3 rounded-md bg-grey-10 w-fit mb-5">
            {
                tabsList.map(({ value, label }, index) => (<li key={index}>
                    <button
                        type="button"
                        onClick={() => setActive(value)}
                        className={`py-2 px-4 min-w-20 rounded-md border border-grey-15 ${active === value ? "bg-grey-8" : ""}`}
                    >{label}</button>
                </li>))
            }
        </ul>
    )
}

export default OfficeLocationsTabs;