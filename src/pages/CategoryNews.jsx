import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [CategoryNews, setCategoryNews] = useState([]);

  //console.log(id, data);
  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
    setCategoryNews(filteredNews);
  }, [data, id]);
  return (
    <div>
      <p className="text-center lg:text-4xl">
        {" "}
        Total {CategoryNews.length} Found{" "}
      </p>
    </div>
  );
};

export default CategoryNews;
