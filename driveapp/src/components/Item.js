import React from "react";

export const Item = ({ image }) => {
  return (
    <span>
      <div className="col-md-4">
        <a href="#">
          <div className="photo-item">
            <img
              src={`https://drive.google.com/uc?export=view&id=${image}`}
              // src="https://drive.google.com/uc?export=view&id="
              alt="whatever"
            />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </a>
      </div>
    </span>
  );
};
