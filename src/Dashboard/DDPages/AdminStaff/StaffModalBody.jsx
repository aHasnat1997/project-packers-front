import React from 'react';
import UserIcon from '../../../components/UserIcon';

/**
 * Modal Body
 * @param {String} firstName Staff first name
 * @param {String} lastName Staff last name
 * @param {String} access Staff access
 * @param {String} role Staff role
 * @returns 
 */

const StaffModalBody = ({
    firstName = String,
    lastName = String,
    access = String,
    role = String
}) => {
    return (
        <div className='w-[32rem]'>
            <h4 className='font-semibold text-xl p-5 border-b border-gray-100'>
                Staff accounts
            </h4>
            <div className='p-5 flex justify-between items-center border-b border-gray-100'>
                <div className='flex items-center gap-4'>
                    <UserIcon firstName={firstName} lastName={lastName} />
                    <div>
                        <h6 className='font-semibold'>{firstName} {lastName}</h6>
                        <p className='text-gray-400'>{access}</p>
                    </div>
                </div>
                <div className='input-field-dd px-3 py-2'>
                    <select
                        id='role'
                        className='bg-white focus:outline-none'
                        value={role}
                    >
                        <option value='admin'>Admin</option>
                        <option value='support'>Support</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default StaffModalBody;
