import React from "react";
import ProductCard, {
  PrdDailyEssentials,
  PrdTopElectBrand,
  ProductTopCat,
} from "../Cart/ProductCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import product from "../../assets/product.json";

function Home() {
  return (
    <div>
      <main className="">
        <section className="flex relative md:px-25 px-10 items-center justify-center  pt-8 pb-18 bg-white w-full">
          <div className="absolute left-0 md:left-15 bg-white md:p-3 p-2 rounded-full cursor-pointer ">
            <div className=" text-3xl md:p-4 p-2 cursor-pointer rounded-full bg-secondary text-primary">
              <MdKeyboardArrowLeft />
            </div>
          </div>
          <img
            src="/banner/mobile-banner.jpeg"
            className="w-full h-80 object-cover rounded-2xl"
            alt=""
          />

          <div className="absolute right-0 md:right-15 bg-white md:p-3 p-2  rounded-full cursor-pointer ">
            <div className=" text-3xl md:p-4 p-2 cursor-pointer rounded-full bg-secondary text-primary">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </section>

        <section className=" md:px-25 px-10 bg-white ">
          <div className="flex">
            <h1 className="font-semibold text-xl py-2 border-b-3  text-nowrap text-tColor border-primary">
              Best deal on
              <span className="text-primary"> Smartphones</span>
            </h1>
            <div className="border-b-2 w-full flex justify-end items-center border-tColor">
              <h1 className="text-tColor font-medium flex items-center justify-center ">
                View All
                <MdKeyboardArrowRight className="size-6 text-primary " />
              </h1>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto py-10">
            {product.slice(0, 5).map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                category={item.category}
                // rating={item.rating}
              />
            ))}
          </div>
        </section>

        <section className=" md:px-25 p-10 bg-white my-10 ">
          <div className="flex">
            <h1 className="font-semibold text-xl py-2 border-b-3  text-nowrap text-tColor border-primary">
              Shop From
              <span className="text-primary"> Top Categories</span>
            </h1>
            <div className="border-b-2 w-full flex justify-end items-center border-tColor">
              <h1 className="text-tColor font-medium flex items-center justify-center ">
                View All
                <MdKeyboardArrowRight className="size-6 text-primary " />
              </h1>
            </div>
          </div>
          <div className="flex gap-7 overflow-x-auto py-10">
            {product.slice(5, 14).map((item) => (
              <ProductTopCat
                key={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
              />
            ))}
          </div>
        </section>
        <section className=" md:px-25 p-10 my-10 bg-white ">
          <div className="flex">
            <h1 className="font-semibold text-xl py-2 border-b-3  text-nowrap text-tColor border-primary">
              Top
              <span className="text-primary"> Electornics Brands</span>
            </h1>
            <div className="border-b-2 w-full flex justify-end items-center border-tColor">
              <h1 className="text-tColor font-medium flex items-center justify-center ">
                View All
                <MdKeyboardArrowRight className="size-6 text-primary " />
              </h1>
            </div>
          </div>
          <div className="flex gap-7 overflow-x-auto pt-10">
            <PrdTopElectBrand img="/smart-phones/mobiles/El.png" />
            <PrdTopElectBrand img="/smart-phones/mobiles/El2.png" />
            <PrdTopElectBrand img="/smart-phones/mobiles/El3.png" />
          </div>
          <div className="flex justify-center">
            <span className="text-4xl">
              <BsThreeDots />
            </span>
          </div>
        </section>

        <section className=" md:px-25 p-10 my-10 bg-white ">
          <div className="flex">
            <h1 className="font-semibold text-xl py-2 border-b-3  text-nowrap text-tColor border-primary">
              Daily
              <span className="text-primary"> Essentials</span>
            </h1>
            <div className="border-b-2 w-full flex justify-end items-center border-tColor">
              <h1 className="text-tColor font-medium flex items-center justify-center ">
                View All
                <MdKeyboardArrowRight className="size-6 text-primary " />
              </h1>
            </div>
          </div>
          <div className="flex  gap-4 overflow-x-auto py-10 ">
            {product.slice(3, 10).map((item) => (
              <PrdDailyEssentials
                key={item.id}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
