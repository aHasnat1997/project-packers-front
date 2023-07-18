import { useState } from "react";


const FAQComp = ({ title, p }) => {
    const [isOpen, setOpen] = useState(false);

    return <button
        onClick={() => setOpen(!isOpen)}
        onBlur={()=>setOpen(false)}
        className="w-full lg:w-96 py-4 border-b-2 cursor-pointer"
    >
        <div
            className={`flex gap-6 items-center duration-500
            ${isOpen ? 'scale-y-100' : ''}`}
        >
            <span
                className={`px-4 py-2 rounded-full border-2 
                ${isOpen ? 'bg-secondary' : 'bg-tertiary'}`}
            >
                ?
            </span>
            <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <p
            className={`ml-16 h-0 transition-all duration-1000 
            ${!isOpen ? 'scale-y-0 overflow-hidden opacity-0' : 'scale-y-100 h-max opacity-100'}`}
        >
            {p}
        </p>
    </button>;
}

export default FAQComp;
