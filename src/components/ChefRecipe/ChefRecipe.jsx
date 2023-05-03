/* eslint-disable no-unused-vars */
import React from "react";
import "./ChefRecipe.css";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
// card-img-top
const ChefRecipe = () => {
  const chefData = useLoaderData();
  const { id,name, image, recipes, likes, recipe, yearsOfExperience,shortDetails } =
    chefData[0];
  console.log("Chef Data : ", chefData);

  return (
    <div className="mt-4">
      <div className="card mb-3">
        <div className="image-and-recipes p-2">
          <img
            src={`https://remarkable-cendol-837abd.netlify.app/${image}`}
            className="card-image-custom rounded"
          />
          <div className="chef-small-details">
            <p className="field-title">
              Name: <span className="file-general fw-bold">{name}</span>
            </p>
            <p className="field-title">
              Experience:{" "}
              <span className="file-general">{yearsOfExperience} years</span>{" "}
            </p>
            <p className="field-title">
              Recipe: <span className="file-general">{recipe}</span>
            </p>
            <p className="field-title">
              Likes : <span className="file-general">{likes}</span>
            </p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{shortDetails}</p>
        </div>
      </div>
      <p className="rounded mt-5 mb-1 text-center bg-dark text-white fw-bold fs-1">All recipes of Chef { name}</p>
          <div className="recipe-cards mb-4">
              {recipes.map((recipe,index) => <RecipeCard key={index} recipe={recipe} ></RecipeCard>)}
          </div>
    </div>
  );
};

export default ChefRecipe;
