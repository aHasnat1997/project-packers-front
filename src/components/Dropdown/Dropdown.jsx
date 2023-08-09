import React, { useState } from 'react';
import { OutSideClick } from '../OutSideClick';

/**
 * @param {String} ddTitle Dropdown opener button name or icon
 * @param {Object} ddBody Dropdown body 
 * @param {Boolean} open Dropdown default open or close in first load 
 * @param {String} ddPosition Dropdown body position style
 * @param {String} btnStyle Dropdown opener button style
 * @returns Dropdown with content
 */

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
            className={`relative z-10`}
        >
            <button
                onClick={() => setOpen(!isOpen)}
                className={`${btnStyle}`}
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
