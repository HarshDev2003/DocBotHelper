
'use client'


import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import { useState } from 'react'

const page = () => {
  const [file, setFile] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.append('file', file)

      const res = await fetch('/upload', {
        method: 'POST',
        body: data
      })

      // handle the error
      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText)
      }

      // Optionally, handle the success here
      console.log('File uploaded successfully')
    } catch (e) {
      // Handle errors here
      console.error('Error uploading file:', e)
    }
  }

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
            {/* <Link href={"/upload"}> */}
            {/* <button className="px-2 py-1 text-lg text-center text-blue-500 border-2 border-solid rounded-lg"> */}
            <div className="h-3">
            <form onSubmit={"/upload"}>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
          }
        }}
      />
      <input className="" type="submit" value="Upload" />
    </form>
            {/* </button> */}
            {/* </Link> */}
          </div>
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

