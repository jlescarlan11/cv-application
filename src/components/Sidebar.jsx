import { useState } from "react";

import "./styles/Sidebar.css";
import Header from "./Header";
import BasicInfo from "./BasicInfo";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
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
        <BasicInfo></BasicInfo>
      </div>
    </aside>
  );
};

export default Sidebar;
