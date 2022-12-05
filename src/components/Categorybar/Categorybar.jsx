import React from "react";
import "./Categorybar.scss";
import { CategorybarData } from "../../constants/data/CategorybarData";

const Categorybars = () => {
  return (
    <>
      <div className="category">
        <div className="category_container">
          {CategorybarData.map((item, index) => (
            <div className="category_item_container" key={index}>
              <div className="category_item">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categorybars;
