import { useState } from "react";


const FAQComp = ({ title, paragraph }) => {
    const [isOpen, setOpen] = useState(false);

    return <button
        onClick={() => setOpen(!isOpen)}
        onBlur={() => setOpen(false)}
        className="w-full lg:w-96 py-3 border-b-2 cursor-pointer"
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
            <h4 className="flex-1 text-lg lg:text-xl font-semibold">{title}</h4>
        </div>
        <p
            className={`transition-all duration-500 text-left lg:ml-16
            ${!isOpen ? 'overflow-hidden opacity-0 h-0' : 'opacity-100 h-full'}`}
        >
            {paragraph}
        </p>
    </button>;
}

export default FAQComp;
