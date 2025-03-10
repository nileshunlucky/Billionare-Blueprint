"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import Accordian from "./Accordian";

const Hero = () => {
    const [showTapEffect, setShowTapEffect] = useState(true);

    return (
        <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className="md:w-1/2 flex justify-center items-center relative">
                {/* Tap Effect in the Center */}
                <AnimatePresence>
                    {showTapEffect && (
                        <motion.div
                            className="absolute w-12 h-12 bg-white/60 rounded-full flex items-center justify-center"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                        />
                    )}
                </AnimatePresence>

                {/* Clickable Image */}
                <Link href="/ebooks">
                    <motion.div
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowTapEffect(false)}
                    >
                        <Image
                            src="/Billionaire Blueprint ebook.jpeg"
                            alt="Billionaire Blueprint"
                            width={500}
                            height={300}
                            className="cursor-pointer rounded-lg"
                            priority
                        />
                    </motion.div>
                </Link>
            </div>
            <div className="md:w-1/2 p-5">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className='text-xl font-medium whitespace-nowrap'>Billionaire Blueprint Bundle</h1>
                        <p>Learn High Income skills and develop your Mindset by thinking out of the box.</p>
                        <h1 className='text-xl font-boldwhitespace-nowrap'>₹299 Only</h1>
                    </div>
                    <div className="">
                        <Link href={"/payment"}>
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded cursor-pointer w-full'
                                onClick={() => {
                                    if (window.fbq) {
                                        window.fbq('track', 'Checkout', { value: 299, currency: 'INR' });
                                    }
                                }}
                            >
                                Invest Now!
                            </button>
                        </Link>
                    </div>
                    <hr className='my-5' />
                    <Accordian />
                </div>
            </div>
        </div>
    )
}

export default Hero
