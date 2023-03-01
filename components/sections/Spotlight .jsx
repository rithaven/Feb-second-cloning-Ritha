import React from "react";
import Cardreuse from "../UI/CardReuse";

const Spotlight = () => {
  return (
    <div>
      <div className="mx-auto mt-14 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-500">Spotlight </h2>
          </div>
          <div>
            <div className="px-6 py-4 border border-black rounded-full hover:bg-yellow ">
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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Cardreuse
            image="/c1.jpg"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Cardreuse
            image="/pipo.jpg"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Cardreuse
            image="/pip.jpg"
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
