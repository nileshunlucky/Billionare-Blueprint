import Image from 'next/image'
import React from 'react'

const Course = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image className='w-full object-contain' src="/Iman Gadzhi - Influencer Ignited.jpeg" alt="Ai Copywriting" width={500} height={500} />
                <h1 className="ml-3 text-lg font-medium">Influencer Ignited Masterclass</h1>
                <p>₹87,000.00</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <Image className='w-full object-contain' src="/Ai Copywritting.jpeg" alt="Ai Copywriting" width={500} height={500} />
                <h1 className="ml-3 text-lg font-medium">Ai Copywriting Masterclass</h1>
                <p>₹23,000.00</p>
            </div>
        </div>
    )
}

export default Course
