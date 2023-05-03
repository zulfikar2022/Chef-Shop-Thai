/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  const { name, ingredients, cokingMethod, rating } = recipe;
  const [disable, setDisable] = useState(false);
  const notify = () => toast(`The Item ${name} is added to your favourite list`);
  const handleAddToFavourite = () => {
    setDisable(true);
    notify();
  };
  return (
    <div className="card recipe-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-1 mt-4 text-body-secondary">
          Ingredients
        </h6>
        <p>{ingredients}</p>
        <h6 className="card-subtitle mb-1 mt-4 text-body-secondary">
          Coking method
        </h6>
        <p>{cokingMethod}</p>
      </div>
      <button
        className="btn btn-dark w-50 ms-2 mb-2"
        onClick={handleAddToFavourite}
        disabled={disable}
      >
        Add to favourite
      </button>
      <ToastContainer />
    </div>
  );
};

export default RecipeCard;
