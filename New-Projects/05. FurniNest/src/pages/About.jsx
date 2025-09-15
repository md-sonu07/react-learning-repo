import React from "react";

function About() {
  return (
    <div className="px-25 max-md:px-10 bg-white">
      <main className="bg-primary rounded-b-4xl flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold text-black">About Us</h1>
        <p className="text-lg text-black p-4">
          We are passionate about creating stylish and comfortable furniture
          that transforms your living space.
        </p>
      </main>
    </div>
  );
}

export default About;
