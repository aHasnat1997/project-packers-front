import React, { useState } from 'react';
import icon from '../assets/icon/cd-arrow-right-2.svg';

const Dropdown = ({
    ddTitle = String,
    ddIcon = Boolean,
    ddBody = Object,
    open = Boolean,
    ddPosition = String
}) => {
    const [isOpen, satOpen] = useState(open ? true : false)

    return (
        <div
            onBlur={() => satOpen(false)}
            className={`relative z-20 flex-1`}
        >
            <button onClick={() => satOpen(!isOpen)}
                className='w-full flex justify-between items-center'
            >
                <span>{ddTitle}</span>
                <span className={`${!ddIcon && 'hidden'}`}>
                    <img className={`duration-300 ${isOpen ? 'rotate-[270deg]' : 'rotate-90'}`} src={icon} alt="icon" />
                </span>
            </button>
            <div
                className={`w-full bg-white transition-all duration-1000 
                ${!isOpen ? 'opacity-0 hidden' : 'opacity-100'}
                ${ddPosition}`}
            >
                {ddBody}
            </div>
        </div>
    );
};

export default Dropdown;
