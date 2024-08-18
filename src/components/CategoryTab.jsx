import React from "react";
import "../styles/CategoryTab.css";

const CategoryTab = ({
  category,
  widgets,
  visibilityState,
  toggleVisibility
}) => {
  return (
    <div className="category-tab-container">
      {widgets.length === 0 ? (
        <p className="no-widgets">No Widgets Yet.</p>
      ) : (
        widgets.map((widget) => (
          <div className="widget-item" key={widget.title}>
            <input
              type="checkbox"
              checked={visibilityState[widget.title]}
              onChange={() => toggleVisibility(widget.title)} 
            />
            <label>{widget.title}</label>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryTab;
