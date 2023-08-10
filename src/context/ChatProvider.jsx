import React, { createContext, useEffect, useState } from 'react';

export const ChatContext = createContext(null);

const ChatProvider = ({ children }) => {
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('/chat.json', options)
      .then(response => response.json())
      .then(response => {
        setChatData(response)
      })
      .catch(err => console.error(err));
  }, [])

  const chatInfo = { chatData }

  return (
    <ChatContext.Provider value={chatInfo}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
