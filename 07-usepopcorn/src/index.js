import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
function Test() {
  const [movieRating, setmovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetMovieRating={setmovieRating} />
      <p>The movie was rating{movieRating}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    <Test />
  </React.StrictMode>
);
