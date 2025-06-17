const staticesList = [
    {
        count: '200+',
        name: 'Happy Customers',
    },
    {
        count: '10k+',
        name: 'Properties For Clients',
    },
    {
        count: '16+',
        name: 'Years of Experience',
    },
];

function Statices() {
    return (
        <div className="statices flex items-center gap-3 flex-wrap">
            {
                staticesList.map(({ count, name }, index) => (<div
                    key={index}
                    className="statices-box p-5 rounded-md bg-grey-10 border border-grey-15 flex-1"
                >
                    <h2 className="text-4xl font-semibold">{count}</h2>
                    <p className="text-nowrap">{name}</p>
                </div>))
            }
        </div>
    )
}

export default Statices;