import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./recipe";

export default function App() {
  const APP_ID = "a797d787";
  const APP_KEY = "7b896d92021c42e829fb192974f4bd5a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chiken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          {" "}
          search{" "}
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            dishType= {recipe.recipe.dishType}
            image={recipe.recipe.image}
            cuisineType = {recipe.recipe.cuisineType}
            ingredients={recipe.recipe.ingredients}
            mealType = {recipe.recipe.mealType}
          />
        ))}
      </div>
    </div>
  );
}
