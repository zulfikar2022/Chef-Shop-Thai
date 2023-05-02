/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Chef.css";

const Chef = ({ children }) => {
  console.log(children);

  const { name, id, yearsOfExperience, likes, recipe, image, shortDetails } =
    children;
  console.log(image);
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={image} className="card-img-top chef-card-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="text-muted mb-0">
          Experience: {yearsOfExperience} years{" "}
        </p>
        <p className="mb-0 mt-0 text-muted">Recipe: {recipe}</p>
        <p className="text-muted mt-0">Likes: {likes} </p>
        <p className="card-text">{shortDetails.slice(0,100)}...</p>
        <button href="#" className="btn btn-dark">
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default Chef;
