import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Use your server address here

const Chat = () => {
  useEffect(() => {
    socket.on('welcome', (message) => {
      console.log(message);
    });

    // Cleanup on component unmount
    return () => socket.off('welcome');
  }, []);

  return <div>Chat Component</div>;
};

export default Chat;
