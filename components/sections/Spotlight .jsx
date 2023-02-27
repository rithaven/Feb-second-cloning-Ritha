import React from "react";
import Cardreuse from "../UI/Cardreuse";

const Spotlight = () => {
  return (
    <div>
      <div className=" mt-14 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="p-6">
            <h2 className="font-bold text-2xl text-gray-500">Spotlight </h2>
          </div>
          <div>
            <div className="rounded-full px-6 py-4 border border-black hover:bg-yellow-300">
              <p>See all Aalto University news</p>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <p className="text-2xl">
            Find more current news and interesting events on the{" "}
            <span className="underline">News and events page.</span>{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <Cardreuse
            image="/c1.jpg"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Cardreuse
            image="/c1.jpg"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Cardreuse
            image="/c1.jpg"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
