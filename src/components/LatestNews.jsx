import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center rounded p-4  gap-3 bg-base-200">
      <p className="text-white font-semibold bg-secondary btn px-3 py-2">
        Latest
      </p>
      <Marquee className="" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
          aperiam maiores blanditiis necessitatibus ab et repellendus neque,
          voluptates, est.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
