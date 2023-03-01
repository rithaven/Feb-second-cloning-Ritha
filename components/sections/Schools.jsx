import React from "react";
import SchoolsCard from "../UI/SchoolsCard";

const Schools = () => {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="mb-4 space-y-4">
        <h3 className="font-bold">Explore our six schools</h3>
        <p>
          Scientific research and artistic activities are carried out at six
          schools and their departments and units.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SchoolsCard
          CardTitle="School of Arts, Design and Architecture"
          description="The School of Arts,Design and Architecture is one of ...
          "
          image="/bike.jpg"
        />
        <SchoolsCard
          CardTitle="School of Arts, Design and Architecture"
          description="The School of Arts,Design and Architecture is one of ...
           "
          image="/bike.jpg"
        />
        <SchoolsCard
          CardTitle="School of Arts, Design and Architecture"
          description="The School of Arts,Design and Architecture is one of ...
        "
          image="/bike.jpg"
        />{" "}
        <SchoolsCard
          CardTitle="School of Arts, Design and Architecture"
          description="The School of Arts,Design and Architecture is one of ...
     "
          image="/bike.jpg"
        />
         <SchoolsCard
        
        CardTitle="School of Arts, Design and Architecture"
        description="The School of Arts,Design and Architecture is one of ...
        "
        image="/bike.jpg"
     />
      <SchoolsCard
        
        CardTitle="School of Arts, Design and Architecture"
        description="The School of Arts,Design and Architecture is one of ...
        "
        image="/bike.jpg"
     />
      </div>
    </div>
  );
};

export default Schools;
