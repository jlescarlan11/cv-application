import { useState, useRef } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import data from "./data";
import html2canvas from "html2canvas";

import { jsPDF } from "jspdf";

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

  const contentRef = useRef(); // Reference for the Content component

  const downloadContentAsPDF = () => {
    const element = contentRef.current; // Access the Content's DOM node

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("content.pdf");
    });
  };

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
          onDownload={downloadContentAsPDF}
        />
      )}
      <Content
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        formData={formData}
        contentRef={contentRef}
      />
    </div>
  );
}

export default App;
