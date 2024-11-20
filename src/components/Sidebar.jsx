import "./styles/Sidebar.css";
import Header from "./Header";

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
        <p>Hello Sidebar!</p>
      </div>
    </aside>
  );
};

export default Sidebar;
