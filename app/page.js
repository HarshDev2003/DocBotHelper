import React from 'react'

const page = () => {
  return (
    <body className= "body">
      <div className="body  bg-blue-400">
      <div className="left float-left  mx-30rem w-1/2">
      <div className="text text-center h-screen w-full flex flex-col space-y-9 justify-center items-center text-3xl font-bold">"Discover Answers Instantly <br /> with Our PDF Q&A Bot" <br />

      <div className="sub-test text-xl font-light ">Upload your PDFs and get quick, reliable <br />
responses to all your questions. Your personal <br />
digital assistant is here to help!</div>
      <btn className=" btn w-72 cursor-pointer  mx-2 p-2 text-center text-blue-500 border-2 border-solid rounded-full ">Upload</btn>
      
      </div>
      </div>
      <div className="right float-right w-1/2 h-screen flex justify-center items-center">
      <img className='w-1/2 ' src="/right.png " alt="" />
      </div>
      </div>
    </body>
  )
}

export default page