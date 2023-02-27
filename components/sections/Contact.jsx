import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='p-10 mb-40'>
        <div className='mt-6 '>
            <div className='relative '>
            <img className='w-full  object-cover ' src="/back.jpg" alt="" />
            </div>
            <div className=' bg-yellow -mt-24 w-5/6 m-auto absolute ml-28'>
                <h3 className='text-7xl font-semibold p-8'>Explore Aalto University</h3>
                <div className='flex w-full'>
                    <div className='border-t  border-r border-black px-40 py-10 items-center '>
                        <Link className=' font-bold underline' href='/' >
                        Study at Aalto
                        </Link>
                    </div>
                    <div className='border-t  border-r border-black px-40 py-10 items-center '>
                        <Link className='font-bold underline ' href='/' >
                        Study at Aalto
                        </Link>
                    </div>
                    <div className='border-t   border-black px-40 py-10 items-center '>
                        <Link className=' font-bold underline' href='/' >
                        Study at Aalto
                        </Link>
                    </div>

                </div>
            </div>
           

        </div>
    </div>
  )
}

export default Contact