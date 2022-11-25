import React from "react";
import { useState, useEffect } from "react";

function FoodResultArray({
  title,
  calories,
  image,
  ingredients,
  Protien,
  carbs,
  Fats,
}) {
  console.log(Math.floor(carbs));
  return (
    <div className="xs:w-full xs:h-50 xs:my-2 sm:w-1/2 md:my-4 md:w-3/4  lg:w-3/5  bg-white border-white rounded-lg flex flex-row justify-center">
      <img className="w-1/2 rounded-l-md" src={image} />
      <div className="xs:p-0 w-1/2 h-full p-5 flex flex-col">
        <div>
          <h1 className="xs:my-0 py-5 text-black text-xl font-bold">{title}</h1>
        </div>
        <div className="w-11/12">
          <p className="text-sm text-slate-300 ">
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </p>
        </div>
        <div className="flex flex-row items-center w-11/12 m-2 h-3/5 text-sm  rounded-md bg-slate-200">
          <div className="w-1/2 h-full flex flex-col justify-center items-center border-r border-slate-500/40 text-slate-400">
            <p className="text-xl text bold text-slate-400">Total Calories</p>
            <h>{calories} Kcal</h>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center text-30 text-slate-400 ">
            <p>Protien: {Protien}g</p>
            <p>FAT: {Fats}g</p>
            <p>Carbs: {carbs}g</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodResultArray;
