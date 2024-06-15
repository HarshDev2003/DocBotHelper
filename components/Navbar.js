import React from 'react'

const Navbar = () => {
  return (
    <>
  <main className=' bg-blue-200'>
  <div class="flex items-center">
    <div class="flex items-center border-2 border-solid border-white bg-white rounded-full mx-5 p-2 my-2 align-center">

      <img src="/logo.png" width="50" height="50" alt="Picture of the author"/>
      <div class="name align-baseline text-xl font-bold text-blue-500">DocBot Helper</div>
    </div>
    <div className="nav-item"></div>
    <ul class="flex justify-end items-center flex-1 font-bold  text-blue-500 border-2 space-x-8 border-solid border-white rounded-full bg-white">
      <li class="mx-2">Home</li>
      <li class="mx-2">Help</li>
      <li class="mx-2">About</li>
      <li class="mx-2 ">Setting</li>
      <li class="w-28 mx-2 p-2 text-center text-white border-2 border-solid border-blue-500 rounded-full bg-blue-500">User</li>

    </ul>
  </div>
</main>

   </>
  );
};

export default Navbar;