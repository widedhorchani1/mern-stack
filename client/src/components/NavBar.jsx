import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

function NavBar() {
   

  return (
    <header>
      <nav class=" bg-gradient-to-br from-lime-300 to-green-500 text-white flex justify-between items-center py-3 px-5 ">
        <div class="flex items-center space-x-5  ">
          <i class="fa-solid fa-bars"></i>
          <Link to="/">
            <img
              src="https://www.mersisse.com/public/uploads/all/in4E7pfgBcCaV5WNi43rciyjF3bJAhzbTwhLSnHK.png"
              class="h-10 inline  h-20"
            />
          </Link>{" "}
        </div>
        <div class=" w-[400px]  border-r border-transparent rounded flex items-center space-x-5">
          <input
            class=" peer relative w-full  rounded-full border bg-zinc-50	  bg-cover  outline-0 py-2 px-5 text-black
          "
            type="text"
            placeholder="Search ..."
           
          />

          <i class="fa-solid fa-magnifying-glass px-2 text-gray-500"></i>
        </div>
        <div class="flex items-center space-x-5 text-base ">
          <i class="fa-solid fa-user"></i>

          <button class="border px-5 py-2 rounded-full font-bold   ">
            <Link
              to="/login"
              class="text-white font-bold text-lg no-underline flex row-reverse items-center gap-[5px] "
            >
              {" "}
              Logout
              <HiOutlineLogout size={23} />
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;