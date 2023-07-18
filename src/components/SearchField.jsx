export const SearchField = ({ width, placeholder, iconColor }) => {
    return <div className="relative">
        <svg className="stroke-secondary absolute top-4 left-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5L22 22" stroke={`${iconColor ? iconColor : '#0D3D4B'}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke={`${iconColor ? iconColor : '#0D3D4B'}`} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <input type="text" className={`input-field pl-12 w-full lg:w-[${`${width}rem`}]`} placeholder={`${placeholder}`} />
    </div>
}
