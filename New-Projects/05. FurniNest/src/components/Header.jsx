import {
  IoSearch,
  IoReorderThreeOutline,
  IoCallOutline,
} from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Header() {
  const { isLoaded, user } = useUser();

  return (
    <header className="">
      <div className="px-25 max-md:px-10 max-sm:px-5 bg-primary p-4 select-none">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="logo text-secondary flex items-center gap-2"
          >
            <RiSofaFill size="25" />
            <h1 className="text-2xl font-bold ">FurniNest</h1>
          </NavLink>
          <div className="search max-sm:hidden flex items-center relative">
            <input
              className="bg-white font-semibold p-2 w-96 max-lg:w-60  rounded-md outline-none "
              type="text"
              placeholder="Search"
            />
            <IoSearch className="absolute right-2 " />
          </div>
          <div className="search flex items-center gap-2">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 max-lg:p-[11px] cursor-pointer rounded-md flex items-center gap-2 font-semibold max-sm:relative ${
                  isActive
                    ? "border-b-2 border-secondary text-secondary"
                    : "bg-white"
                }`
              }
            >
              <IoIosCart size="17" />
              <span className="max-lg:hidden">Cart</span>
              <span className="h-2 w-2 rounded-full bg-secondary flex p-2 items-center justify-center text-white text-[12px] max-sm:absolute max-sm:right-1 max-sm:top-1">
                3
              </span>
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `p-[11px] cursor-pointer rounded-md flex items-center gap-2 font-semibold max-sm:relative ${
                  isActive
                    ? "border-b-2 border-secondary text-secondary"
                    : "bg-white"
                }`
              }
            >
              <GrFavorite size="17" className=" " />
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                ` p-[11px] md:p-[8px] cursor-pointer rounded-md flex items-center gap-2 font-semibold max-sm:relative ${
                  isActive
                    ? "border-b-2 border-secondary text-secondary"
                    : "bg-white"
                }`
              }
            >
              <FaRegUser size="17" />

              {!isLoaded ? (
                <span className="w-12 h-6 max-sm:hidden  bg-gray-300 rounded animate-pulse"></span> // skeleton loader
              ) : !user ? (
                <span className="max-sm:hidden">Login</span>
              ) : user.fullName ? (
                <span className="max-sm:hidden max-lg:hidden">{user.fullName}</span>
              ) : (
                <span className="max-sm:hidden">User</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <nav className=" border-b-4 border-primary max-sm:pr-6 max-sm:pl-4 px-25 max-md:px-10 max-sm:py-2 py-4 bg-white font-semibold text-nowrap flex gap-4 justify-between items-center">
        <div className="flex gap-4 items-center ">
          <NavLink
            to="/all-categories"
            className={({ isActive }) =>
              `p-2 max-lg:p-[11px] cursor-pointer rounded-md flex items-center gap-2 font-semibold max-sm:relative ${
                isActive
                  ? "border-b-2 border-secondary text-secondary"
                  : "bg-white"
              }`
            }
          >
            <IoReorderThreeOutline size="25" />
            All Categories
          </NavLink>
          <div className="flex max-sm:hidden  gap-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-secondary text-secondary pb-1"
                  : "text-gray-700 hover:text-secondary"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-secondary text-secondary pb-1"
                  : "text-gray-700 hover:text-secondary"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-secondary text-secondary pb-1"
                  : "text-gray-700 hover:text-secondary"
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-secondary text-secondary pb-1"
                  : "text-gray-700 hover:text-secondary"
              }
            >
              Pages
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-secondary text-secondary pb-1"
                  : "text-gray-700 hover:text-secondary"
              }
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `p-2 max-lg:p-[11px] cursor-pointer rounded-md flex items-center gap-2 font-semibold max-sm:relative ${
                isActive
                  ? "border-b-2 border-secondary text-secondary"
                  : "bg-white"
              }`
            }
          >
            <IoCallOutline size="20" />
            <span className="">Contact</span>
          </NavLink>
        </div>
      </nav>

      <nav className="border-b-4  lg:hidden max-lg:hidden max-md:hidden max-sm:block  border-primary px-6 md:px-10 py-4 bg-white font-semibold flex justify-center items-center">
        <div className="flex gap-4 items-center  justify-center">
          {/* Links */}
          <div className="flex gap-4 items-center">
            {["/", "/shop", "/product", "/pages", "/about"].map((path, idx) => {
              const names = ["Home", "Shop", "Product", "Pages", "About"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-secondary text-secondary pb-1"
                      : "text-gray-700 hover:text-secondary"
                  }
                >
                  {names[idx]}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
