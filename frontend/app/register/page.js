'use client'
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
        <div className="bg-gray-200 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10"></div>
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                  <p>Enter your information to register</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-1/2 px-3 mb-5">
                      <label htmlFor="first-name" className="text-xs font-semibold px-1">
                        First name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="first-name"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div className="w-1/2 px-3 mb-5">
                      <label htmlFor="last-name" className="text-xs font-semibold px-1">
                        Last name
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="text"
                          id="last-name"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor="email" className="text-xs font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="johnsmith@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-12">
                      <label htmlFor="password" className="text-xs font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                  {/* <a href="../login"> */}
                    <div className="flex -mx-3">
                      <div className="w-full px-3 mb-5">
                        <button className="block w-full max-w-xs mx-auto bg-white hover:bg-indigo-200 focus:bg-indigo-700 text-indigo-700 font-bold rounded-lg px-3 py-3 ">
                         <a href="../login"> Login</a>
                        </button>
                      </div>
                    </div>
                  {/* </a> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
