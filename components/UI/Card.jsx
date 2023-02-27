import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="p-6  ">
        <div className="grid gap-4">
          <h3>{props.title}</h3>
          <p>{props.body}</p>
          <div>
            <Link href="/">
              {props.links.map((e, key) => {
                return (
                  // <div key={key} className='max-w-5xl mx-10 -mt-10 shadow-sm'>
                  <div key={key} className="flex gap-4">
                    <img className="h-6 " src="/right.svg" alt="" />
                    <p>{e}</p>
                  </div>
                  // </div>
                );
              })}
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <img className="h-8" src="/chevron-cr.svg" alt="chevron" />
            <div className="flex gap-2">
              <div className="bg-white h-4 w-4 rounded-full"></div>
              <div className="bg-white h-2 w-2 rounded-full mt-1"></div>
              <div className="bg-white h-2 w-2 rounded-full  mt-1"></div>
              <div className="bg-white h-2 w-2 rounded-full  mt-1"></div>
            </div>
            <div>
            <img className="h-8" src="/ch-r.svg" alt="chevron" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
