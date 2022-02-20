import React from "react";
import { Item } from "./Item.js";
// import index.js
import App from "./index-old.js";
export const Items = ({ images }) => {
  return (
    //   map through the array of images and display them
    <div className="container">
      <div className="row gx-4" id="imagesData">
        {images.map((image) => {
          return <Item key={image} image={image} />;
        })}
        {/* call listfiles from App */}
        <App />
      </div>
    </div>
  );
};
