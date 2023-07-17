import { useState } from "react";


const FAQComp = ({ title, p }) => {
    const [isOpen, setOpen] = useState(false);

    return <div onClick={() => setOpen(!isOpen)} className="w-full py-4 border-b-2 cursor-pointer">
        <div className="flex gap-6 items-center">
            <span className={`px-4 py-2 rounded-full border-2 ${isOpen ? 'bg-tertiary' : 'bg-secondary'}`}>?</span>
            <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <p className={`ml-16 transition-all duration-1000 ${!isOpen ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'}`}>{p}</p>
    </div>;
}

export default FAQComp;
