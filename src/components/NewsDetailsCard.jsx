import React from "react";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-3">
      <img
        className="w-full h-[350px]  object-cover "
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p>{news.details}</p>
    </div>
  );
};

export default NewsDetailsCard;
