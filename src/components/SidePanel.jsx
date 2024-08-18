import React, { useState } from "react";
import "../styles/SidePanel.css";
import CreateWidget from "./CreateWidget";
import CategoryTab from "./CategoryTab";

const SidePanel = ({
  isPanelOpen,
  closePanel,
  widgets,
  addWidget,
  visibilityState,
  confirmChanges,
}) => {
  const [activeTab, setActiveTab] = useState("Create Widget");
  const [localVisibilityState, setLocalVisibilityState] =
    useState(visibilityState);

  const handleVisibilityChange = (title) => {
    setLocalVisibilityState((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const handleConfirmChanges = () => {
    confirmChanges(localVisibilityState);
    closePanel();
  };

  return (
    <>
      {isPanelOpen && <div className="overlay" onClick={closePanel}></div>}
      <div className={`side-panel ${isPanelOpen ? "open" : ""}`}>
        <div className="side-nav">
          <span id="side-title">Add Widget</span>
          <button className="close-button" onClick={closePanel}>
            X
          </button>
        </div>
        <div className="side-content">
          <p>Personalize your dashboard by adding the following widget</p>
        </div>
        <div className="tab-container">
          <div className="tab-buttons">
            <button
              className={activeTab === "CSPM" ? "active" : ""}
              onClick={() => setActiveTab("CSPM")}
            >
              CSPM
            </button>
            <button
              className={activeTab === "CWPP" ? "active" : ""}
              onClick={() => setActiveTab("CWPP")}
            >
              CWPP
            </button>
            <button
              className={activeTab === "Image" ? "active" : ""}
              onClick={() => setActiveTab("Image")}
            >
              Image
            </button>
            <button
              className={activeTab === "Ticket" ? "active" : ""}
              onClick={() => setActiveTab("Ticket")}
            >
              Ticket
            </button>
            <div className="tab-divider"></div>
            <button
              className={activeTab === "Create Widget" ? "active" : ""}
              onClick={() => setActiveTab("Create Widget")}
            >
             + Create Widget 
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "Create Widget" ? (
              <CreateWidget addWidget={addWidget} />
            ) : (
              <CategoryTab
                category={activeTab}
                widgets={widgets.filter(
                  (widget) => widget.category === activeTab
                )}
                visibilityState={localVisibilityState}
                toggleVisibility={handleVisibilityChange}
              />
            )}
          </div>
          {activeTab !== "Create Widget" && (
            <div className="tab-footer">
              <button id="cancel-btn" onClick={closePanel}>Cancel</button>
              <button id="confirm-btn" onClick={handleConfirmChanges}>Confirm</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
