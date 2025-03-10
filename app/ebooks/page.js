import React from 'react'
import Card from '../components/Card'
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Course from '../components/Course';

const page = () => {
    return (
        <div >
            <div className="flex justify-between items-center relative my-3">
               <Link className='absolute left-5' href={"/"}><ChevronLeft size={30}/></Link> 
               <h1 className='text-3xl font-medium w-full text-center text-blue-500 whitespace-nowrap'>Courses</h1>
            </div>
            <Course/>
                <h1 className='text-3xl font-medium w-full text-center text-blue-500 whitespace-nowrap mt-3'>Ebooks</h1>
            <Card />
        </div>
    )
}

export default page
