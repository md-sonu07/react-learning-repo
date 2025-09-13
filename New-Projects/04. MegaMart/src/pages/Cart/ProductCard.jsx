import React from "react";

function ProductCard({ name, price, category, image }) {
  return (
    <>
      <div className=" cursor-pointer">
        <div className="w-[200px]  relative bg-card rounded-t-2xl">
          <div className="flex flex-1 absolute right-0 justify-end">
            <span className="flex flex-col bg-primary text-sm text-white font-light px-3 py-2 rounded-tr-2xl rounded-bl-2xl ">
              20% <span className="">Off</span>
            </span>
          </div>
          <img src={image} className="bg-cover rounded-4xl p-4" alt="" />
        </div>
        <div className="border-2 border-secondary rounded-b-2xl p-3">
          <h3 className="font-semibold pb-1">{name}</h3>
          <p className="font-semibold ">
            ₹{price}
            <span className="font-light text-tColor line-through pl-4 ">
              ₹7499
            </span>
          </p>
          <p className="text-primary font-semibold border-t-2 border-tColor mt-2 pt-2">
            Category {category}
          </p>
        </div>
      </div>
    </>
  );
}

export function ProductTopCat({ category, image }) {
  return (
    <div className="flex flex-col items-center cursor-pointer ">
      <div className="w-[100px]  h-[100px] border-2 border-gray-200 rounded-full overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={category}
          className="w-full h-full p-4 object-cover"
        />
      </div>
      <p className="mt-2 text-center">{category}</p>
    </div>
  );
}
export function PrdTopElectBrand({ img }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[350px] cursor-pointer ">
        <img
          src={img}
          alt="Mobile"
          className="w-full h-full rounded-2xl p-4 object-cover"
        />
      </div>
    </div>
  );
}

export function PrdDailyEssentials({ name, image }) {
  return (
    <div className="  cursor-pointer">
      {/* Product Image Section */}
      <div className="flex w-[150px] h-[150px] hover:border-1 border-primary bg-card rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-[150px] rounded-4xl object-cover p-4"
        />
      </div>

      {/* Price */}
      <p className=" flex justify-center text-base  mt-2">{name}</p>
      <span className="font-medium flex justify-center">UP to 50% OFF</span>
    </div>
  );
}
export default ProductCard;
