import React from 'react'
import {
    ChefHatIcon,
    Beef,
    Beer
} from "lucide-react"
import Cooking from './Cooking'
import Link from 'next/link'
const Chef = () => {
    return (
        <div className='border-b-[0.01px] border-[#f7f7f749]'>

            <div className='flex justify-between'>
                <Link href={'/cook'} className="flex gap-2 items-center p-4 w-fit">
                    <div className='p-3 rounded-full bg-red-600 w-fit'>
                        <ChefHatIcon size={18} />
                    </div>
                    <Cooking />
                </Link>

                <div className='flex gap-3 items-center'>
                    <div className="bg-orange-700 p-3 rounded-full">
                        <Beef size={18} />
                    </div>
                    <div className="bg-yellow-600 p-3 rounded-full">
                        <Beer size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chef