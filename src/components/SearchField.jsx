export const SearchField = ({ fieldStyle, placeholder, icon }) => {
    return <div className="relative">
        <img
            src={icon}
            alt="icon"
            className="stroke-secondary absolute top-[calc(50%-12px)] left-4"
        />
        <input type="text" className={`pl-12 py-2 ${fieldStyle}`} placeholder={`${placeholder}`} />
    </div>
}
