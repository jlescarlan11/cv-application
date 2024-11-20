import "./styles/Sidebar.css";
import Header from "./Header";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="sidebar">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        context="sidebar"
      ></Header>
      <p>Hello Sidebar!</p>
    </div>
  );
};

export default Sidebar;
