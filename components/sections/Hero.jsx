import React from 'react'
import Card from '../UI/Card'

const Hero = () => {
  return (
    <div>
        <div className=''>
        <img className='object-cover w-full' src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2022-03/Blue%20and%20yellow%20flags%20by%20Kalle%20Kataila%2003032022%20001.png?h=74c6825a&itok=eo-pgDDo" alt="" />
           <div className='absolute'>
            <div className='relative p-6 mx-auto ml-10 text-white bg-black -mt-72 lg:ml-28 lg:w-5/6 w-52'>
            <Card title="Aalto student – New Student Guide is here to replace Into" body="The into.aalto.fi contents have been migrated to the Aalto.fi site with information and news for students." links={["Alzheimer's disease", "Honours programme", "Education for professionals", "Study guide",]}/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Hero