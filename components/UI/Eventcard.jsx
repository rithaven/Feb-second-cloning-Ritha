import React from 'react'
import Link from "next/link";


const Eventcard = (props) => {
  return (
    <div className="grid space-y-4 border shadow-lg">
      <div className="">
        <img className="object-cover w-full h-56" src={props.image} alt="" />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <Link href="/">{props.link}</Link>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <p>{props.due}</p>
        </div>
      </div>
    </div>
  )
}

export default Eventcard