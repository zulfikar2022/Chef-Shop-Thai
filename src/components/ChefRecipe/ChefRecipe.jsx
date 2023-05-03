/* eslint-disable no-unused-vars */
import React from "react";
import "./ChefRecipe.css";
import { useLoaderData } from "react-router-dom";
// card-img-top
const ChefRecipe = () => {
  const chefData = useLoaderData();
  const {name, image, recipes,likes,recipe,yearsOfExperience,} = chefData[0];
  console.log( 'Chef Data : ' ,chefData);

  return (
    <div className="mt-4">
      <div className="card mb-3">
        <div className="image-and-recipes p-2">
          <img
            src={`https://remarkable-cendol-837abd.netlify.app/${image}`}
            className="card-image-custom rounded"
          />
          <div className="chef-small-details">
            <p className="field-title">Name: <span className="file-general">{name}</span></p>
            <p className="field-title">Experience: <span className="file-general">{yearsOfExperience} years</span> </p>
            <p className="field-title">Recipe: <span className="file-general">{recipe}</span></p>
            <p className="field-title">Likes : <span className="file-general">{likes}</span></p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
