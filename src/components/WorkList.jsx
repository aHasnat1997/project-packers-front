const WorkList = ({ title, p }) => {
    return <div className="flex gap-5 items-start font-Jakarta">
        <span className="p-3 bg-secondary border border-primary rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L22 22" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
        </span>
        <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 text-base">{p}</p>
        </div>
    </div>
}

export default WorkList;
