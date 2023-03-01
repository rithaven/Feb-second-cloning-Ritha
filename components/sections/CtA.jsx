import React from "react";

export const CtA = () => {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full"
            src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o"
            alt=""
          />
          </div>
          <div className="grid p-16">
            <h2 className="text-2xl font-semibold">
              Campus - lively and thriving
            </h2>
            <p>
              Aalto University's campus in Otaniemi is a renewable and living
              environment for research, art, learning, entrepreneurship and
              housing. The campus area inspires people to collaborate, try out
              new ideas and innovate together.
            </p>
            <div>
                {
                    [
                        "Explore our vibrant innovation ecosystem","Explore our campus","Book a space"
                    ].map((e,key)=>{
                        return(
                            <div key={key} className="flex gap-2">
                                <img className="h-4" src="/right-s.svg" alt="" />
                                <p >{e}</p>
                                
                            </div>
                        )
                    })
                }
            </div>
          </div>

      </div>
    </div>
  );
};
