import React from 'react';
import arrow from '../../assets/icon/cd-arrow-right-01.svg';
import products from '../../assets/icon/cd-products.svg';
import avatar from '../../assets/icon/avatar.svg';
import { Link } from 'react-router-dom';

const NotificationDropdown = () => {
    const notificationData = [
        {
            id: 1,
            icon: products,
            title: "We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!",
            time: 59
        },
        {
            id: 2,
            icon: avatar,
            title: "You have a bug that needs to be fixed.",
            time: 0
        },
        {
            id: 3,
            icon: products,
            title: "We've reviewed item #3163652 (Fitbit Versa...). You can now take it to checkout!",
            time: 30
        }
    ]

    return (
        <section className='w-[20rem] bg-white p-5 rounded-xl'>
            <div className='flex justify-between items-center pb-3 border-b'>
                <span>Notification</span>
                <Link
                    to='/all-products'
                    className='duration-300 active:scale-90'
                >
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
            <div className='bg-gray-200 flex flex-col gap-[1px]'>
                {
                    notificationData.map(data => <div
                        key={data.id}
                        className='py-2 bg-white flex items-start gap-2'
                    >
                        <img
                            src={data.icon}
                            alt="icon"
                            className='bg-accent rounded-full'
                        />
                        <div>
                            <h4>{data.title}</h4>
                            <p className='text-gray-400'>
                                {
                                    data.time === 0 ? 'Just now' : `${data.time} minutes ago`
                                }
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default NotificationDropdown;
