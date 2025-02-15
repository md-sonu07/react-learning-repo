import React from "react";
import { Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-600 to-pink-700 text-white flex flex-col items-center justify-center px-4">
      <h2 className="text-5xl font-bold flex items-center gap-3">
        <Phone size={48} className="text-yellow-300" />
        Contact Page
      </h2>
      <p className="mt-4 text-xl max-w-xl text-center">
        Reach out to us via email or phone. We are here to help!
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <p className="flex items-center gap-2 text-xl">
          <Mail size={24} /> contact@example.com
        </p>
        <p className="text-xl">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
