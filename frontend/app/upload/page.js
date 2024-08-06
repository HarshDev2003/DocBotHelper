'use client'
import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';


function ChatPage() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const generateRandomResponse = () => {
    const responses = [
      "Hello there!",
      "How can I help you today?",
      "Nice to chat with you!",
      "I'm still under development.",
      "Let's keep this conversation going!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();  // Prevent the form from submitting
    
    const message = inputRef.current.value;
    console.log(message);
    if (message.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages, 
        { type: 'user', text: message }
      ]);

      // Simulate a delay for the bot's response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages, 
          { type: 'bot', text: generateRandomResponse() }
        ]);
      }, 1000);

      inputRef.current.value = '';  // Clear the input field
    }
   
  };

  return (
    <>
    <Navbar />    
  
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800">
    <div className="rounded-lg p-6 w-full flex flex-col justify-between flex-grow bg-white">
      <div className="mb-4 flex justify-center">
        <h1 className="font-bold text-3xl text-black">Chat</h1>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto mb-4 flex-grow">
        <div className="space-y-3">
          {messages.map((message, index) => (
            
            <div key={index} className={`mb-4 p-2 flex justify-start rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
              
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSendMessage} method='POST' className="flex p-4 bg-gray-200">
        <input 
          type="text" 
          ref={inputRef} 
          placeholder="Type your message..." 
          className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  </>

  );
}

export default ChatPage;
