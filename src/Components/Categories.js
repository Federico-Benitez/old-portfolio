import React from "react";
import { NavLink } from "react-router-dom";

function Categories({ filter, categories }) {
  return (
    <div className="buttons-portfolio">
      {categories.map((cat, i) => {
        return (
          <button
            className="btn-porfolio"
            type="button"
            onClick={() => filter(cat)}
            key={i}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
