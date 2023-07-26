import React, { useState } from 'react';
import { OutSideClick } from '../OutSideClick';

const Dropdown = ({
    ddTitle = String,
    ddBody = Object,
    open = Boolean,
    ddPosition = String,
    btnStyle = String
}) => {
    const [isOpen, setOpen] = useState(open ? true : false)

    return (
        <div
            className={`relative z-10 flex-1 w-full`}
        >
            <button
                onClick={() => setOpen(!isOpen)}
                className={`w-full ${btnStyle}`}
            >
                {ddTitle}
            </button>

            <OutSideClick
                show={isOpen}
                onClickOutside={() => setOpen(false)}
                body={
                    <div
                        className={`w-full transition-all duration-1000 
                        ${!isOpen ? 'opacity-0 hidden' : 'opacity-100'}
                        ${ddPosition}`}
                    >
                        {ddBody}
                    </div>
                }
            />
        </div>
    );
};

export default Dropdown;
