import React from "react";

function Wishlist() {
  return (
    <div className="px-25 max-md:px-10 bg-white">
      <main className="bg-primary rounded-b-4xl flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold text-black">Wishlist</h1>
        <p className="text-lg text-black p-4">
          Save your favorite furniture items here to check them later.
        </p>
      </main>
    </div>
  );
}

export default Wishlist;
