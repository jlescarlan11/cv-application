import "./styles/Sidebar.css";
import Header from "./Header";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="sidebar">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        context="sidebar"
      ></Header>
      <p>Hello Sidebar!</p>
    </div>
  );
};

export default Sidebar;
