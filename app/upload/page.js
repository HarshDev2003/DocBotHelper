import React from 'react'
import Navbar from '@/components/Navbar';


const page = () => {
  return (
   <>
   <Navbar />
   <div className="left float-left w-2/3 h-screen bg-red-700 ">
   
   
   
   
   </div>
   <div className="right flex justify-center items-center flex-col float-right w-1/3 h-screen bg-green-700">
   <div className="text">Preview Your Document</div>


   <div className="file-uploaded h-72vh"></div>
   
   <div className="flex justify-center items-end ">
   <button className=' btn w-72 cursor-pointer  mx-2 p-2 text-center text-white font-bold text-3xl bg-blue-500 border-2 border-solid rounded-full '>Upload New File </button>
   </div>
   </div>
   </>
  );
};

export default page