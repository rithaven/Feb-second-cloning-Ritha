import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="p-10 mb-40">
      <div className="mt-6 ">
        <div className="relative ">
          <img className="object-cover w-full " src="/back.jpg" alt="" />
        </div>
        <div className="absolute w-5/6 m-auto -mt-24 bg-yellow ml-28">
          <h3 className="p-8 font-semibold text-7xl">
            Explore Aalto University
          </h3>
          <div className="flex w-full">
            <div className="items-center px-32 py-10 border-t border-r border-black ">
              <div className="w-40 ">
                <Link className="text-lg font-bold underline" href="/">
                  Study at Aalto
                </Link>
              </div>
            </div>
            <div className="items-center px-32 py-10 border-t border-r border-black ">
              <div className="w-40 ">
                <Link className="text-lg font-bold underline" href="/">
                  Study at Aalto
                </Link>
              </div>
            </div>
            <div className="items-center px-32 py-10 border-t border-black">
              <div className=" w-44">
                <Link className="text-lg font-bold underline" href="/">
                  Study at Aalto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
