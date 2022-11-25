import React from "react";
import { useState, useEffect } from "react";
import { UilUtensils, UilSearch } from "@iconscout/react-unicons";
import FoodCategories from "./FoodCategories";

function Search({
  searchRecipes,
  searchItems,
  setSearchedItems,
  query,
  setQuery,
  updateSearch,
  getSearch,
}) {
  return (
    <div className=" sticky top-0 z-40 flex p-5 items-center justify-center bg-black/80 shadow-2xl shadow-black ">
      <div className="  w-2/3 h-full flex flex-row flex-wrap items-center justify-center text-white">
        <div className="w-1/2 h-full flex flex-row items-center ">
          <h1 className="text-4xl text-orange-500 py-5 font-bold">
            Guilt·Free·Recipes
          </h1>
          <UilUtensils className="mx-2 my-3 " size={40} />
        </div>
        <form
          onSubmit={getSearch}
          className="w-1/2 h-full flex justify-center items-center"
        >
          <input
            type="text"
            value={searchItems}
            placeholder="Eat Guilt Free.."
            onChange={updateSearch}
            className="text-slate-500 text-xl rounded-md outline-none p-1  w-1/2 h-10"
          />
          <button type="submit">
            <UilSearch
              className="text-orange-500 hover:text-yellow-400"
              size={40}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
