'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'

const Cooking = () => {
    const { user } = useUser();
    return (
        <div className="rounded-full bg-[#ffffff41] backdrop-blur-sm py-3 px-6 capitalize hidden md:block">
            share your plate {user?.username}
        </div>
    )
}

export default Cooking