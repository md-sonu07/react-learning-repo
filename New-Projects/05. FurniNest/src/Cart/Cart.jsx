import React from "react";

function Cart() {
  return (
    <div className="px-25 max-md:px-10 bg-white">
      <main className="bg-primary rounded-b-4xl flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold text-black">Cart</h1>
        <p className="text-lg text-black p-4">
          Review the items you’ve added to your cart before checkout.
        </p>
      </main>
    </div>
  );
}

export default Cart;
