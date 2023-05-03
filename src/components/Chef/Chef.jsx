/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Chef.css";
import '../../assets/chef1.jpg';
import '../../assets/chef2.jpg';
import '../../assets/chef3.jpg';
import '../../assets/chef4.jpg';
import '../../assets/chef5.jpg';
import '../../assets/chef6.jpg';
import { Link } from "react-router-dom";

const Chef = ({ children }) => {
  console.log(children);

  const { name, id, yearsOfExperience, likes, recipe, image, shortDetails } =
    children;
  console.log(image);
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src={`https://remarkable-cendol-837abd.netlify.app/${image}`} className="card-img-top chef-card-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="text-muted mb-0">
          Experience: {yearsOfExperience} years{" "}
        </p>
        <p className="mb-0 mt-0 text-muted">Recipe: {recipe}</p>
        <p className="text-muted mt-0">Likes: {likes} </p>
        <p className="card-text">{shortDetails.slice(0,100)}...</p>
        <Link to={`/${id}`} className="btn btn-dark">
          View Recipes
        </Link>
      </div>
    </div>
  );
};

export default Chef;
