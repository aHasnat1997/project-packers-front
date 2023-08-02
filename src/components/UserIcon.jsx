import React from 'react';

/**
 * user icon with letter
 * @param {String} firstName user first name 
 * @param {String} lastName user last name 
 * @returns icon with user name letter
 */

const UserIcon = ({ firstName = String, lastName = String }) => {
    const initials = lastName ?
        (firstName[0] + lastName[0]).toUpperCase() :
        firstName[0].toUpperCase();

    return (
        <div className='w-10 h-10 bg-[#FFC96B] rounded-full flex items-center justify-center'>
            <span className='text-lg'>{initials}</span>
        </div>
    );
};

export default UserIcon;
