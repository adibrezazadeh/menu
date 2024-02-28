import React, { useState } from "react";

const Categories = ({ categories, filterMenus }) => {
  // fot highlight the category in classname
  const [mainCategory, setMainCategory] = useState("all");

  return (
    <div className="btn-container">
      {/* for build all of category */}
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          // for set classname of highlight
          className={
            category === mainCategory ? "filter-btn highlight" : "filter-btn"
          }
          // for change the category highlight
          onClick={() => {
            setMainCategory(category)
            // pass the category name to function filtermenus
            filterMenus(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
