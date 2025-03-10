import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Accordian = () => {
    return (
        <div className="">
            <Accordion type="single" collapsible className="md:w-[90%] w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Whats inside the bundle?</AccordionTrigger>
                    <AccordionContent>
                        Ai copywriting and Influencer Ignited by Iman Gadzhi And Top 10 Business & Finance e-book's
                        <br /> PDF and Zip file (Tap on the bundle to know more)
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
    )
}

export default Accordian
