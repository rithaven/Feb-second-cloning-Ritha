import React from "react";

const Experience = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="grid p-10">
          <h2 className="text-2xl font-semibold">Virtual Campus Experience</h2>
          <p>
            Explore Aalto University’s campus from anywhere in the world! Our
            digital guides, an Aalto University student and an assistant
            professor, introduce you to our learning facilities, laboratories,
            workshops, service spots and outdoor spaces. The tour can be
            experienced on desktop, mobile or VR headset.
          </p>
          <div>
            {[
              "Visit the tour",
              
            ].map((e, key) => {
              return (
                <div key={key} className="flex gap-2">
                  <img className="h-4" src="/right-s.svg" alt="" />
                  <p className="underline">{e}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full"
            src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_6_690w_431h_d/public/2021-02/aalto-website-3.jpg?h=e1c30e35&itok=JNNANuU2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
