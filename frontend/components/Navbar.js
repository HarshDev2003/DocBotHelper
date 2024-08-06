import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>

      <nav className=" h-10">
        <div className="flex h-full items-center">
          <div className="flex h-full items-center p-1 border-2 border-solid border-white bg-white rounded-full align-center">
            <img
              src="/logo.png"
              width="40"
              height="40"
              alt="Picture of the author"
            />
            <div className="name align-baseline text-[15px] font-bold text-blue-500">
              DocBot Helper
            </div>
          </div>
          <div classNameName=""></div>
          <ul className="flex text-[15px] justify-end items-center flex-1 font-bold text-blue-500 border-2 space-x-8 border-solid border-white rounded-full bg-white">
            <Link href={""}>
              <li className="mx-2">Home</li>
            </Link>
            <Link href={""}>
              <li className="mx-2">Help</li>
            </Link>
            <Link href={""}>
              <li className="mx-2">About</li>
            </Link>
            <Link href={""}>
              <li className="mx-2 ">Setting</li>
            </Link>
            <Link href={"../login"}>
              <li className="w-20 p-1 text-center text-white border-2 border-solid border-blue-500 rounded-full bg-blue-500">
                User
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
// >>>>>>> 61ca488ac51c73e3fb90e72e0b52a69e2b54820b
  );
};

export default Navbar;
