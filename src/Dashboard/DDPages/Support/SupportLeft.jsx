import React, { useContext, useState } from 'react';
import caret_down from '../../../assets/icon/caret-down.svg';
import { Link, NavLink } from 'react-router-dom';
import { ChatContext } from '../../../context/ChatProvider';


const SupportLeft = () => {
  const { chatData } = useContext(ChatContext);
  const [active, setActive] = useState('');

  return (
    <div className='h-[calc(100vh-150px)] py-5 px-8'>
      <div className='flex items-center divide-x border rounded-lg'>
        <button
          onClick={() => setActive('Open')}
          className={`flex items-center gap-1 px-4 py-2 ${active === 'Open' && 'bg-primary text-white'}`}
        >
          <span className='w-1 h-1 rounded-full bg-[#16A34A]' /> Open
        </button>
        <button
          onClick={() => setActive('Close')}
          className={`flex items-center gap-1 px-4 py-2 ${active === 'Close' && 'bg-primary text-white'}`}
        >
          <span className='w-1 h-1 rounded-full bg-[#EF4444]' /> Close
        </button>
        <button
          onClick={() => setActive('')}
          className='shrink-0 px-4 py-2  flex items-center gap-2'
        >
          Support type <img src={caret_down} alt='caret_down' />
        </button>
      </div>
      <div className='h-full mt-5 overflow-y-scroll no-scrollbar space-y-5'>
        {
          chatData?.map(chat => <div
            key={chat?.message_id}
            className='border-b flex items-center'
          >
            <NavLink
              to={`${chat?.message_id}`}
              end={chat?.message_id && true}
              className={({ isActive }) => isActive ? 'bg-secondary w-1 h-32 rounded-full' : 'w-1 h-32 rounded-full'}
            />
            <Link
              to={`${chat?.message_id}`}
            >
              <div className='w-64 p-3'>
                <h5 className='flex items-center gap-4 text-gray-400'>
                  <span className='w-2 h-2 rounded-full bg-[#16A34A]' /> {chat?.support_type}
                </h5>
                <h3>Order ID#{chat?.message_id}</h3>
                <p className='text-gray-400'>{chat?.last_message}</p>
              </div>
            </Link>
          </div>)
        }
      </div>
    </div>
  );
};

export default SupportLeft;
