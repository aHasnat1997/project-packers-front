/**
 * @param {String} fieldStyle Search input field styles
 * @param {String} placeholder Search input field placeholder
 * @param {String} icon Search input field icon src
 * @returns Search Field component
 */

export const SearchField = ({ fieldStyle, placeholder, icon }) => {
    return <div className="relative">
        {
            icon && <img
                src={icon}
                alt="icon"
                className="stroke-secondary absolute top-[calc(50%-12px)] left-4"
            />
        }
        <input type="text" className={`py-2 ${fieldStyle} ${icon ? 'pl-12' : 'pl-4'}`} placeholder={`${placeholder ? placeholder : ''}`} />
    </div>
}
