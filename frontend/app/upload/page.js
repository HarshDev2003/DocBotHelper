'use client'
import React from 'react'
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';




const Page = () => {
    const [messages, setMessages] = useState([
        { text: 'Hi there!', type: 'received' },
        { text: 'Hello!', type: 'sent' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = async () => {
        if (newMessage.trim() !== '') {
            // Send the message to the backend
          
                    setMessages([...messages, { text: newMessage, type: 'sent' }]);
                    setNewMessage('');
                } else {
                    console.error('Failed to send message');
                }
            
        }
    


    const handleReceive = () => {
        const receivedMessage = "This is a received message";
        setMessages([...messages, { text: receivedMessage, type: 'received' }]);
    };

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-800">
                <div className="rounded-lg p-6 w-full  flex flex-col justify-between flex-grow bg-white">
                    <div className="mb-4 flex justify-center">
                        <h1 className="font-bold text-3xl  text-black">Chat</h1>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto  mb-4 flex-grow">
                        <div className="space-y-3 ">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex justify-${message.type === 'sent' ? 'end' : 'start'}`}>
                                    <div className={`bg-${message.type === 'sent' ? 'gray-300' : 'blue-500'} text-${message.type === 'sent' ? 'black' : 'white'} rounded-lg p-2 `}>
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex">
                        <textarea
                            className="flex-1 border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="2"
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        ></textarea>
                        <button
                            className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                     
                    </div>
                </div>
            </div>
                        
                   
           

            {/* <div className="right flex justify-center items-center flex-col float-right w-1/3 h-screen bg-blue-400">
                <div className="text font-bold w-auto text-3xl text-white">Preview Your Document</div>

                <div className="file-uploaded h-72vh"></div>

                <div className="flex justify-center items-end">
                    <img src="doc.png" alt="" />
                </div>
                <button className="btn w-72 cursor-pointer mx-2 p-2 text-center text-white font-bold text-3xl bg-blue-500 border-2 border-solid rounded-full">
                    Upload New File
                </button>
            </div> */}
        </>
    );
};

export default Page;