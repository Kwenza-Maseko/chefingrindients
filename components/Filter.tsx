import React from 'react'
import Popular from './Popular'

const Filter = () => {
    return (
        <div className='w-[380px] h-[calc(100svh-200px)] overflow-y-hidden box-background rounded-[10px]'>
            <div className='h-full overflow-y-scroll p-4 flex flex-col gap-8'>
                <div className="flex flex-col gap-4">
                    <h1 className='text-xl font-bold mb-2'>Popular Dish</h1>
                    <Popular />
                    <Popular />
                    <Popular />
                </div>
                <div className="">
                    <h1 className='text-xl font-bold mb-4'>Categories</h1>
                    <div className='flex flex-wrap gap-4'>
                        <div className='px-4 py-2 rounded-[7px] bg-red-900'>
                            Breakfast
                        </div>
                        <div className='px-4 py-2 rounded-[7px] bg-yellow-700'>
                            Desert
                        </div>
                        <div className='px-4 py-2 rounded-[7px] bg-lime-600'>
                            Dinner
                        </div>
                        <div className='px-4 py-2 rounded-[7px] bg-blue-600'>
                            Super
                        </div>
                        <div className='px-4 py-2 rounded-[7px] bg-red-900'>
                            Drinks
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter