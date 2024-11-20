import Header from "./Header";
import "./styles/Content.css";

const Content = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="main-content">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        context="mainContent"
      ></Header>
      <p>Hello content!</p>
    </div>
  );
};

export default Content;
