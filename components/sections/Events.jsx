import React from "react";
import Eventcard from "../UI/Eventcard";

const Events = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <div className=" mt-14 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="p-6">
            <h2 className="font-bold text-2xl text-black">Join our many events</h2>
          </div>
          <div>
            <div className="rounded-full px-6 py-4 border border-black hover:bg-yellow-300">
              <p>See all events</p>
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
          <Eventcard
            image="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_914w_ah_n/public/2023-02/solvethesdgs_7.png?itok=3zTx6Lu6"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Eventcard
            image="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_914w_ah_n/public/2023-02/energy_futures_1920x1080_orange.jpg?itok=5ol6Q-Wo"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />

          <Eventcard
            image="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_1380w_600h_n/public/2023-01/SSD2023_hero_image_1920x1200px_150dpi_2.png?h=3bf3b255&itok=tP6_uIIV"
            link="Shrinking from the heat"
            description="Reactive fabrics respond to changes in temperature"
            due="21.2.2023 | News"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
