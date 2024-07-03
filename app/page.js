


// <<<<<<< HEAD
// import React from 'react'
// import Navbar from '@/components/Navbar'

// const page = () => {
//   return (
    
//     <div className= "">
     
//       <div className="bg-indigo-300">
//       <div className="left float-left  mx-30rem w-1/2">
//       <div className="text text-center h-screen w-full flex flex-col space-y-9 justify-center items-center text-3xl font-bold">"Discover Answers Instantly <br /> with Our PDF Q&A Bot" <br />

//       <div className="sub-test text-xl font-light ">Upload your PDFs and get quick, reliable <br />
// responses to all your questions. Your personal <br />
// digital assistant is here to help!</div>
//       <btn className=" btn w-72 cursor-pointer  mx-2 p-2 text-center text-blue-500 border-2 border-solid rounded-full ">Upload</btn>
      
//       </div>
//       </div>
//       <div className="right float-right w-1/2 h-screen flex justify-center items-center">
//       <img className='w-1/2 ' src="/right.png " alt="" />
//       </div>
//       </div>
//     </div>
   
//   )
// }

// export default page
// =======
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
        <Navbar/>
    <div className="from-indigo-400 bg-gradient-to-b  rounded-lg shadow-lg h-[80vh] xl:h-screen">
        <div className="left float-left  mx-30rem w-1/2">
          <div className="text text-center h-screen w-full flex flex-col space-y-5 justify-center items-center text-3xl font-bold">
            Discover Answers Instantly <br /> with Our PDF Q&A Bot <br />
            <div className="text-sm font-light ">
              Upload your PDFs and get quick, reliable <br />
              responses to all your questions. Your personal <br />
              digital assistant is here to help!
            </div>
            <Link href={"/upload"}>
            <button className="px-2 py-1 text-lg text-center text-blue-500 border-2 border-solid rounded-lg">
              Upload
            </button>
            </Link>
          </div>
        </div>
        <div className="relative float-right w-1/2 h-screen flex justify-center items-center">
          <Image
            src="/right.png"
            alt="Hero"
            fill
          />
        </div>
      </div>
      </>
  );
};

export default page;

