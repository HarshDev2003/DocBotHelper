import React from 'react'

const Navbar = () => {
  return (
   <main>
   <div class="flex items-center border-2 border-solid border-black rounded">
    <img src="/logo.png" width="50" height="50" alt="Picture of the author"/>
    <div class="name align-baseline text-xl font-bold">DocBot Helper</div>
</div>

   </main>
  )
}

export default Navbar;