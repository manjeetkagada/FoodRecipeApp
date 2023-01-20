import React from "react";
import "./recipeCard.css";
const RecipeCard = ({ recipe }) => {
  const openRecipe = () => {
    window.open(recipe["recipe"]["url"]);
  };
  return (
    <div className="parent">
      <div className="itemscards">
        <img src={recipe["recipe"]["image"]} alt="food" onClick={openRecipe} />
        <div className="recipe_title">
          <p>{recipe["recipe"]["label"]}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
