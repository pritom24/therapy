import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center service-text-h"> need a solution</h1>
        <p className="text-center service-text-p">explore my programs</p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
