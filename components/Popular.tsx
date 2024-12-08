import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Popular = () => {
    return (
        <div>
            <div className="flex gap-2">
                <div className="rounded-full bg-zinc-300 h-[30px] w-[30px]">

                </div>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Username</p>
                    <p className="text-zinc-400 text-xs">
                        Date & Time
                    </p>
                </div>

            </div>

            <div className="flex gap-3 mt-3">
                <Link href={"search/tags?"} className=''>
                    #tags
                </Link>
                <Link href={"search/tags?"}>
                    #tags
                </Link>
                <Link href={"search/tags?"}>
                    #tags
                </Link>
            </div>

            <div className='w-full px-3 h-[180px] relative'>
                <Image src={"/pasta.jpg"}
                    alt='dish'
                    className='rounded object-cover'
                    fill
                />
            </div>
        </div>
    )
}

export default Popular