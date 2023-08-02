import React from 'react';
import UserIcon from '../../../components/UserIcon';
import { useForm } from 'react-hook-form';
import Modal from '../../../components/Modal';
import StaffModalBody from './StaffModalBody';
import caret_down from '../../../assets/icon/caret-down.svg';

const Staff = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    const staffData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            role: 'Super Admin',
            access: 'Full access'
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            role: 'admin',
            access: 'Limited access'
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Johnson',
            role: 'admin',
            access: 'Full access'
        },
        {
            id: 4,
            firstName: 'Alice',
            lastName: 'Brown',
            role: 'admin',
            access: 'Limited access'
        },
        {
            id: 5,
            firstName: 'Michael',
            lastName: 'Lee',
            role: 'admin',
            access: 'Full access'
        },
        {
            id: 6,
            firstName: 'Sarah',
            lastName: 'Wilson',
            role: 'admin',
            access: 'Limited access'
        },
        {
            id: 7,
            firstName: 'David',
            lastName: 'Taylor',
            role: 'support',
            access: 'Full access'
        },
        {
            id: 8,
            firstName: 'Emily',
            lastName: 'Clark',
            role: 'support',
            access: 'Limited access'
        },
        {
            id: 9,
            firstName: 'Ryan',
            lastName: 'Allen',
            role: 'support',
            access: 'Full access'
        },
        {
            id: 10,
            firstName: 'Olivia',
            lastName: 'Adams',
            role: 'support',
            access: 'Limited access'
        },
        {
            id: 11,
            firstName: 'Sophia',
            lastName: 'Lee',
            role: 'support',
            access: 'Limited access'
        },
        {
            id: 12,
            firstName: 'Ethan',
            lastName: 'Wang',
            role: 'support',
            access: 'Full access'
        },
        {
            id: 13,
            firstName: 'Ava',
            lastName: 'Garcia',
            role: 'support',
            access: 'Limited access'
        },
        {
            id: 14,
            firstName: 'Liam',
            lastName: 'Martinez',
            role: 'support',
            access: 'Full access'
        },
        {
            id: 15,
            firstName: 'Isabella',
            lastName: 'Lopez',
            role: 'support',
            access: 'Limited access'
        }
    ];

    /**
     * @param {String} label Form field label 
     * @param {String} type Form field type 
     * @param {String} id Form field id and label htmlFor
     * @returns Form field
     */
    const FormField = ({ label = String, type = String, id = String }) => {
        return <div className='w-full'>
            <label htmlFor={`${id}`}>{label}</label>
            <input
                {...register(`${id}`)}
                type={`${type}`}
                id={`${id}`}
                className='w-full input-field-dd px-3 py-2'
            />
        </div>
    };

    const superAdmin = staffData.filter(data => data.role === 'Super Admin');
    const restStaff = staffData.filter(data => data.role !== 'Super Admin');

    return (
        <section className='dd-section-div'>
            <div className='pb-6 border-b flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Staff</h2>
                <button className='btn bg-secondary px-4 py-2'>Update</button>
            </div>
            <div className='mt-7'>
                <h4 className='font-semibold text-xl'>Account and Permissions</h4>
                <p className='text-gray-400'>We can help with that Replace your next meeting with a <br /> short video and get feedback faster .</p>
            </div>
            <div className='w-full mt-7 flex items-start gap-4'>
                <div className='w-full flex flex-col gap-5'>
                    <div className='border rounded-lg'>
                        <h4 className='font-semibold text-xl p-5 border-b border-gray-100'>Account Owner</h4>
                        <div className='p-5'>
                            {
                                superAdmin.map(data => <div
                                    key={data.id}
                                    className='flex items-center gap-4'
                                >
                                    <UserIcon firstName={data.firstName} lastName={data.lastName} />
                                    <div>
                                        <h6 className='font-semibold'>{data.firstName} {data.lastName}</h6>
                                        <p className='text-gray-400'>{data.role}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='border rounded-lg'>
                        <div className='p-5 border-b border-gray-100 flex justify-between items-center'>
                            <h4 className='font-semibold text-xl'>Staff accounts</h4>
                            <button className='btn text-[#3E949A]'>
                                Log out all staff account
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            {
                                restStaff.map(data => <div
                                    key={data.id}
                                    className='p-5 border-b flex justify-between items-center'
                                >
                                    <div className='flex items-center gap-4'>
                                        <UserIcon firstName={data.firstName} lastName={data.lastName} />
                                        <div>
                                            <h6 className='font-semibold'>{data.firstName} {data.lastName}</h6>
                                            <p className='text-gray-400'>{data.access}</p>
                                        </div>
                                    </div>
                                    <Modal
                                        btnName={<div className='flex items-center justify-between'>
                                            <span className='first-letter:uppercase'>
                                                {data.role}
                                            </span>
                                            <img src={caret_down} alt="" />
                                        </div>}
                                        btnType='px-4 py-2 border rounded-lg'
                                        body={<StaffModalBody
                                            firstName={data.firstName}
                                            lastName={data.lastName} 
                                            access={data.access} 
                                            role={data.role}
                                        />}
                                    />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h4 className='font-semibold text-xl -mt-10 pb-3'>Add Staff</h4>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col gap-3'
                    >
                        <div className='border rounded-lg p-3 flex flex-col gap-3'>
                            <div className='w-full flex items-center gap-3'>
                                <FormField label='First Name' type='text' id='firstName' />
                                <FormField label='Last Name' type='text' id='lastName' />
                            </div>
                            <FormField label='Email' type='email' id='userEmail' />
                            <FormField label='Phone Number' type='text' id='userPhone' />
                            <div>
                                <div>
                                    <label htmlFor='role'>Role</label>
                                    <div className='w-full input-field-dd px-3 py-2'>
                                        <select
                                            id='role'
                                            {...register('role')}
                                            className='w-full bg-white focus:outline-none'
                                        >
                                            <option value='admin'>Admin</option>
                                            <option value='support'>Support</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input
                            type='submit'
                            value='Add user'
                            className='btn ml-auto py-2 px-4 bg-[#3E949A] text-white'
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Staff;
