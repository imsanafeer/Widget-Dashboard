import React from "react";
import "../styles/WidgetArea.css";

const WidgetArea = ({ widgets, visibilityState, onAddWidget, onDeleteWidget }) => {
  return (
    <div className="widget-container">
      {widgets
        .filter((widget) => visibilityState[widget.title])
        .map((widget) => (
          <div className="widget-area" key={widget.title}>
            <h3>{widget.title}</h3>
            <p>{widget.description}</p>
            <button className="delete-button" onClick={() => onDeleteWidget(widget.title)}>
              &times;
            </button>
          </div>
        ))}

      <div className="add-widget" onClick={onAddWidget}>
        <button onClick={()=>setIsPanelOpen(!isPanelOpen)}> + Add Widget</button>
      </div>
    </div>
  );
};

export default WidgetArea;
