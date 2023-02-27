import React from 'react'
import Card from '../UI/card'

const Hero = () => {
  return (
    <div>
        <div className=' '>
        <img className='w-full  object-cover' src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2022-03/Blue%20and%20yellow%20flags%20by%20Kalle%20Kataila%2003032022%20001.png?h=74c6825a&itok=eo-pgDDo" alt="" />
           <div className='absolute'>
            <div className='relative -mt-72 ml-28  w-5/6 mx-auto bg-black p-6 text-white '>
            <Card title="Aalto student – New Student Guide is here to replace Into" body="The into.aalto.fi contents have been migrated to the Aalto.fi site with information and news for students." links={["Alzheimer's disease", "Honours programme", "Education for professionals", "Study guide",]}/>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Hero