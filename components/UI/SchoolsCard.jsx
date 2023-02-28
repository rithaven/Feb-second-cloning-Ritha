import React from 'react'

const SchoolsCard = (props) => {
    return (
        <div>
        <div className="flex gap-6 pl-8 border border-black">
            <div className='text-black mt-28'>
                <h3>{props.CardTitle}</h3>
                <p className='overflow-hidden text-ellipsis'>{props.description}</p>
            </div>
          <div className="">
            <img className="object-cover w-full h-44" src={props.image} alt="" />
          </div>
         
        </div>
        </div>
      );
    };


export default SchoolsCard