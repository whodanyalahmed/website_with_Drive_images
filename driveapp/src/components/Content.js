import React from "react";
import { Items } from "./Items.js";
// import useState
import { useState } from "react";
export const Content = () => {
  // initialize state variables with initial value 1HO2DhbwXfk3szvaZgbIm-vkHag5HnSNc
  const [images, setImage] = useState([
    "1HO2DhbwXfk3szvaZgbIm-vkHag5HnSNc",
    "170CqpN21yo2ziH0kCoS6A5VQrJbnSBTk",
  ]);
  return (
    <div>
      <section className="photo-area section-padding">
        <div className="section-title">
          <h2>Photo Galleries</h2>
        </div>
        <Items images={images} />
        {}
      </section>
    </div>
  );
};
