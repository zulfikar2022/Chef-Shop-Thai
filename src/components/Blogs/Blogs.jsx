/* eslint-disable no-unused-vars */
import React from "react";
import "./Blogs.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";


const Blogs = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
        <p>This is blogs</p>
    </div>
  );
};

export default Blogs;
