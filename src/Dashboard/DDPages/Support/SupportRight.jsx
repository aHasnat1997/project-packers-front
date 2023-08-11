import React, { useContext } from 'react';
import { ChatContext } from '../../../context/ChatProvider';
import { useParams } from 'react-router-dom';
import caret_down from '../../../assets/icon/caret-down.svg';
import send from '../../../assets/send.png';
import user_icon from '../../../assets/icon/user_icon.svg';
import UserIcon from '../../../components/UserIcon';

const SupportRight = () => {
  const { chatData } = useContext(ChatContext);
  const { id } = useParams();
  const singleChat = chatData?.find(data => data?.message_id === parseInt(id));
  // console.log(supportChat);

  return (
    <div className='w-full h-[calc(100vh-9rem)] relative'>
      <div className='w-full shadow py-5 px-8 flex items-center justify-between'>
        <div>
          <h5 className='flex items-center gap-4 text-gray-400'>
            <span className='w-2 h-2 rounded-full bg-[#16A34A]' /> {singleChat?.support_type}
          </h5>
          <h3>Order ID#{singleChat?.message_id}</h3>
        </div>
        <div className='flex items-center gap-2'>
          <p>Open</p>
          <img src={caret_down} alt='caret_down' />
        </div>
      </div>

      <div className='w-full h-[calc(85vh-9rem)] py-5 px-8 overflow-auto no-scrollbar text-justify'>
        <div className='mb-16 flex justify-center'>
          <div className='text-center flex flex-col items-center'>
            <img
              src={user_icon}
              alt='user_icon'
              className='w-20'
            />
            <h4 className='text-xl font-semibold'>{singleChat?.user_name}</h4>
            <p>Joined the Chat</p>
            <p>{singleChat?.chat_start}</p>
          </div>
        </div>
        {
          singleChat?.chats?.map((chat, i) => <div
            className='flex items-start gap-2'
            key={i}
          >
            {
              chat?.sender === 'User' && <img src={user_icon} alt='user_icon' />
            }
            <div className={`w-80 p-4 rounded-xl ${chat?.sender === 'User' && 'bg-[#092F3F]' || chat?.sender === 'Support' && 'bg-[#CFF6EF] ml-auto'}`}>
              <div className='w-full flex items-center justify-between'>
                <h6 className='text-[#3E949A]'>{chat?.sender}</h6>
                <h6 className='text-gray-400'>{chat?.timestamp}</h6>
              </div>
              <p className={chat?.sender === 'User' && 'text-white mt-2' || chat?.sender === 'Support' && 'text-black mt-2'}>
                {chat?.message}
              </p>
            </div>
            {
              chat?.sender === 'Support' && <UserIcon firstName='Kodu' lastName='' />
            }
          </div>)
        }

      </div>

      <form className='absolute -bottom-10 left-[calc(50%-47.5%)] w-[95%] bg-white overflow-hidden rounded-lg flex items-end'>
        <textarea
          className='w-full p-5 focus:outline-none no-scrollbar'
          placeholder='Type your message'
        />
        {/* <input
          type='submit'
          value='Send'
          className='btn-primary py-3 px-10 flex-1 text-lg mx-2'
        /> */}
        <img
          src={send}
          alt='send'
          className='w-24 py-3 pl-10 pr-4 flex-1 text-lg cursor-pointer active:animate-send'
        />
      </form>
    </div>
  );
};

export default SupportRight;
