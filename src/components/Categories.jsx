import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold text-center ">
        All Categories ({categories.length}){" "}
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-4 ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn bg-base-100 border-0 hover:bg-base-300 "}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
