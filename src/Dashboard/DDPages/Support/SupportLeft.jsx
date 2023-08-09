import React, { useState } from 'react';
import caret_down from '../../../assets/icon/caret-down.svg';


const SupportLeft = () => {
  const [active, setActive] = useState('');
  const [chatId, setChatId] = useState('');

  const chatNav = [
    {
      'support_type': 'Refund',
      'message_id': 123451,
      'message': 'I would like to request a refund for my recent purchase.'
    },
    {
      'support_type': 'Account',
      'message_id': 123452,
      'message': 'I having trouble accessing my account. Can you please assist?'
    },
    {
      'support_type': 'Payment',
      'message_id': 123453,
      'message': 'There seems to be an issue with my payment processing. Need help urgently.'
    },
    {
      'support_type': 'Refund',
      'message_id': 123454,
      'message': 'I received the wrong item. Can I get a refund or a replacement?'
    },
    {
      'support_type': 'Account',
      'message_id': 123455,
      'message': 'I need to update the email address associated with my account. How can I do that?'
    },
    {
      'support_type': 'Payment',
      'message_id': 123456,
      'message': 'My credit card was charged twice for the same order. Please help me resolve this.'
    },
    {
      'support_type': 'Refund',
      'message_id': 123457,
      'message': 'The product I received is damaged. I like to return it and get a refund.'
    },
    {
      'support_type': 'Account',
      'message_id': 123458,
      'message': 'I forgot my account password. How can I reset it?'
    },
    {
      'support_type': 'Payment',
      'message_id': 123459,
      'message': 'I made a payment, but the order status still shows as unpaid. What should I do?'
    },
    {
      'support_type': 'Refund',
      'message_id': 123460,
      'message': 'I accidentally placed this order. Can I cancel it and get a refund?'
    }
  ];


  return (
    <div className='py-5 px-8'>
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
      <div>
        {
          chatNav.map(chat => <div
            key={chat.message_id}
            className='w-64 p-3'
          >
            <h5 className='flex items-center gap-4 text-gray-400'>
              <span className='w-2 h-2 rounded-full bg-[#16A34A]' /> {chat.support_type}
            </h5>
            <h3>Order ID#{chat.message_id}</h3>
            <p className='text-gray-400'>{chat.message}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default SupportLeft;
