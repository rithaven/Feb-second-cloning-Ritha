import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="p-10 mb-40">
      <div className="mt-6 ">
        <div className="relative ">
          <img className="object-cover w-full " src="/back.jpg" alt="" />
        </div>
        <div className="absolute m-auto ml-10 -mt-24 lg:w-5/6 bg-yellow lg:ml-28 w-60">
          <h3 className="p-8 text-4xl font-semibold lg:text-7xl">
            Explore Aalto University
          </h3>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="items-center px-16 py-10 border-t border-r border-black lg:px-32 ">
              <div className="w-16 lg:w-40 ">
                <Link className="text-lg font-bold underline" href="/">
                  Study at Aalto
                </Link>
              </div>
            </div>
            <div className="items-center px-16 py-10 border-t border-r border-black lg:px-32">
              <div className="w-16 lg:w-40">
                <Link className="text-lg font-bold underline" href="/">
                  Study at Aalto
                </Link>
              </div>
            </div>
            <div className="items-center px-16 py-10 border-t border-black lg:px-32">
              <div className="w-16 lg:w-44">
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
