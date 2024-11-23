import { useState } from "react";

import "./styles/Sidebar.css";
import Header from "./Header";
import BasicInfo from "./BasicInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";
// import Section from "./Section";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
  formData,
  onUpdateField,
  onAddSection,
}) => {
  return (
    <aside className="sidebar">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        context="sidebar"
      ></Header>

      <div className="sidebar-content">
        <BasicInfo
          data={formData.basicInfo}
          onUpdate={(id, value) => onUpdateField("basicInfo", id, value)}
        />
        <EducationInfo
          data={formData.educationInfo}
          onUpdate={(id, value) => onUpdateField("education", id, value)}
        />
        <ExperienceInfo
          data={formData.experienceInfo}
          onUpdate={(id, value) => onUpdateField("experience", id, value)}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
