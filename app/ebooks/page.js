import React from 'react'
import Card from '../components/Card'
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const page = () => {
    return (
        <div >
            <div className="flex justify-between items-center relative">
               <Link className='absolute left-5' href={"/"}><ChevronLeft size={30}/></Link> 
                <h1 className='text-3xl font-medium w-full text-center text-blue-500 whitespace-nowrap p-5'>Ebooks</h1>
            </div>
            <Card />
        </div>
    )
}

export default page
