/* eslint-disable no-unused-vars */
import React from "react";
import "./Blogs.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import html2pdf from "html2pdf.js";
import { saveAs } from "file-saver";

const Blogs = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleDownloadPDF = () => {
    const element = document.getElementById("blog-page");
    html2pdf()
      .set({
        margin: 2,
        filename: "blog-page.pdf",
        image: { type: "jpeg", quality: 0.98 },
      })
      .from(element)
      .save();
  };
  return (
    <div>
      <div id="blog-page">
        <h1>
          1. Write some differences between uncontrolled and controlled
          components.{" "}
        </h1>
        <div className="container">
          <ul>
            <li>
              Uncontrolled components manage their state own state internally,
              While controlled components rely on a parent component.
            </li>
            <li>
              Uncontrolled components depend on browser to manage their data
              flow, while control components explicitly control data flow
            </li>
            <li>
              Controlled components are easier to test. Testing uncontrolled
              components can be more difficult.
            </li>
            <li>
              Uncontrolled components are more flexible then the controlled
              components.
            </li>
          </ul>
        </div>

        <h1>2. How to validate React props using PropTypes ?</h1>
        <div className="container">
          <p className="ms-3">
            PropTypes is a built-in library in React to validate the type of the
            props passed to a component.For this, first PropType library must be
            imported. Then have to define a propTypes for the component what we
            are using.
          </p>
        </div>

        <h1>3. Write some differences between nodejs and expressjs </h1>
        <div className="container">
          <ul>
            <li>
              Node js is a runtime environment to execute javaScript code
              outside of a browser while express js is a web application
              framework build on node js{" "}
            </li>
            <li>
              Node js provides the core functionality to build web server, while
              expressjs provides additional feature for building web
              application.
            </li>
            <li>
              Node.js can be used to build a variety of applications beyond web
              development. Express.js is mainly focused on building web
              applications.
            </li>
          </ul>
        </div>
        <h1>
          4. What is a custom hook, and what are the purposes custom hook?
        </h1>
        <div>
          <p className="ms-3">
            A custom hook in React is a JavaScript function that allows us to
            extract reusable logic from a component and share it across multiple
            components. Actually, custom hooks are a powerful feature in React
            that can help us write more reusable and maintainable code. By
            extracting common logic into custom hooks, we can make our
            components more focused and intuitive, and avoid repeating code
            across our application.
          </p>
        </div>
      </div>
      <button className="btn btn-dark mt-2 mb-2" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default Blogs;
