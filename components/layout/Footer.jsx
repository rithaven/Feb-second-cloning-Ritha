import React from "react";

const Footer = () => {
  return (
    <div className="p-6 m-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-6 p-4 border-b border-black">
        <div>
        <img className="h-10 mb-8" src="log.png" alt="" />
          <h2>Aalto University</h2>
          <h2>P.O. Box 11000 (Otakaari 1B)</h2>
          <h2>FI-00076 AALTO</h2>
          <h2>Switchboard: +358 9 47001</h2>
          <h2>Follow us:</h2>
        </div>
        <div>
            <h2 className="text-2xl">Quicklinks</h2>
          {
            [
                "Research and artistic outputs","Library – Learning Centre","Admissions","Alumni","Media","IT services","Open University","Aalto University Shop","Latest","News","News","Events","Careers"
            ].map((e,key)=>{
                return (
                    <div key={key}>
                        <h2 className="underline">{e}</h2>
                    </div>
                )
            })
          }
        </div>
        <div>
            <h2 className="text-2xl">Contact</h2>
          {
            [
                "Campus maps","Contact information","For students","Student Guide","Webmail","MyCourses","MyStudies"
            ].map((e,key)=>{
                return (
                    <div key={key}>
                        <h2 className="underline">{e}</h2>
                    </div>
                )
            })
          }
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-semibold">Together towards a better world.</h2>
          <p>Support new ideas, research, work and leadership development towards a stronger Finland.</p>
          <div>
            <button className="px-8 py-4 text-white bg-black rounded-full">
                Donate to Aalto University
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-6 ">
        <div className="flex gap-4">
          <p className="font-bold underline"> Privacy notice</p>
          <p className="font-bold underline"> Cookie policy</p>
          <p className="font-bold underline"> Feedback</p>
          <p className="font-bold underline"> Accessibility statement</p>
          <p className="font-bold underline"> Cookie settings</p>
        </div>
        <div className="flex gap-4">
          <p className="font-bold underline">Suomeksi</p>
          <p className="font-bold underline">Svenska</p>
          <p className="font-bold underline">English</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
