import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Timer,
    Heart,
    SaveIcon,
} from "lucide-react"

const Post = () => {
    return (
        <div className='h-[calc(100svh-200px)] w-[calc(100svw-480px)] overflow-y-hidden px-16 py-6 w-full'>
            <div className="h-full overflow-y-scroll flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                    <div>
                        <div className="flex gap-6 items-center">
                            <div>
                                <h1 className='text-2xl font-bold'>Friday Sushi</h1>
                            </div>
                            <div>
                                <div className="uppercase text-red-600">- sushi</div>
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

                        <div className='mt-4'>
                            Caption Go Here
                        </div>

                        <div className='mt-4 flex flex-col gap-4'>
                            <p className='text-lg font-bold'>Recipe</p>

                            <div className="flex flex-col gap-1">
                                <p className='text-md font-bold'>Pasta</p>
                                <div>- 1 pack Macaroon</div>
                                <div>- 3 glass Water</div>

                                <div className="flex gap-4">
                                    <p>Boil 20 min</p>
                                    <Timer size={18} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className='text-md font-bold'>Soup</p>
                                <div>- 1 Onion</div>
                                <div>- 3tsp Garlic</div>
                                <div>- 1/2 Green Paper, Red Pepper</div>
                                <div>- 1tsp Six Gun</div>
                                <div>- 1tsp Aromate</div>
                                <div>- 1/2 Salt</div>


                                <div className="flex gap-4">
                                    <p>Cook 20 min</p>
                                    <Timer size={18} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-3 px-3 w-full max-w-[250px] h-auto relative'>
                        <div className="relative w-full h-[150px]">
                            <Image
                                src={"/pasta.jpg"}
                                alt="Delicious pasta dish"
                                className="rounded object-cover"
                                fill
                            />
                        </div>
                        <div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <div className="flex gap-2 items-center">
                                        <Heart size={18} aria-label="Like this dish" />
                                        <p>0</p>
                                    </div>
                                    <div className="flex gap items-center">
                                        <SaveIcon size={18} aria-label="Save this dish" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="rounded-full bg-zinc-300 h-[24px] w-[24px]"></div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='font-semibold'>Username</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-zinc-400 text-xs">Date & Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-zinc-400 flex gap-3 items-center">
                            <p>View Comments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post