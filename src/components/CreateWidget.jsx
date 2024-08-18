import React, { useState } from "react";
import "../styles/CreateWidget.css";

const CreateWidget = ({ addWidget }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateWidget = () => {
    if (title && description && category) {
      const newWidget = { title, description, category };
      addWidget(newWidget);
      setTitle("");
      setDescription("");
      setCategory("");
    } else {
      alert("Please fill out all the fields");
    }
  };

  return (
    <div className="create-widget">
      <input
        type="text"
        placeholder="Name"
        value={title}
        maxLength="10"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={description}
        maxLength="70"
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Select a category
        </option>
        <option value="CSPM">CSPM</option>
        <option value="CWPP">CWPP</option>
        <option value="Image">Image</option>
        <option value="Ticket">Ticket</option>
      </select>
      <button onClick={handleCreateWidget}>Create Widget</button>
    </div>
  );
};

export default CreateWidget;
