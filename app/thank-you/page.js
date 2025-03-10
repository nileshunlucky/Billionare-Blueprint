"use client";

import React, { useEffect } from "react";
import Link from "next/link";
// import { FaCheckCircle } from "react-icons/fa"; 

const ThankYouPage = () => {
  useEffect(() => {
    window.fbq('track', 'Purchase', { value: 299.99, currency: 'INR' });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 to-blue-900 p-3">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md w-full">
        {/* <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" /> */}
        <h1 className="text-3xl font-semibold text-gray-800 whitespace-nowrap">
          Purchase Successful!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for your order. Your eBook download link has been sent to
          your email.
        </p>
        <Link href="/">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
