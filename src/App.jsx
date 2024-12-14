import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import data from "./data";

function App() {
  const [formData, setFormData] = useState(data);

  function handleUpdateField(section, id, newValue) {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      ),
    }));
  }

  function handleAddSection(section) {
    const newId = formData[section].length;
    const newField = formData[section][0]; // Use the first entry as a template

    const updatedSection = {
      ...newField,
      id: newId,
      value: "", // Reset the value for new entry
    };

    setFormData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], updatedSection],
    }));
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const rootStyle = isDarkMode
    ? { backgroundColor: "#222831", color: "#EEEEEE" }
    : {};

  return (
    <div className="container" style={rootStyle}>
      {isSidebarOpen && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          formData={formData}
          onUpdateField={handleUpdateField}
          onAddSection={handleAddSection}
        />
      )}
      <Content
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        formData={formData}
      />

    </div>
  );
}

export default App;
