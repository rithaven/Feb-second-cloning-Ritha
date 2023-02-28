import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="pb-4">
        <h3 className="text-2xl font-bold">
          Information on Ukraine and coronavirus
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          {
            image: "/blue.png",
            link: "Ukraine war",
            description:
              "On this page, we will gather information on how Russia's...",
          },
          {
            image: "/no.jpg",
            link: "Information on coronavirus",
            description:
              "Information on the effects of coronavirus and COVID-19 on activities at Aalto University...",
          },
        ].map((e, key) => {
          return (
            <div key={key} className="flex gap-6 border border-black">
              <div className="pt-20 ml-6">
                <Link href="/" className="p-4 font-semibold">{e.link}</Link>
                <p className="p-4 truncate bg-yellow-200 w-96 text-md">{e.description}</p>
              </div>
              <div>
                <img className="h-40 w-96" src={e.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
