"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

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
                        <h1 className='text-xl font-medium whitespace-nowrap'>Billionaire Blueprint e-book bundle</h1>
                        <p>Start your journey by reading this Top 10 Business &amp; Finance e-book&apos;s</p>
                        <h1 className='text-xl font-boldwhitespace-nowrap'>₹299 Only</h1>
                    </div>
                    <div className="">
                        <Link href={"/payment"}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded cursor-pointer w-full'>Invest Now!</button></Link>
                    </div>
                    <hr className='my-5' />
                    <div className="">
                        <Accordion type="single" collapsible className="md:w-[90%] w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Whats inside the bundle?</AccordionTrigger>
                                <AccordionContent>
                                    Top 10 Most valuable Business & Finance e-books.
                                    <br /> PDF (Tap on the ebook bundle to know more)
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>What ROI will I get?</AccordionTrigger>
                                <AccordionContent>
                                    Infinite, because you are Investing in yourself.
                                    <br />  You start Thinking Outside The Box. (Mindset)
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Investing & Refund Policy</AccordionTrigger>
                                <AccordionContent>
                                    Once the investment is made,
                                    the refund will be not available. Because its a one-time investment. (Digital products are not refundable)
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Support</AccordionTrigger>
                                <AccordionContent>
                                    If you have any problem with payment. You can DM us on our Instagram Id @moneyxpsychology.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
