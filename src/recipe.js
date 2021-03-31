import React from "react";
import style from "./recipe.module.css";

const recipe = ({ title, dishType, image, ingredients, cuisineType, mealType }) => {
  return (
    <div className={style.recipe}>
      <h1 className = {style.title}> {title} </h1>
       <div className = {style.dishInfo}>
      	<h3> Cuisine: {cuisineType} </h3>
      	<h4> Meal: {mealType} </h4>
      	<h4> Course: {dishType} </h4>
      </div>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} className={style.image} alt="" />
    </div>
  );
};

export default recipe;

