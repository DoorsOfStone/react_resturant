import React from "react";

function FoodCategories(query, getSearch) {
  return (
    <div
      onSubmit={getSearch}
      className=" w-4/5 h-full flex flex-row justify-center items-center"
    >
      <ul className="flex flex-row  text-xl font-medium text-white">
        <li type="submit" className="px-10 hover:text-orange-400">
          Italian
        </li>
        <li className="px-10 hover:text-orange-400">Japanese</li>
        <li className="px-10 hover:text-orange-400">Greek</li>
        <li className="px-10 hover:text-orange-400">Jamacian</li>
        <li className="px-10 hover:text-orange-400">Indian</li>
      </ul>
    </div>
  );
}

export default FoodCategories;
