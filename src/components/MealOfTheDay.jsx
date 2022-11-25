import React from "react";

function MealOfTheDay() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-20 mb-5">
      <h1 className="text-4xl font-bold text-white my-5">
        Reciepe Of The Week
      </h1>
      <div className="  w-2/3 bg-white border-white rounded-lg flex flex-row justify-center  shadow-2xl shadow-orange-400">
        <img
          className=" w-1/2  h-full rounded-l-lg"
          src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          sizes={30}
        />
        <div className="w-1/2 h-full p-5 flex flex-col">
          <div>
            <h1 className="my-5 text-black text-2xl font-bold">
              Pepperoni Italian Sauage Pizza
            </h1>
          </div>
          <div className="w-11/12">
            <p className="text-medium text-slate-300">
              Margarita Pizza With Fresh Mozzarella & Basil Sugar Conscious •
              Low Potassium • Vegetarian • Pescatarian • Egg Free • Peanut Free
              • Tree Nut Free • Soy Free • Fish Free • Shellfish Free • Pork
              Free • Red Meat Free • Crustacean Free • Celery Free • Mustard
              Free • Sesame Free • Lupine Free • Mollusk Free • Alcohol Free •
              Kosher
            </p>
          </div>
          <div className=" flex flex-row items-center w-11/12 h-60 mt-20 rounded-md bg-slate-200">
            <div className="flex flex-col justify-center items-center">
              <p>Servings</p>
              <h1>209kcal</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>PROTEIN..... 125g</p>
              <p>FAT..... 125g</p>
              <p>CARB..... 125g</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Cholesterol..... 125g</p>
              <p>Calcuim..... 125g</p>
              <p>Sodium..... 125g</p>
              <p>Magnesium..... 125g</p>
              <p>Potassium..... 125g</p>
              <p>Iron..... 125g</p>
            </div>
          </div>
          <div className="w-full m-5 flex items-center justify-center">
            <button className="h-10 bg-slate-100 border rounded-sm ">
              Save For Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealOfTheDay;
