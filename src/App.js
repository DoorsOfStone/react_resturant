import React, { useEffect, useState } from "react";
import "./app.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Search from "./components/Search";
import MealOfTheDay from "./components/MealOfTheDay";
import FoodResultArray from "./components/FoodResultArray";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchItems, setSearchedItems] = useState("");
  const [query, setQuery] = useState("");
  const Api_Url = "https://api.edamam.com/api/recipes/v2?type=public";
  const apiKey = "04bf1ae9467cd5e3a998e7206a9315ef";
  const api__id = "94b49f86";
  useEffect(() => {
    searchRecipes();
  }, [query]);

  const searchRecipes = async () => {
    const response = await fetch(
      `${Api_Url}&q=${query}&app_id=${api__id}&app_key=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearchedItems(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchItems);
    setSearchedItems("");
  };

  return (
    <div className="Background min-w-full min-h-full  ">
      <Search
        updateSearch={updateSearch}
        getSearch={getSearch}
        searchItems={searchItems}
        setSearchedItems={setSearchedItems}
        query={query}
        setQuery={setQuery}
        searchRecipes={searchRecipes}
      />
      {
        <div className="sm:flex-col md:flex-row md:p-2 lg:flex-row w-full flex flex-wrap justify-center items-center ">
          {recipes.map((recipe) => (
            <FoodResultArray
              title={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              carbs={Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}
              Protien={Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}
              Fats={Math.floor(recipe.recipe.totalNutrients.FAT.quantity)}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default App;
