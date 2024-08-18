import React, { useState } from "react";
import "../styles/Dashboard.css";
import WidgetArea from "./WidgetArea";
import SidePanel from "./SidePanel";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [widgets, setWidgets] = useState([]);
  const [visibilityState, setVisibilityState] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); 

  const addWidget = (newWidget) => {
    setWidgets([...widgets, newWidget]);
    setVisibilityState((prevState) => ({
      ...prevState,
      [newWidget.title]: true,
    }));
  };

  const deleteWidget = (title) => {
    setWidgets(widgets.filter((widget) => widget.title !== title));
    setVisibilityState((prevState) => {
      const newState = { ...prevState };
      delete newState[title];
      return newState;
    });
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  const confirmChanges = (newVisibilityState) => {
    setVisibilityState(newVisibilityState);
    console.log("Changes confirmed", newVisibilityState);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredWidgets = widgets.filter(
    (widget) =>
      widget.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <Navbar onSearchChange={handleSearchChange} />
      <div className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        <button id="add-widget" onClick={() => setIsPanelOpen(!isPanelOpen)}>
          Add Widget +
        </button>
      </div>
      <SidePanel
        isPanelOpen={isPanelOpen}
        closePanel={closePanel}
        widgets={widgets}
        addWidget={addWidget}
        visibilityState={visibilityState}
        confirmChanges={confirmChanges}
      />
      <div className="dashboard-content">
        <h2>CSPM Executive Dashboard</h2>
        <div className="widget-container">
          <WidgetArea
            widgets={filteredWidgets.filter(
              (widget) => widget.category === "CSPM"
            )}
            visibilityState={visibilityState}
            onAddWidget={() => setIsPanelOpen(true)}
            onDeleteWidget={deleteWidget}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <h2>CWPP Dashboard</h2>
        <div className="widget-container">
          <WidgetArea
            widgets={filteredWidgets.filter(
              (widget) => widget.category === "CWPP"
            )}
            visibilityState={visibilityState}
            onAddWidget={() => setIsPanelOpen(true)}
            onDeleteWidget={deleteWidget}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <h2>Image Dashboard</h2>
        <div className="widget-container">
          <WidgetArea
            widgets={filteredWidgets.filter(
              (widget) => widget.category === "Image"
            )}
            visibilityState={visibilityState}
            onAddWidget={() => setIsPanelOpen(true)}
            onDeleteWidget={deleteWidget}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <h2>Ticket Dashboard</h2>
        <div className="widget-container">
          <WidgetArea
            widgets={filteredWidgets.filter(
              (widget) => widget.category === "Ticket"
            )}
            visibilityState={visibilityState}
            onAddWidget={() => setIsPanelOpen(true)}
            onDeleteWidget={deleteWidget}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
