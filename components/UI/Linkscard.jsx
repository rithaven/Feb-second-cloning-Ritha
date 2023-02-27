import React from 'react'

const Linkscard = (props) => {
  return (
    <div>
        <div className='p-10'>
                <h3 className='text-center text-2xl font-medium'>{props.title}</h3>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    
                    <div className='rounded-full bg-yellow'>
                        <img className='object-cover w-full rounded-full' src={props.image} alt="pen" />
                    </div>
                    <div>
                        <p>{props.text}</p>
                    </div>

                </div>
                <div className='flex gap-2 items-center'>
                    
                    <div className='rounded-full bg-yellow'>
                        <img className='object-cover w-full rounded-full' src={props.imageone} alt="pen" />
                    </div>
                    <div>
                        <p>{props.textone}</p>
                    </div>

                </div>
                <div className='flex gap-2 items-center'>
                    
                    <div className='rounded-full bg-yellow'>
                        <img className='object-cover w-full rounded-full' src={props.imagetwo} alt="pen" />
                    </div>
                    <div>
                        <p>{props.texttwo}</p>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

export default Linkscard