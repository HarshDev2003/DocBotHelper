import React from 'react'
import Navbar from '@/components/Navbar';


const page = () => {
  return (
   <>
   <Navbar />
   <div className="left float-left w-2/3 h-screenfrom-indigo-400 bg-gradient-to-b  rounded-lg shadow-lg">
   <div className=" flex flex-col items-center justify-center min-h-screen">
            <div className=" rounded-lg p-6 w-full  flex flex-col justify-between flex-grow">
                <div className="mb-4 flex justify-center">
                    <h1 className=" font-bold text-3xl text-white">Chat</h1>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto mb-4 flex-grow">
                    <div className="space-y-3">
                        <div className="flex justify-start">
                            <div className="bg-blue-500 text-white rounded-lg p-2">
                                <p>Hi there!</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-gray-300 rounded-lg p-2">
                                <p>Hello!</p>
                            </div>
                        </div>
                        {/* Add more chat bubbles here */}
                    </div>
                </div>
                <div className="flex">
                    <textarea className="flex-1 border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" rows="2" placeholder="Type a message..."></textarea>
                    <button className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold">Send</button>
                </div>
            </div>
        </div>
 
    
  

   
   
   
   </div>
   <div className="right flex justify-center items-center flex-col float-right w-1/3 h-screen bg-blue-400">
   <div className="text font-bold w-auto text-3xl text-white">Preview Your Document</div>


   <div className="file-uploaded h-72vh "></div>
   
   <div className="flex justify-center items-end ">
 
    <img src="doc.png" alt="" />
   </div>
     <button className=' btn w-72 cursor-pointer  mx-2 p-2 text-center text-white font-bold text-3xl bg-blue-500 border-2 border-solid rounded-full '>Upload New File </button>
   </div>
   </>
  );
};

export default page