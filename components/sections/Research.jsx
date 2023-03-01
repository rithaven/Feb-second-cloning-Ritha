import React from 'react'
import Eventcard from '../UI/Eventcard'

const Research = () => {
  return (
    <div className='pb-20 mt-20 bg-gray-100 '>
        <div className='mx-auto max-w-7xl'>
        <div className='max-w-4xl pt-10 space-y-4'>
        <h2 className='text-2xl font-semibold'>Read about our research and donate</h2>
        <p className=''>At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future.</p>
        </div>
       <div className='grid grid-cols-1 gap-4 pt-10 lg:grid-cols-2'>
        <Eventcard image="/artimg.jpg" link="Research & Art" description="Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health."/>
        <Eventcard image="/doctor.jpg" link="Give for the future" description="Join us in building a sustainable future! Together we can solve some of the toughest problems of our time."/>
       </div>
    </div>
    </div>
  )
}

export default Research