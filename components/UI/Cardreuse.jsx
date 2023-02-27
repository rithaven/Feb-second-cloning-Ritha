import Link from "next/link";
import React from "react";

const Cardreuse = (props) => {
  return (
    <div className="grid space-y-4 border border-black">
      <div className="">
        <img className="object-cover w-full" src={props.image} alt="" />
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
  );
};

export default Cardreuse;
