import React from "react";
import { FiBarChart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { PiCardsThree } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import Categories from "./Categories";



function Header() {
  return (
    <>

    <header className="bg-white flex py-6 md:px-25 px-10 justify-between items-center border-b-1 border-gray-100">
      {/* Logo */}
      <div className=" flex items-center gap-2 text-xl font-bold text-nowrap">
        <FiBarChart className="bg-secondary text-primary text-4xl p-1 rounded-md -rotate-270 transform scale-x-[-1]" />
        <h1 className="text-primary ">MegaMart</h1>
      </div>

      {/* Search Bar */}
      <div className="flex gap-10 ">
        <div className="max-md:hidden ">

          <div className="flex relative items-center gap-2">
            <FiSearch className="size-5 text-primary cursor-pointer font-bold absolute left-2" />
            <input

              className=" bg-secondary text-md font-medium pl-9 p-2 px-4 rounded-lg outline-none max-lg:w-70 w-96 "
              type="text"
              placeholder="Search groceries and more..."
            />
            <PiCardsThree className="size-6 text-primary cursor-pointer absolute right-2" />

          </div>
        </div>

        {/* Nav */}

        <nav className="flex gap-4 font-semibold text-tColor text-md">
          <a href="" className="flex items-center gap-2">
            <LuUser className="size-5 text-primary" />
            <span className="max-lg:hidden ">Sign Up / Sign In</span>
          </a>
          <a href="" className="flex items-center gap-2 border-gray-200 border-l-2 pl-4">
            <FiShoppingCart className="size-5 text-primary" />
            <span className="max-lg:hidden">Cart</span>
          </a>
        </nav>
      </div>
    </header>
    <div className=" bg-white flex gap-6 overflow-x-auto md:px-25 px-10 py-4 border-b-1 border-gray-100">
    <Categories value="Groceries" />
    <Categories value="Electronics"/>
    <Categories value="Furniture"  />
    <Categories value="Home & Kitchen"  />
    <Categories value="Beauty & Personal Care"  />
    <Categories value="Health & Fitness"  />


    </div>
    </>
  );
}

export default Header;
