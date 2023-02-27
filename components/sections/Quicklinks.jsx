import React from 'react'
import Linkscard from '../UI/Linkscard'

const Quicklinks = () => {
  return (
    <div className='max-w-5xl mx-auto p-6'>
         <Linkscard title='Important quicklinks' image='/pen.png' imageone='/folder.png' imagetwo='/phone.png' text='For personnel' textone='For personnel' texttwo='For personnel'/>
    </div>
  )
}

export default Quicklinks