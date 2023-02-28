import React from "react";

const SocialMedia = () => {
  return (
    <div className="pt-20 pb-40 border-b border-black">
      <div className="">
        <img className="object-cover w-full h-[400px]" src="backg.png" alt="" />
      </div>
      <div className="grid justify-center -mt-64 space-y-4">
        <h3 className="font-bold text-7xl ">Follow us</h3>
        <div className="flex items-center gap-4 ">
          <h2 className="text-2xl font-bold underline">facebook,</h2>
          <h2 className="text-2xl font-bold underline">twitter,</h2>
          <h2 className="text-2xl font-bold underline">instagram </h2>
          <h2 className="text-2xl font-bold ">&</h2>
          <h2 className="text-2xl font-bold underline">Linkedin</h2>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
