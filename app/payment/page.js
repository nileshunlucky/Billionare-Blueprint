"use client";

import React, { useState } from "react";
import { ChevronLeft } from 'lucide-react';
import Link from "next/link";

const loadRazorpay = () => {
    return new Promise((resolve) => {
        if (window.Razorpay) {
            resolve(true);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const Page = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        setLoading(true);

        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
            alert("Failed to load Razorpay. Please try again.");
            setLoading(false);
            return;
        }

        const res = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();

        if (data.id) {
            const options = {
                key: "rzp_live_rZzJDbHYxx55as", // Replace with Razorpay Key
                amount: 29900, // ₹299 in paise
                currency: "INR",
                name: "Billionaire Blueprint",
                description: "Ebook Bundle",
                order_id: data.id,
                handler: async function (response) {
                    alert("Payment Successful! eBook link sent to your email.");

                    // Send email with eBook link
                    await fetch("/api/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email }),
                    });

                    setLoading(false);
                    window.location.href = "/thank-you";
                },
                prefill: { email },
                theme: { color: "#0d6efd" },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } else {
            alert("Payment failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 p-6 min-h-screen bg-gray-100">
            <Link href="/"><ChevronLeft className="absolute left-5 top-5" size={30} /></Link>
            <h1 className="text-2xl text-blue-600 font-semibold my-3">Order Summary</h1>

            <div className="border shadow-lg flex flex-col gap-4 rounded-xl p-4 bg-white md:w-[50%] w-full">
                <div className="flex items-center">
                    <img className="w-14 rounded-md" src="/Billionaire Blueprint ebook.png" alt="billionaire blueprint" />
                    <h1 className="ml-3 text-lg font-medium">Billionaire Blueprint eBook Bundle</h1>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Total</h1>
                        <p className="text-sm text-gray-500">Includes ₹14.24 in taxes</p>
                    </div>
                    <p className="font-bold text-lg">
                        <span className="text-sm font-light text-gray-500">INR</span> ₹299
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:w-[50%] w-full border shadow-lg p-4 rounded-xl bg-white">
                <input
                    className="border p-3 w-full focus:outline-none rounded-md"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    onClick={handlePayment}
                    className={`text-white w-full py-3 px-4 rounded-md font-medium ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Invest Now"}
                </button>
            </div>
        </div>
    );
};

export default Page;
