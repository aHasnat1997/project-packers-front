import React, { useState } from 'react';
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
    const [accessState, setAccessState] = useState([]);
    const userAccess = [
        'Support ticket / life chat',
        'Product upload and edit',
        'Order management',
        'Request management'
    ];

    // const fromFunction = e => {
    //     e.preventDefault();
    //     console.log(e.target.child.value);
    // };

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
            <div className='flex flex-col gap-4 p-5'>
                <div
                    // onClick={(e) => e.preventDefault()}
                    className='flex flex-col gap-4'
                >
                    {/* <input type="checkbox" className='mr-2' />Order management */}
                    {
                        userAccess.map((acc, i) => (
                            <div key={i}>
                                <input
                                    type="checkbox"
                                    className='mr-2'
                                />{acc}
                            </div>
                        ))
                    }
                </div>
                <input
                    type='submit'
                    value='Save & Change'
                    className='btn bg-[#3E949A] px-4 py-2 ml-auto'
                />
            </div>
        </div>
    );
};

export default StaffModalBody;
