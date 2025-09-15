import { FaArrowLeftLong , FaArrowRightLong } from "react-icons/fa6";

import { NavLink } from "react-router-dom";


function Home() {
  return (
    <div className="px-25 max-md:px-10 bg-white">
      <main className="relative bg-primary rounded-b-4xl flex flex-col md:flex-row items-center justify-between md:px-20 max-lg:px-10 md:py-10">

          <div className="absolute bottom-5 left-6  bg-white text-secondary font-bold p-2 rounded-full ">
            <FaArrowLeftLong size="20" />
          </div>
        <div className=" flex flex-col items-start gap-2 md:text-wrap  max-sm:px-5 pt-10 md:py-10">
          <p className="text-sm">WELCOME TO CHAIRY</p>
          <h1 className="font-bold text-4xl pb-5 md:w-[450px] ">
            Best Furniture Collection For Your Interior.
          </h1>
          <NavLink to="/shop" className="font-semibold items-center p-2 cursor-pointer flex gap-2 bg-secondary text-white border-2 border-primary rounded-lg">
            Shop Now <FaArrowRightLong />
          </NavLink>
        </div>

        <div className=" lg:relative min-[768px]: flex items-center justify-center  lg:w-[250px] max-md:w-[200px] max-sm:w-[200px] max-sm:pb-10 md:mr-10">
          <div className="lg:flex hidden bg-white rounded-b-full p-45 py-50 shadow-lg -ml-10 -mt-11">
          </div>
          <img
            src="https://giaic-hackathon-kohl.vercel.app/_next/image?url=/_next/static/media/hero.36198d71.png&w=1920&q=75"
            alt="Furniture"
            className="w-full lg:absolute inset-0   h-auto object-cover"
          />
        </div>
          <div className="absolute bottom-5 right-6   bg-white text-secondary font-bold p-2 rounded-full">
            <FaArrowRightLong size="20" />
          </div>


      </main>
    </div>
  );
}

export default Home;
