import React from 'react'
import Eventcard from '../UI/Eventcard'

const Courses = () => {
  return (
    <div className='pb-20 mt-20 bg-gray-100 '>
        <div className='pt-10 m-auto max-w-7xl'>
        <h2 className='text-2xl font-bold'>Studies and courses open to all</h2>

        </div>
       <div className='grid grid-cols-3 gap-4 pt-10 mx-auto max-w-7xl'>
        <Eventcard image="/course.jpg" link="Lifewide Learning" description="Select a solution that suits you, ranging from individual courses to programmes that are open for all."/>
        <Eventcard image="/two.jpg" link="Lifewide Learning" description="Select a solution that suits you, ranging from individual courses to programmes that are open for all."/>
        <Eventcard image="/three.png" link="Lifewide Learning" description="Select a solution that suits you, ranging from individual courses to programmes that are open for all."/>
       </div>
    </div>
  )
}

export default Courses