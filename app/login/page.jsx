import React from 'react'
import {Input} from "@nextui-org/input";


export default function page() {


  return (
  
  
    <>
    <div className="flex justify-between h-screen p-40 bg-gray-100">
    <div className="w-1/2 p-10 flex items-center justify-center flex-col bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">LOGIN</h1>
        {/* <p className="text-gray-600 mb-8">How to i get started lorem ipsum dolor at?</p> */}
        <div className="mb-4">
        <div className="mb-6">
  <label for="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
  <Input
    isRequired
    type="email"
    className="max-w-xs bg-gray-100 border border-gray-300 text-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>
<div className="mb-6">
  <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
  <Input
    variant="bordered"
    placeholder="Enter your password"
    className="max-w-xs border border-gray-300 text-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>

<a href="../register">Create Your Account</a>




            {/* <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> */}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login Now
        </button>
    </div>
    <div className="w-1/2 flex items-center justify-center ">
        <div className=" from-indigo-400 bg-gradient-to-b  rounded-lg shadow-lg p-10 text-center ">
            <h2 className="text-2xl font-bold mb-4">Very good works are waiting for you</h2>
            <h3 className="text-xl font-bold mb-8">Login Now!!!</h3>
            <div className="img flex justify-center items-center">
            <img className='w-1/3' src="login.png" alt="" />
            </div>
        </div>
    </div>
</div>




    {/* <div className="box w-full h-screen p-40">
    
      <div className="left w-1/2 h-auto float-left bg-blue-500">
      <div className="h1 text-center">Login</div>
      </div>
      <div className="right w-1/2 h-auto  float-right bg-red-500">right</div>
    </div> */}
    </>
  );
}

