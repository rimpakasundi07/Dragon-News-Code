import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <p className="text-center lg:text-4xl">Category News - {id} </p>
    </div>
  );
};

export default CategoryNews;
